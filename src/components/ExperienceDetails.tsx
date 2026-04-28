import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { getSegment } from '../utils/common';
import { experiences } from '../data';
import './styling/ExperienceDetails.css';
import '../style.css';

const ExperienceDetails: FC = () => {
  const location = useLocation();
  const short = getSegment(location.pathname);
  const experience = experiences.find((e) => e.short === short);

  if (!experience) return <h1>There was an error</h1>;
  return (
    <div className='custom-body'>
      <div className='text-container'>
        {experience.description.split('\n').map((line, index) => (
          <p className="long-text" key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDetails;
