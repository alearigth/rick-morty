import React from "react";

const Pagination = ({ prev, next, onPrev, onNext }) => {
  const handlePrev = () => {
    onPrev();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="btn btn-dark " onClick={handlePrev}>
              Prev
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="btn btn-dark" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
