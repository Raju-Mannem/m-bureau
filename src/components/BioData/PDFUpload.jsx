
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { extractTextFromPDF } from '../../utils/pdf';
import { extractDataWithAI } from '../../utils/ai';
import { FaCloudUploadAlt, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const PDFUpload = ({ onDataExtracted }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a valid PDF file.');
      return;
    }

    setLoading(true);
    setError(null);
    setStatus('Parsing PDF...');

    try {
      // Step 1: Extract Text
      const text = await extractTextFromPDF(file);
      if (!text || text.trim().length === 0) {
        throw new Error('Could not extract text from this PDF. It might be scanned or empty.');
      }

      // Step 2: AI Extraction
      setStatus('Analyzing with AI...');
      const data = await extractDataWithAI(text);
      
      setStatus('Success!');
      if (onDataExtracted) {
        onDataExtracted(data);
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong during processing.');
    } finally {
      setLoading(false);
      // Reset status after a delay if needed, but keeping it helps user see result
    }
  }, [onDataExtracted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white hover:border-blue-400'}
          ${loading ? 'opacity-50 pointer-events-none' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center justify-center gap-2">
            
          {loading ? (
             <>
               <FaSpinner className="text-3xl text-blue-500 animate-spin" />
               <p className="text-sm text-gray-600 font-medium">{status}</p>
             </>
          ) : error ? (
             <>
               <FaExclamationCircle className="text-3xl text-red-500" />
               <p className="text-sm text-red-600">{error}</p>
               <p className="text-xs text-gray-400 mt-1">Click to try again</p>
             </>
          ) : (
            <>
              <FaCloudUploadAlt className="text-4xl text-gray-400" />
              <p className="text-sm text-gray-600">
                {isDragActive ? 'Drop the PDF here' : 'Drag & drop a Bio-Data PDF here'}
              </p>
              <p className="text-xs text-gray-400">or click to select file</p>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default PDFUpload;
