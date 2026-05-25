import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BaseJSON, Blurb } from '../interface/App.types';
import { getBlurbs } from '../utils/common';
import { experiences, projects } from '../data';
import '../components/styling/Experience.css';

const ExperiencePage: FC = () => {
  const blurbs = getBlurbs(projects);
  return (
    <div className='custom-body'>
      <div className='table'>
        <div>
          <div className='l-head-container'>
            <div className='medium-text'>RECENT WORK</div>
          </div>
          <div className='experiences-container'>
            {experiences.map((experience) => (
              <div key={experience.short}>
                <SubExperiencePage experience={experience} />
                <hr className='custom-line' />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='r-head-container'>
            <div className='medium-text'>CHECK OUT MY PROJECTS...</div>
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

const SubExperiencePage: FC<{ experience: BaseJSON }> = ({ experience }) => {
  return (
    <Link to={`/experience/${experience.short}`} className='experience-link'>
      <div className='experience-container'>
        <div className='column'>
          <div>
            <div className='companyName'>{experience.full}</div>
            <div className='sub-text'>{experience.summary}</div>
            <div className='date'>{experience.startDate} to {experience.endDate}</div>
          </div>
        </div>
        <img src={experience.img} className='image-crop' alt={experience.full} />
      </div>
    </Link>
  );
};

const BlurbsView: FC<{ blurb: Blurb }> = ({ blurb }) => {
  return (
    <Link to={`/project/${blurb.short}`} className='experience-link'>
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

export default ExperiencePage;
