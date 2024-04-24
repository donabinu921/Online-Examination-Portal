import React, { useState, useEffect } from "react";
import "../Styles/RecentTests.css";
import axios from "axios";

const Results = ({ resultId }) => {
  console.log(`Results component rendered with resultId: ${resultId}`);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://661434ae2fc47b4cf27be0bb.mockapi.io/marks`)
      .then((res) => {
        console.log(res.data);
        const filteredMarks = res.data.filter(mark => mark.id === resultId);
        setMarks(filteredMarks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resultId]);

  return (
    <div className="results-table">
      {marks.map((mark) => (
        <div key={mark.id}>
          <p>Student Name: {mark.name}</p>
          <p>Score: {mark.mark}/10</p>
        </div>
      ))}
    </div>
  );
};

export default Results;