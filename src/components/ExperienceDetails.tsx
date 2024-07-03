import { BaseJSON } from '../interface/App.types';
import { FC, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchJson, getSegment} from '../utils/common';
import { dataType } from '../interface/App.types';
import './styling/ExperienceDetails.css'
import '../style.css'

const ExperienceDetails: FC = () => {
    const [experience, setExperience] = useState<BaseJSON>();
    const location = useLocation();
    useEffect(() => {
      const fetchExperience = async() => {
        if (location.pathname){
          const file = getSegment(location.pathname)
          const data = await fetchJson(dataType.EXPERIENCE, file)
          if (data){
            setExperience(data as BaseJSON)
          } else {
            return (
              <h1>There was an error</h1>
            )
          }
        }
      }
      fetchExperience();
    }, []);
    

    useEffect(() =>{

    })
    return (
        <>
          <div className='custom-body'>
            <div className='text-container'>
              {experience &&(
                experience.description.split('\n').map((line, index) => (
                  <p className="long-text" key={index}>{line}</p>
                ))
              )}
            </div>
          </div>
        </>
    )
}

export default ExperienceDetails;