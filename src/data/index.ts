import type { BaseJSON, Captions } from '../interface/App.types';
import relativity from './experiences/relativity.json';
import jpl from './experiences/jpl.json';
import columbia from './experiences/columbia.json';
import lionpool from './projects/lionpool.json';
import stepitup from './projects/stepitup.json';
import phillipcodes from './projects/phillipcodes.json';
import captionsData from './metadata/captions.json';
import aboutText from './metadata/about.txt?raw';

export const experiences: BaseJSON[] = [relativity, jpl, columbia];
export const projects: BaseJSON[] = [lionpool, stepitup, phillipcodes];
export const captions: Captions = captionsData;
export const aboutContent: string = aboutText;
