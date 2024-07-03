import { BaseJSON } from '../interface/App.types';
import { FC, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchJson, getSegment} from '../utils/common';
import { dataType } from '../interface/App.types';
import './styling/ExperienceDetails.css'
import '../style.css'

const ProjectDetails: FC = () => {
    const [project, setProj] = useState<BaseJSON>();
    const location = useLocation();
    useEffect(() => {
      const fetchExperience = async() => {
        if (location.pathname){
          const file = getSegment(location.pathname)
          const data = await fetchJson(dataType.PROJECTS, file)
          if (data){
            setProj(data as BaseJSON)
          } else {
            return (
              <h1>There was an error</h1>
            )
          }
        }
      }
      fetchExperience();
    }, []);

    return (
        <>
          <div className='custom-body'>
            <div className='text-container'>
              {project &&(
                project.description.split('\n').map((line, index) => (
                  <p className="long-text" key={index}>{line}</p>
                ))
              )}
            </div>
          </div>
        </>
    )
}

export default ProjectDetails;