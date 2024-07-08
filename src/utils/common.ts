import { 
  dataType, 
  BaseJSON, 
  Captions, 
  Blurb
} from "../interface/App.types";


const experienceFiles: string[] = ['./data/experiences/jpl.json', './data/experiences/columbia.json', './data/experiences/relativity.json'];
const projectFiles: string[] = ['./data/projects/lionpool.json', './data/projects/stepitup.json', './data/projects/phillipcodes.json'];

export async function getBlurbs(blurb: dataType): Promise<Blurb[]> {
  try {
    const data: BaseJSON[] | null = await fetchAllData(blurb); // Fetch data using your fetchAllData function

    if (data === null) {
      console.warn('fetchAllData returned null.');
      return []; // Return empty array if fetchAllData returns null
    }

    // Map each BaseJSON object to a Blurb object
    const blurbs: Blurb[] = data.map((baseJson: BaseJSON) => ({
      full: baseJson.full,
      short: baseJson.short,
      blurb: baseJson.blurb
    }));

    return blurbs;
  } catch (error) {
    // Handle any errors from fetchAllData or mapping process
    console.error('Error fetching blurbs:', error);
    throw error;
  }
}

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

export async function fetchPaths(file: string): Promise<string[]>{
  try{
    const response = await fetch(file);
    if (!response.ok){
      throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
    }
    const data = await response.text();
    return data.split('\n').map(line => line.trim());
  } catch(error){
    console.error(`Error in fetchMetadata ${file}:`, error);
    return []
  }

}


// Used to fetch a specific JSON file 
export async function fetchJson(data: dataType, ref: string): Promise<BaseJSON | null>{
  try{
    let file: string;
    if (data==dataType.EXPERIENCE){
      file = `./data/experiences/${ref}.json`
      console.log(file)
    } else {
      file = `./data/projects/${ref}.json`
      console.log(file)
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
    return null; // Return null if data type is neither EXPERIENCE nor PROJECTS
  }

  try {
    const promises = files.map(async (file) => {
      try {
        const response = await fetch(file);
        if (response.ok) {
          return await response.json();
        } else {
          console.error(`Error fetching ${file}: ${response.statusText}`);
          return null; // Return null if fetch was not successful
        }
      } catch (error) {
        console.error(`Error fetching ${file}: ${error}`);
        return null; // Return null if an exception occurred during fetch
      }
    });

    // Wait for all promises to resolve
    const dataArr = await Promise.all(promises);
    return dataArr.filter((item) => item !== null) as BaseJSON[];
  } catch (error) {
    console.error('Error fetching all data:', error);
    return null; // Return null if there was a general error
  }
}
