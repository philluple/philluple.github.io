import { ExperienceJson } from '../interface/App.types';
import { FC } from 'react'
import './styling/ExperienceDetails.css'
import '../style.css'

const ExperienceDetails: FC<ExperienceJson>= (data) => {
    return (
        <>
          <div className='custom-body'>
            <div className='long-text'>{data.description}</div>
          </div>
        </>
    )
}

export default ExperienceDetails;