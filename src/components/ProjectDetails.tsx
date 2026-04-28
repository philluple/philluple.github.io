import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { getSegment } from '../utils/common';
import { projects } from '../data';
import './styling/ExperienceDetails.css';
import '../style.css';

const ProjectDetails: FC = () => {
  const location = useLocation();
  const short = getSegment(location.pathname);
  const project = projects.find((p) => p.short === short);

  if (!project) return <h1>There was an error</h1>;
  return (
    <div className='custom-body'>
      <div className='text-container'>
        {project.description.split('\n').map((line, index) => (
          <p className="long-text" key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
