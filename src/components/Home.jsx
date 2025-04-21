import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [file, setFile] = useState(null);

  const[message,setMessage]=useState("")
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      console.log("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post('http://localhost:8082/api/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(res.data)
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  return (
    <div className='file'>
      <form onSubmit={handleUpload}>
        <label>Upload Your PDF</label><br />
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={(e) => setFile(e.target.files[0])} 
        /><br /><br />
        <button type="submit">Submit</button>
      </form>

      <div >
        <p>{message?`${message}✅`:null}</p>
      </div>
    </div>
    
  );
};

export default Home;
