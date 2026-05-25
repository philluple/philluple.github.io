import './styling/ExperienceDetails.css';
import '../style.css';
import { aboutContent } from '../data';

export default function About() {
  return (
    <div className='custom-body'>
      <div className='text-container'>
        {aboutContent.split('\n').map((line, index) => (
          <p className="long-text" key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
