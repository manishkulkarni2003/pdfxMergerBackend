import axios from "axios";
import { useState } from "react";


const Feature = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [status, setStatus] = useState({message: "", type: ""});
  const [loading, setLoading] = useState(false);

  const handleMerge = async (e) => {
    e.preventDefault();
    
    if (!file1 || !file2) {
      setStatus({
        message: "Please select both PDF files",
        type: "error"
      });
      return;
    }

    setLoading(true);
    setStatus({message: "", type: ""});

    // Create a single FormData object for both files
    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);
    
    try {
      const res = await axios.post(
        'http://localhost:8082/api/file/merge',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          responseType: 'blob'
        }
      );
      
      // Create a download link for the merged PDF
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'merged.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      setStatus({
        message: "PDFs merged successfully! Download started.",
        type: "success"
      });
    } catch (err) {
      console.error("Error:", err);
      setStatus({
        message: "Error merging PDFs. Please try again.",
        type: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mergefiles">
      <h2>Merge PDF Files</h2>
      <form onSubmit={handleMerge}>
        <div className="file-input-group">
          <label htmlFor="file1">First PDF Document</label>
          <input 
            type="file" 
            id="file1"
            accept=".pdf"
            onChange={(e) => setFile1(e.target.files[0])}
          />
          {file1 && <span className="file-name">{file1.name}</span>}
        </div>
        
        <div className="file-input-group">
          <label htmlFor="file2">Second PDF Document</label>
          <input 
            type="file" 
            id="file2"
            accept=".pdf"
            onChange={(e) => setFile2(e.target.files[0])}
          />
          {file2 && <span className="file-name">{file2.name}</span>}
        </div>
        
        <button 
          className="merge-button" 
          type="submit" 
          disabled={loading}
        >
          {loading ? "Processing..." : "Merge PDFs"}
        </button>
        
        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Feature;