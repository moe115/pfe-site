import React , { useState } from 'react';
import './AnimalPage.css';
function AnimalPage() {

const [selectedFile, setSelectedFile] = useState(null);
const [imageName , setImageName] = useState("")

const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.log('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:8000/items/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setImageName(data.filename)
        console.log('Response:', data.filename);
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


  return (
    <div classNamer="home">
 <img className="home__image" src="https://wallpaperaccess.com/full/2329446.jpg" alt="" />
<div className='AnimalRow'><h2>please insert animal image <input type="file" onChange={handleFileChange}/><br/> 
our model predict : {imageName}
</h2>
</div>
<button onClick={handleSubmit}>submit</button>
</div>



  )
}

export default AnimalPage