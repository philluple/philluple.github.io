import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseJSON, Blurb } from '../interface/App.types';
import { fetchAllData, getBlurbs } from '../utils/common';
import { dataType } from '../interface/App.types';
import '../components/styling/Experience.css';

const ProjectPage: FC = () => {
  const [projects, setProj] = useState<BaseJSON[]>([]); // Initialize state as an empty array
  const [blurbs, setBlurbs] = useState<Blurb[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await fetchAllData(dataType.PROJECTS);
        if (data) {
          setProj(data as BaseJSON[]);
        }
        const blurbs = await getBlurbs(dataType.EXPERIENCE);
        setBlurbs(blurbs)
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className='custom-body'>
      {projects && (
        <div className='table'>
          <div>
            <div className='l-head-container'>
              <div className='medium-text'>RECENT WORK</div>
            </div>
            <div className='experiences-container'>
              {/* Render data for each company */}
              {projects.map((project, index) => (
                <div key={index}>
                  <SubProjectPage project={project} />
                  <hr className='custom-line' />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='r-head-container'>
              <div className='medium-text'>CHECK OUT MY EXPERIENCES...</div>
              {blurbs.map((blurb, index) => (
                <div key={index}>
                  <BlurbsView blurb={blurb}/>
                </div>
              ))}
            </div>
            {/* Add content or components for your projects here */}
          </div>
        </div>
      )}
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

const BlurbsView: FC<{ blurb: Blurb}> = ({blurb}) => {
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
  )
}

export default ProjectPage;
