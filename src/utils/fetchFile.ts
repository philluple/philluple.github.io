import { CaptionProps, ExperienceProps, dataType} from "../interface/App.types";

export async function fetchData(data: dataType): Promise<ExperienceProps | CaptionProps | null> {
  try {
    let file: string;
    if (data === dataType.EXPERIENCE) {
      file = './data/experience.json';
    } else if (data === dataType.CAPTIONS) {
      file = './data/captions.json';
    } else {
      throw new Error('Invalid data type');
    }

    const response = await fetch(`${file}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const jsonData = await response.json();

    // Assuming jsonData structure corresponds to ExperienceProps or CaptionProps
    if (data === dataType.EXPERIENCE) {
      return jsonData as ExperienceProps;
    } else if (data === dataType.CAPTIONS) {
      return jsonData as CaptionProps;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
