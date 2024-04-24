import React, { useState } from "react";
import { Button } from "antd";
import Results from "./Results";
import "../Styles/RecentTests.css";

const RecentTests = () => {
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

  const [selectedResultId, setSelectedResultId] = useState(false);
  const handleResults = (id) => {
    console.log(id);
    if (selectedResultId === id) {
      setSelectedResultId(false);
    } else {
      setSelectedResultId(id);
    }
  };

  return (
    <div>
      <br />
      <div className="test-tab">
        {results.map((result) => (
          <div key={result.id} className="test-bar">
            <h3>{result.testName}</h3>
            <Button
              id={result.id}
              type="primary"
              onClick={() => handleResults(result.id)}
            >
              Results
            </Button>
          </div>
        ))}
      </div>
       {selectedResultId && <Results resultId={selectedResultId} />}
    </div>
  );
};

export default RecentTests;