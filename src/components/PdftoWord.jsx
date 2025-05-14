import React, { useState } from 'react'
import axios from 'axios'

const PdftoWord = () => {
    const [file,setFile]=useState(null)

    const handleWord=async(e)=>{
        e.preventDefault()
        if(!file){
            alert("Please Select a File")
            return;
        }

        const formData=new FormData()
        formData.append("file",file)

        try{
            const res=await axios.post('http://localhost:8082/api/file/pdftoword',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                },
                responseType:'blob'
            });
            const url=window.URL.createObjectURL(new Blob([res.data]));
            const link=document.createElement('a');
            link.href=url;
            link.setAttribute('download','Converted.docx');
            document.body.appendChild(link);
            link.click();
            link.remove();
            

        }catch(e){
            console.log('error',e)
            alert("Error while Uploading the File")
        }
    }

  return (
    <div className='pdftoword'>
        <h2>Convert Pdf to Word</h2>
      <form onSubmit={handleWord}>
        <div>
            <label htmlFor="file">Upload the Pdf File</label>
            <input type="file" id='file'
            accept='.pdf'
            onChange={(e)=>{
                setFile(e.target.files[0])
            }} />
            <button type='submit'>
                Covert 
            </button>
        </div>

      </form>
    </div>
  )
}

export default PdftoWord

