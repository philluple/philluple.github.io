import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseJSON } from '../interface/App.types';
import { fetchAllData } from '../utils/common';
import { dataType } from '../interface/App.types';
import '../components/styling/Experience.css';

const ExperiencePage: FC = () => {
  const [experiences, setExperiences] = useState<BaseJSON[]>([]); // Initialize state as an empty array

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const data = await fetchAllData(dataType.EXPERIENCE);
        if (data) {
          setExperiences(data as BaseJSON[]);
        }
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className='custom-body'>
      {experiences && (
        <div className='table'>
          <div>
            <div className='l-head-container'>
              <div className='medium-text'>RECENT WORK</div>
            </div>
            <div className='experiences-container'>
              {/* Render data for each company */}
              {experiences.map((experience, index) => (
                <div key={index}>
                  <SubExperiencePage experience={experience} />
                  <hr className='custom-line' />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='r-head-container'>
              <div className='medium-text'>CHECK OUT MY PROJECTS...</div>
            </div>
            {/* Add content or components for your projects here */}
          </div>
        </div>
      )}
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

export default ExperiencePage;
