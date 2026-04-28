import { BaseJSON, Blurb } from '../interface/App.types';

export function getSegment(path: string): string {
  const lastIndex = path.lastIndexOf('/');
  if (lastIndex === -1) return path;
  return path.slice(lastIndex + 1);
}

export function getBlurbs(items: BaseJSON[]): Blurb[] {
  return items.map(({ full, short, blurb }) => ({ full, short, blurb }));
}
