import React from 'react'

const Pagination = ({ goToNextPage, goToPrevPage, loading }) => {
  return (
    <>
      <button onClick={goToPrevPage} disabled={!goToPrevPage || loading}>
        Previous
      </button>
      <button onClick={goToNextPage} disabled={!goToNextPage || loading}>
        Next
      </button>
    </>
  );
};

export default Pagination;