import { useState } from "react";
import "./ProviderForm.css"; // link to external stylesheet

export default function sampleTestPage() {
  const [certifications, setCertifications] = useState([
    { title: "", issuedBy: "", year: "", file: null },
  ]);

  const handleAddCertification = () => {
    setCertifications([
      ...certifications,
      { title: "", issuedBy: "", year: "", file: null },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...certifications];
    updated[index][field] = value;
    setCertifications(updated);
  };

  const handleFileChange = (index, file) => {
    const updated = [...certifications];
    updated[index].file = file;
    setCertifications(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("fullName", "John Doe");
    formData.append("email", "john@example.com");
    formData.append("password", "securepass123");

    certifications.forEach((cert) => {
      formData.append("certificationTitle", cert.title);
      formData.append("certificationIssuedBy", cert.issuedBy);
      formData.append("certificationYear", cert.year);
      if (cert.file) {
        formData.append("certifications", cert.file);
      }
    });

    const res = await fetch("/api/providers/register", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="provider-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Register as a Provider</h2>

      {certifications.map((cert, index) => (
        <div key={index} className="cert-block">
          <input
            type="text"
            placeholder="Title"
            value={cert.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Issued By"
            value={cert.issuedBy}
            onChange={(e) => handleChange(index, "issuedBy", e.target.value)}
            className="input"
          />
          <input
            type="number"
            placeholder="Year"
            value={cert.year}
            onChange={(e) => handleChange(index, "year", e.target.value)}
            className="input"
          />
          <input
            type="file"
            onChange={(e) => handleFileChange(index, e.target.files[0])}
            accept=".pdf,.jpg,.png,.jpeg,.docx"
            className="file-input"
          />
        </div>
      ))}

      <button type="button" onClick={handleAddCertification} className="add-btn">
        + Add Certification
      </button>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}
