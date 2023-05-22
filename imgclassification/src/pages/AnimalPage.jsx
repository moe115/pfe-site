import React , { useState } from 'react';
import './AnimalPage.css';
function AnimalPage() {

const [selectedFile, setSelectedFile] = useState(null);
const [imageName , setImageName] = useState("")

const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);

  // Create a FileReader instance
  const reader = new FileReader();

 // Define a callback function when the file is loaded
 reader.onload = (e) => {
  const previewImage = document.getElementById('previewImage');
  previewImage.src = e.target.result;
};


  // Read the selected file as a data URL
  reader.readAsDataURL(selectedFile);


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
      console.log('Error:', error)        ;}         };


  return (
    <div classNamer="home">
<img className="home__image" src="https://wallpapershome.com/images/pages/pic_h/23724.jpg
" alt="" />

<div className='AnimalRow'><h2>please insert animal image <input type="file" onChange={handleFileChange}/><br/> 
<img id="previewImage" alt="Preview" />
our model predict : {imageName}
</h2>
</div>
<button onClick={handleSubmit}>submit</button>
</div>



  )
}

export default AnimalPage