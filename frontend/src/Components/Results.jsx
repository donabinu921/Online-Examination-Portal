import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Results.css";

const Results = ({ resultId }) => {
  //   console.log(`Results component rendered with resultId: ${resultId}`);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://661434ae2fc47b4cf27be0bb.mockapi.io/marks`)
      .then((res) => {
        // console.log(res.data);
        const filteredMarks = res.data.find((item) => item.id === resultId);
        // console.log(filteredMarks);
        setMarks(filteredMarks.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resultId]);

  return (
    <div className="results-table">
      <h1>{resultId}</h1>
      {marks && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((result, index) => (
              <tr key={index}>
                <td>{result.name}</td>
                <td>{result.mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
