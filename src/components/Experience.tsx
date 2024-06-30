import { FC } from 'react';
import { Link } from 'react-router-dom'
import { ExperienceProps, ExperienceJson} from '../interface/App.types';
import '../components/styling/Experience.css';

const ExperiencePage: FC<ExperienceProps> = (experiences) => {
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
              {Object.keys(experiences).map((company, index) => (
                <div key={index}>
                  <SubExperiencePage {...experiences[company]} />
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


const SubExperiencePage: FC<ExperienceJson>= (data) =>{
  return(
    <Link to={`/experience/${data.short}`} className='experience-link'>
      <div className='experience-container'>
        <div className='column'>
          <div>
            <div className='companyName'>{data.full}</div>
            <div className='sub-text'>{data.summary}</div>
            <div className='date'>{data.startDate} to {data.endDate}</div>
          </div>
        </div>
        <img src={data.img} className='image-crop'></img>
      </div>
    </Link>
  )
}

export default ExperiencePage;
