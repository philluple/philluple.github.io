export interface Captions {
    [key: string]: string
}
  
export interface BaseJSON {
    full: string;
    short: string;
    img: string;
    position: string;
    tech: string[];
    startDate: string;
    endDate: string;
    skills: string[];
    summary: string;
    description: string;
}
  
export enum dataType {
    EXPERIENCE, 
    CAPTIONS, 
    PROJECTS,
}