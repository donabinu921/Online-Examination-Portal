import React, { useState } from "react";
import { Button } from "antd";
import axios from "axios";
import "../Styles/ResultsTab.css";
const ResultsTab = () => {
  const results = [
    {
      id: 1,
      testName: "Test 1",
    },
    {
      id: 2,
      testName: "Test 2",
    },
    {
      id: 3,
      testName: "Test 3",
    },
  ];

  const marks = [
    {
      id: 1,
      name: "dona",
      mark: 20,
    },
    {
      id: 2,
      name: "dona",
      mark: 20,
    },
  ];

  const [showResults, setShowResults] = useState(false);

  const handleResults = (id) => {
    console.log("Results Clicked");

    setShowResults(true);
    axios
      .get(`http://localhost:5000/results/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <br />
      {showResults && (
        <div>
          <h2>Results </h2>
          <div className="results-table">
            {marks.map((mark) => (
              <div key={mark.id}>
                <div style={{"display":"flex"}}>
                <p>Student Name: {mark.name}</p>
                <p>Score: {mark.mark}/10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="result-tab">
        {results.map((result) => (
          <div key={result.id} className="result-bar">
            <h3>{result.testName}</h3>
            <Button
              type="primary"
              onClick={() => {
                handleResults(result.id);
              }}
            >
              Results
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsTab;
