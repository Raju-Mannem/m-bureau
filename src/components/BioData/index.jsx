import { useRef, useState } from "react";
import { NavbarDemo } from "../Navbar";
import Footer from "../Footer";
import female from "../../assets/female.png";
import male from "../../assets/male.png";
import Switcher4 from "../ui/switch";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

const Index = () => {
  const [isMale, setIsMale] = useState(true);
  const fieldIdRef = useRef(1);
  const [fields, setFields] = useState([
    {
      id: fieldIdRef.current,
      label: "Full Name",
      name: "field_1",
      type: "text",
    },
     {
      id: fieldIdRef.current+1,
      label: "Age",
      name: "field_2",
      type: "number",
    },
    {
      id: fieldIdRef.current+2,
      label: "Date of Birth",
      name: "field_3",
      type: "text",
    },
    {
      id: fieldIdRef.current+3,
      label: "Birth Time",
      name: "field_4",
      type: "text",
    },
    {
      id: fieldIdRef.current+4,
      label: "Occupatioin / Profession",
      name: "field_5",
      type: "text",
    },
    {
      id: fieldIdRef.current+5,
      label: "Caste",
      name: "field_6",
      type: "text",
    },
    {
      id: fieldIdRef.current+6,
      label: "Star",
      name: "field_7",
      type: "text",
    },
    {
      id: fieldIdRef.current+7,
      label: "gothram",
      name: "field_8",
      type: "text",
    },
    {
      id: fieldIdRef.current+8,
      label: "Location",
      name: "field_9",
      type: "text",
    },
    {
      id: fieldIdRef.current+9,
      label: "Father Name",
      name: "field_10",
      type: "text",
    },
    {
      id: fieldIdRef.current+10,
      label: "Father Occupation",
      name: "field_11",
      type: "text",
    },
    {
      id: fieldIdRef.current+11,
      label: "Mother Name",
      name: "field_12",
      type: "text",
    },
    {
      id: fieldIdRef.current+12,
      label: "Mother Occupation",
      name: "field_13",
      type: "text",
    },
    {
      id: fieldIdRef.current+13,
      label: "Siblings",
      name: "field_14",
      type: "text",
    },
    {
      id: fieldIdRef.current+14,
      label: "Property",
      name: "field_15",
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

  const handlePdf = (e) => {
    e.preventDefault();
    console.log(formData)
    const doc = new jsPDF();
    doc.setFillColor(245, 248, 255);
    doc.rect(0,0,doc.internal.pageSize.getWidth(),doc.internal.pageSize.getHeight(),"F");

    const imgURL = "https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/xy4pnmommssiuorbghoe";
    const genderImg = isMale?male:female;

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
    boxX + padding +35,
    boxY + padding,
    imgSize+10,
    imgSize
  );

   doc.addImage(
    genderImg,
    "PNG",
    boxX + padding + imgSize + 60,
    boxY + padding,
    imgSize-12,
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
    theme: "grid",
    styles: {
      fontSize: 10,
      cellPadding: 4,
      lineColor: [180, 180, 180],  // border color
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
      0: { cellWidth: 20 }, // S.No
      1: { cellWidth: 60 }, // Label
      2: { cellWidth: 100 }, // Value
    },
  });

  doc.save(`${fullName}-bio-data.pdf`);
  };
  return (
    <div>
      <NavbarDemo />
      <div>
        <div className="flex items-center min-h-screen w-full bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="sm:mx-12 my-20 dark:bg-gray-800 sm:p-5 rounded-md shadow-lg">
              <div className="w-full py-4 flex justify-center gap-12 sm:gap-24 items-center bg-green-50 border-2 border-emerald-50 shadow-lg">
                <img
                  src="https://res.cloudinary.com/dhxtw97su/image/upload/f_auto,q_auto/v1/marriage-bureau/xy4pnmommssiuorbghoe"
                  alt="Krishnaveni Marriage Bureau"
                  className="w-auto h-12 sm:h-32 inline-block sm:px-4 sm:mx-4"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src={isMale ? male : female}
                    className="w-auto h-[60px] sm:h-[120px] bg-gray-100 px-4 sm:px-8 py sm:py-4 rounded-full"
                    alt="gender"
                  />
                  <Switcher4 setIsMale={setIsMale} />
                </div>
              </div>
              <div className="px-2 sm:px-40 py-6 bg-indigo-100">
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
                          className={`px-2 sm:px-4 py sm:py-1 rounded-md text-white ${
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

                    <div className="flex gap-4 mt-6 text-xs">
                      <button
                        type="button"
                        onClick={addField}
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                      >
                        + Add Field
                      </button>

                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        Print
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
