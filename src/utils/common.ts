import { 
  dataType, 
  BaseJSON, 
  Captions } from "../interface/App.types";

interface Paths{
  "experiences": string[]
  "projects": string[]
}

const experienceFiles: string[] = ['./data/experiences/jpl.json', './data/experiences/columbia.json', './data/experiences/relativity.json'];
const projectFiles: string[] = ['./data/projects/lionpool.json', './data/projects/pillip-codes.json', './data/projects/stepitup.json'];

export function getSegment(path: string): string {
  // Use lastIndexOf to find the last '/' character
  const lastIndex = path.lastIndexOf('/');
  
  // If lastIndex is -1, no '/' was found, return the entire path
  if (lastIndex === -1) {
      return path;
  }
  
  return path.slice(lastIndex + 1);
}
// Called in the beginning to configure all ROUTES
export async function fetchPaths(): Promise<Paths> {
  try {
    // Fetch experiences from experience.txt
    const responseExperiences = await fetch('./data/metadata/experience.txt');
    if (!responseExperiences.ok) {
      throw new Error('Failed to fetch experiences');
    }

    // Fetch projects from projects.txt
    const responseProjects = await fetch('./data/metadata/projects.txt');
    if (!responseProjects.ok) {
      throw new Error('Failed to fetch projects');
    }

    const projects: string[] = await responseProjects.text().then(data => data.split('\n').map(line => line.trim()));
    const experiences: string[] = await responseExperiences.text().then(data => data.split('\n').map(line => line.trim()));
    return {"experiences": experiences, "projects": projects} as Paths

  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it further up the call stack
  }
}

// Used to fetch a specific JSON file 
export async function fetchJson(data: dataType, ref: string): Promise<BaseJSON | null>{
  try{
    let file: string;
    if (data==dataType.EXPERIENCE){
      file = `./data/experiences/${ref}.json`
    } else {
      file = `./data/projects/${ref}.json`
    }
    const response = await fetch(file)
    if (response){
      const jsonData = await response.json();
      return jsonData as BaseJSON
    } else {
      throw new Error("Could not find file")
    }
  } catch(error){
    console.log("There was error fetching the JSON: ", error)
    return null
  }
}

// Used to fetch captions neccessary for NavBar
export async function fetchCaptions(): Promise<Captions | null> {
  try {
    const response = await fetch('./data/metadata/captions.json');
    if (response.ok) { // Check if the response is successful
      const jsonData = await response.json(); // Use () to call response.json()
      return jsonData as Captions; // Assuming Captions is an interface or type
    } else {
      throw new Error('There was an error fetching the captions');
    }
  } catch (error) {
    console.error('Error fetching captions:', error);
    return null; // Return null in case of any error
  }
}


// Used to render Project and Experience Pages 
export async function fetchAllData(data: dataType): Promise<BaseJSON[] | null> {
  let files: string[];
  if (data === dataType.EXPERIENCE) {
    files = experienceFiles;
  } else if (data === dataType.PROJECTS) {
    files = projectFiles;
  } else {
    return null;
  }

  try {
    const promises = files.map(async (file) => {
      const response = await fetch(file);
      if (response.ok) {
        return await response.json();
      } else {
        console.log("Error fetching:", file);
        return null; // or throw an error if preferred
      }
    });

    // Wait for all promises to resolve
    const dataArr = await Promise.all(promises);

    return dataArr.filter((item) => item !== null) as BaseJSON[];
  } catch (error) {
    console.error('Error fetching all data:', error);
    return null;
  }
}
