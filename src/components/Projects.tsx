import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BaseJSON, Blurb } from '../interface/App.types';
import { getBlurbs } from '../utils/common';
import { experiences, projects } from '../data';

const ProjectPage: FC = () => {
  const blurbs = getBlurbs(experiences);
  return (
    <div className='custom-body'>
      <div className='table-layout'>
        <div>
          <div className='l-head-container'>
            <div className='medium-text'>RECENT WORK</div>
          </div>
          <div className='experiences-container'>
            {projects.map((project) => (
              <div key={project.short}>
                <SubProjectPage project={project} />
                <hr className='custom-line' />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='r-head-container'>
            <div className='medium-text'>CHECK OUT MY EXPERIENCES...</div>
            {blurbs.map((blurb) => (
              <div key={blurb.short}>
                <BlurbsView blurb={blurb} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SubProjectPage: FC<{ project: BaseJSON }> = ({ project }) => {
  return (
    <Link to={`/project/${project.short}`} className='experience-link'>
      <div className='experience-container'>
        <div className='column'>
          <div>
            <div className='companyName'>{project.full}</div>
            <div className='sub-text'>{project.summary}</div>
            <div className='date'>{project.startDate} to {project.endDate}</div>
          </div>
        </div>
        <img src={project.img} className='image-crop' alt={project.full} />
      </div>
    </Link>
  );
};

const BlurbsView: FC<{ blurb: Blurb }> = ({ blurb }) => {
  return (
    <Link to={`/experience/${blurb.short}`} className='experience-link'>
      <div className='experience-container'>
        <div className='column'>
          <div>
            <div className='companyName'>{blurb.full}</div>
            <div className='sub-text'>{blurb.blurb}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPage;
