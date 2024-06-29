
export interface ExperienceProps {
    [company: string]: ExperienceJson;
}

export interface ProjectsProps {
    [name: string]: ProjectJson;
}
  
export interface ExperienceJson {
    short: string;
    img: string;
    position: string;
    tech: string[];
    startDate: string;
    endDate: string;
    skills: string[];
    description: string;
}

export interface ProjectJson {
    position: string;
    tech: string[];
    startDate: string;
    endDate: string;
    skills: string[];
    description: string;
}
  