import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LecturesList = () => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await fetch("http://localhost:9001/user/lectures"); // backend endpoint
        const data = await res.json();
        setLectures(data);
      } catch (err) {
        console.error("Error fetching lectures:", err);
      }
    };
    fetchLectures();
  }, []);

  return (
    <div className="p-6"> 
      <h2 className="text-2xl font-bold mb-4">All Lectures</h2>
      {lectures.length === 0 ? (
        <p>No lectures uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {lectures.map((lec) => (
            <li key={lec._id} className="border p-4 rounded shadow-sm">
              <h3 className="font-semibold">{lec.title}</h3>
              <p className="text-sm text-gray-600">{lec.description}</p>
              <Link
                to={`/lectures/${lec._id}`}
                className="text-blue-500 hover:underline"
              >
                View Lecture
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LecturesList;
