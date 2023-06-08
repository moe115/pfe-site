import React , { useState } from 'react';
import './AnimalPage.css';

function AnimalPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
        setImageName(data.filename);
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
<img className="home__image" src="https://wallpapershome.com/images/pages/pic_h/23724.jpg" alt="" />

<div className='AnimalRow'><h2>please insert animal image <input type="file" onChange={handleFileChange}/><br/> <br/><br/><br/>

{previewImage && (
          <img className="previewImage" src={previewImage} alt="Preview" />
        )}
<br/> 
<br/> 
<button onClick={handleSubmit}>submit</button> <br/> 
our model predict : {imageName}
</h2>
</div>
</div>



  )
}

export default AnimalPage