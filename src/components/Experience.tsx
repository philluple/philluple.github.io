import { FC } from 'react';
import { Link } from 'react-router-dom'
import { ExperienceProps } from '../interface/App.types';
import '../components/styling/Experience.css';

const ExperiencePage: FC<ExperienceProps>= (experiences) => {
  return (
    <div>
      {experiences && (
        <div>
          {/* Example: Render data for each company */}
          <div className="container">
            {Object.keys(experiences).map((company, index) => (
              <Link key={index} to={`/experience/${experiences[company].short}`} className='link-reset'>
                <div key={index} className="row">
                  <div className='col'>
                  <div className='companyName'>{company}</div>
                  <div className='sub-text'>{experiences[company].position}</div>
                  <div className='sub-text'>{experiences[company].startDate} to {experiences[company].endDate} </div>
                  </div>
                  <div className='col'>
                    <img src={experiences[company].img} className='image-crop'></img>
                  </div> 
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;
