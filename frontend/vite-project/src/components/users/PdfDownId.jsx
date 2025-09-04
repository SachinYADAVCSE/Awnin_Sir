import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LecturePage = () => {
  const { id } = useParams();
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    const fetchLecture = async () => {
      try {
        const res = await fetch(`http://localhost:9001/user/lectures/${id}`);
        const data = await res.json();
        setLecture(data);
      } catch (err) {
        console.error("Error fetching lecture:", err);
      }
    };
    fetchLecture();
  }, [id]);

  if (!lecture) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{lecture.title}</h2>

      {/* PDF Viewer */}
      <iframe
        src={lecture.pdfUrl}
        title={lecture.title}
        width="100%"
        height="600px"
        className="border rounded mb-4"
      ></iframe>

      {/* Download Button */}
      <a
        href={lecture.pdfUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </a>
    </div>
  );
};

export default LecturePage;
