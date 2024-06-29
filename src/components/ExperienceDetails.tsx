import { ExperienceJson } from '../interface/App.types';
import { FC } from 'react'

const ExperienceDetails: FC<ExperienceJson>= (data) => {
    return (
        <>
            <h1>{data.description}</h1>
        </>
    )
}

export default ExperienceDetails;