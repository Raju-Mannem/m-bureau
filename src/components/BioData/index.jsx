import { useRef, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import female from "../../assets/female.png";
import male from "../../assets/male.png";
import Switcher4 from "../ui/switch";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { toPng } from 'html-to-image';
import axios from 'axios';
import PDFUpload from "./PDFUpload";


const Index = () => {
  const [isMale, setIsMale] = useState(true);
  const fieldIdRef = useRef(1);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);
  const screenshotRef = useRef(null)
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false); // Global or AI loading
  const [fetching, setFetching] = useState(false); // Fetching existing data
  const [fields, setFields] = useState([
    {
      id: fieldIdRef.current - 15,
      label: "Full Name",
      name: "field_16",
      type: "text",
    },
    {
      id: fieldIdRef.current - 14,
      label: "Age",
      name: "field_15",
      type: "number",
    },
    {
      id: fieldIdRef.current - 13,
      label: "Date of Birth",
      name: "field_14",
      type: "text",
    },
    {
      id: fieldIdRef.current - 12,
      label: "Birth Time",
      name: "field_13",
      type: "text",
    },
	{
      id: fieldIdRef.current - 11,
      label: "Education",
      name: "field_12",
      type: "text",
    },
    {
      id: fieldIdRef.current - 10,
      label: "Occupatioin / Profession",
      name: "field_11",
      type: "text",
    },
    {
      id: fieldIdRef.current - 9,
      label: "Caste",
      name: "field_10",
      type: "text",
    },
    {
      id: fieldIdRef.current - 8,
      label: "Star",
      name: "field_9",
      type: "text",
    },
    {
      id: fieldIdRef.current - 7,
      label: "gothram",
      name: "field_8",
      type: "text",
    },
    {
      id: fieldIdRef.current - 6,
      label: "Location",
      name: "field_7",
      type: "text",
    },
    {
      id: fieldIdRef.current - 5,
      label: "Father Name",
      name: "field_6",
      type: "text",
    },
    {
      id: fieldIdRef.current - 4,
      label: "Father Occupation",
      name: "field_5",
      type: "text",
    },
    {
      id: fieldIdRef.current - 3,
      label: "Mother Name",
      name: "field_4",
      type: "text",
    },
    {
      id: fieldIdRef.current - 2,
      label: "Mother Occupation",
      name: "field_3",
      type: "text",
    },
    {
      id: fieldIdRef.current - 1,
      label: "Siblings",
      name: "field_2",
      type: "text",
    },
    {
      id: fieldIdRef.current,
      label: "Property",
      name: "field_1",
      type: "text",
    },
  ]);

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLabelChange = (id, value) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, label: value } : field
      )
    );
  };

  const addField = () => {
    fieldIdRef.current += 1;

    const newField = {
      id: fieldIdRef.current,
      label: `Field ${fieldIdRef.current}`,
      name: `field_${fieldIdRef.current}`,
      type: "text",
    };

    setFields((prev) => [...prev, newField]);
  };

  const removeField = (id, name) => {
    setFields((prev) => prev.filter((field) => field.id !== id));

    setFormData((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setUploadedImage(imageURL);
  };

  const handlePdf = (e) => {
    e.preventDefault();
    const doc = new jsPDF({});
    doc.setFillColor(245, 248, 255);
    doc.rect(
      0,
      0,
      doc.internal.pageSize.getWidth(),
      doc.internal.pageSize.getHeight(),
      "F"
    );

    const imgURL =
      "https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/xy4pnmommssiuorbghoe";
    const genderImg = uploadedImage || (isMale ? male : female);

    // ---- Combined Box ----
    const boxX = 20;
    const boxY = 10;
    const boxWidth = 167;
    const boxHeight = 40;

    // Box styling
    doc.setDrawColor(22, 160, 133); // border
    doc.setFillColor(230, 245, 243); // background
    doc.setLineWidth(1);

    doc.rect(boxX, boxY, boxWidth, boxHeight, "FD");
    const imgSize = 30;
    const padding = 5;

    doc.addImage(
      imgURL,
      "PNG",
      boxX + padding + 35,
      boxY + padding,
      imgSize + 10,
      imgSize
    );

    doc.addImage(
      genderImg,
      "PNG",
      boxX + padding + imgSize + 60,
      boxY + padding,
      imgSize - 12,
      imgSize
    );

    // doc.addImage(imgURL, "PNG", 60, 10, 30, 30);
    // doc.addImage(gender, "PNG", 120, 10, 30, 30);

    const fullName = formData["field_1"] || "User";
    doc.setFontSize(16);
    //  doc.text(`${fullName} Bio Data`, 14, 50);

    const tableBody = fields.map((field, index) => [
      index + 1,
      field.label,
      formData[field.name] || "-", // show "-" if empty
    ]);
    autoTable(doc, {
      startY: 60,
      head: [["S.No", "Field", "Details"]],
      body: tableBody,
      width: "auto",
      theme: "grid",
      styles: {
        overflow: 'linebreak',
        cellWidth: 'auto',
        fontSize: 10,
        cellPadding: 4,
        lineColor: [180, 180, 180], // border color
        valign: "middle",
      },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: 255,
        fontStyle: "bold",
        // halign: "center",
      },
      bodyStyles: {
        fillColor: [245, 248, 255], // light blue
      },
      alternateRowStyles: {
        fillColor: [255, 255, 255], // white
      },

      columnStyles: {
        0: { cellWidth: 16 }, // S.No
        1: { cellWidth: 60 }, // Label
        2: { cellWidth: 100 }, // Value
      },
    });

    doc.save(`${fullName}-bio-data.pdf`);
  };

  const handleScreenshot = () => {
    if (screenshotRef.current === null) {
      return
    }

    toPng(screenshotRef.current, { cacheBust: true, filter: (node) => {
    if (node.classList?.contains('no-print')) {
      return false;
    }
    return true;
  },})
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${formData["field_1"]}-bio-data.png` || "bio-data.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Fetch existing data if ID is present
  useEffect(() => {
    if (id) {
        const fetchBioData = async () => {
            setFetching(true);
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/biodata/${id}`);
                const data = res.data;
                
                if (data) {
                    // Populate fields and formData
                    const newFields = [];
                    const newFormData = {};
                    let nextId = 1;
                    
                    if (data.data && Array.isArray(data.data)) {
                        data.data.forEach((item) => {
                            const fieldName = `field_${nextId}`;
                            newFields.push({
                                id: nextId,
                                label: item.label,
                                name: fieldName,
                                type: "text",
                            });
                            newFormData[fieldName] = item.value;
                            nextId++;
                        });
                        setFields(newFields);
                        setFormData(newFormData);
                        fieldIdRef.current = nextId;
                    }

                    if (data.imageUrl) {
                        setUploadedImage(data.imageUrl);
                    } else {
                        setUploadedImage(null);
                    }
                    
                    if (data.isMale !== undefined) {
                        setIsMale(data.isMale);
                    }
                }
            } catch (err) {
                console.error("Error fetching biodata", err);
                alert("Failed to load BioData");
            } finally {
                setFetching(false);
            }
        };
        fetchBioData();
    }
  }, [id]);

  const handleAIDataExtracted = (data) => {
    if (!data || data.length === 0) return;

    const newFields = [];
    const newFormData = {};
    let nextId = 1;

    data.forEach((item) => {
        const fieldName = `field_${nextId}`;
        newFields.push({
            id: nextId,
            label: item.label,
            name: fieldName,
            type: "text",
        });
        newFormData[fieldName] = item.value;
        nextId++;
    });

    fieldIdRef.current = nextId;
    setFields(newFields);
    setFormData(newFormData);
  };

  const handleSave = async () => {
    try {
        const formDataToSend = new FormData();
        
        // Prepare data as label-value pairs
        const dataToSave = fields.map(field => ({
            label: field.label,
            value: formData[field.name] || ""
        }));

        formDataToSend.append('data', JSON.stringify(dataToSave));
        formDataToSend.append('isMale', isMale);

        if (fileInputRef.current && fileInputRef.current.files[0]) {
             formDataToSend.append('image', fileInputRef.current.files[0]);
        }
        
        let url = `${import.meta.env.VITE_API_URL}/biodata`;
        let method = 'post';

        if (id) {
            url = `${import.meta.env.VITE_API_URL}/biodata/${id}`;
            method = 'put';
        }

        await axios({
            method: method,
            url: url,
            data: formDataToSend,
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        alert(`BioData ${id ? 'updated' : 'saved'} successfully!`);
        if(!id) {
             // Maybe navigate to list or just stay? 
             // Determine if user is admin or regular. 
        }

    } catch (error) {
        console.error("Save Error:", error);
        alert("Failed to save BioData.");
    }
  };

  const handleDelete = async () => {
      if(!id) return;
      if(!window.confirm("Are you sure you want to delete this BioData? This cannot be undone.")) return;

      try {
          await axios.delete(`${import.meta.env.VITE_API_URL}/biodata/${id}`);
          alert("BioData deleted successfully");
          navigate('/admin/biodata'); // Go back to list
      } catch (error) {
          console.error("Delete Error", error);
          alert("Failed to delete BioData");
      }
  };


  return (
    <div>
      <NavbarDemo />
      <div>
        <div className="flex items-center min-h-screen w-full bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="sm:mx-12 my-20 dark:bg-gray-800 sm:p-5 rounded-md shadow-lg" ref={screenshotRef}>
              <div className="w-full py-4 flex justify-center gap-12 sm:gap-24 items-center bg-green-50 border-2 border-emerald-50 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/xy4pnmommssiuorbghoe"
                  alt="Krishnaveni Marriage Bureau"
                  className="w-auto h-12 sm:h-32 inline-block sm:px-4 sm:mx-4"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src={uploadedImage || (isMale ? male : female)}
                    onClick={handleImageClick}
                    className="w-auto h-[60px] sm:h-[120px] bg-gray-100 px-4 sm:px-8 py sm:py-4 rounded-full"
                    alt="profile"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="no-print">
                  <Switcher4 setIsMale={setIsMale} setUploadedImage={setUploadedImage} />
                  </div>
                </div>
              </div>
              <div className="px-2 sm:px-40 py-6 bg-indigo-100">
                <div className="no-print">
                <PDFUpload onDataExtracted={handleAIDataExtracted} />
                </div>
                <form onSubmit={handlePdf}>
                  {fields.map((field, index) => (
                    <div key={index} className="mb-4 flex gap-3 items-center">
                      {/* Editable Label */}
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) =>
                          handleLabelChange(field.id, e.target.value)
                        }
                        className="w-2/3 p-2 text-xs border rounded-md"
                        placeholder="Label"
                      />

                      {/* Field Value */}
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-2/3 p-2 text-xs border rounded-md"
                        placeholder={`Enter ${field.label}`}
                      />

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeField(field.id, field.name)}
                        disabled={fields.length === 1}
                        className={`no-print px-2 sm:px-4 py sm:py-1 rounded-md text-white ${
                          fields.length === 1
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                        title="Remove field"
                      >
                        x
                      </button>
                    </div>
                  ))}

                  <div className="no-print flex gap-4 mt-6 text-xs flex-wrap">
                    <button
                      type="button"
                      onClick={addField}
                      className="px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                      + Add Field
                    </button>

                    <button
                      type="button"
                      onClick={handleSave}
                      className="px-4 py-2 bg-white text-green-500 border-2 border-green-500 rounded-md"
                    >
                      {id ? "Update" : "Save"}
                    </button>

                     {id && (
                        <button
                          type="button"
                          onClick={handleDelete}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Delete
                        </button>
                     )}
                    
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Print
                    </button>

                    <button
                      type="button"
                      onClick={handleScreenshot}
                      className="px-4 py-2 bg-white text-blue-500 border-2 border-blue-500 rounded-md"
                    >
                      Download Image
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
