import './styling/ExperienceDetails.css'
import '../style.css'
import { useEffect, useState } from 'react';

export default function About (){
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    async function fetchTxtFile() {
      const response = await fetch('./data/metadata/about.txt');
      const text = await response.text();
      setFileContent(text);
    }

    fetchTxtFile();
  }, []);
  return(
    <div className='custom-body'>
      <div className='text-container'>
        {fileContent.split('\n').map((line, index) => (
            <p className="long-text" key={index}>{line}</p>
        ))}
      </div>
    </div>
  )
}

