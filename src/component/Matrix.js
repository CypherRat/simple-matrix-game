import React, { useState, useEffect } from "react";

const Matrix = (e) => {
  const [matrix, setMatrix] = useState([]);
  const [selectedMatrix, setSelectedMatrix] = useState([]);
  const [count, setCount] = useState(1);

  const pushSelectedMatrix = (_index) => {
    if (selectedMatrix.length > 1) selectedMatrix.splice(0, 1);
    setSelectedMatrix([...selectedMatrix, _index]);
  };

  const selectMatrix = (e) => {
    const matrixIndex = e.target.getAttribute("data-id");
    if (selectedMatrix.includes(parseInt(matrixIndex))) return;
    e.target.innerText = `#${count}`;
    setCount(count + 1);
    pushSelectedMatrix(parseInt(matrixIndex));
  };

  useEffect(() => {
    const newMatrix = Array.from({ length: 16 }, (_, i) => i + 1);
    setMatrix(newMatrix);
  }, []);

  return (
    <div className="matrix-container">
      {matrix.map((isSelected, index) => (
        <div
          className={
            "matrix-item " + (selectedMatrix.includes(isSelected) ? "red" : "")
          }
          data-id={index + 1}
          key={index}
          onClick={selectMatrix}
        ></div>
      ))}
    </div>
  );
};
export default Matrix;
