import React, { useState } from "react";
import axios from "axios";

const UploadPdf = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a PDF first!");
            return;
        }

        const formData = new FormData();
        formData.append("pdf", file);
        formData.append("title", title);
        formData.append("description", description);
        
        try {
            setUploading(true);
            const res = await axios.post("http://localhost:9001/assets/upload-pdf", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setUploadedUrl(res.data.url); // Cloudinary URL returned from backend
            console.log(uploadedUrl);
            alert("✅ PDF uploaded successfully!");
        } catch (err) {
            console.error(err);
            alert("❌ Upload failed. Check console for details.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto my-30 bg-white shadow-md border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Upload Lecture PDF</h2>

            <input
                type="text"
                value={title}
                placeholder="Enter the Title"
                onChange={(e) => { setTitle(e.target.value) }}
                className="mb-4 w-full px-3 py-2 border rounded-lg"

            />

            <textarea
                type="text"
                placeholder="Lecture Description (optional)"
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
                className="mb-4 w-full px-3 py-2 border rounded-lg"

            ></textarea>

            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="mb-4"
            />


            <button
                onClick={handleUpload}
                disabled={uploading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
                {uploading ? "Uploading..." : "Upload PDF"}
            </button>

            {uploadedUrl && (
                <div className="mt-4">
                    <p className="text-green-600">File uploaded successfully!</p>
                    <a
                        href={uploadedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        View / Download PDF
                    </a>
                </div>
            )}
        </div>
    );
};

export default UploadPdf;
