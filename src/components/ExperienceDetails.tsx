import { ExperienceJson } from '../interface/App.types';
import { FC } from 'react'
import './styling/ExperienceDetails.css'
import '../style.css'

const ExperienceDetails: FC<ExperienceJson>= (data) => {
    return (
        <>
          <div className='custom-body'>
            <div className='text-container'>
              {data.description.split('\n').map((line, index) => (
                  <p className="long-text" key={index}>{line}</p>
              ))}
            </div>
          </div>
        </>
    )
}

export default ExperienceDetails;