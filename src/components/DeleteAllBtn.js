import React from "react";

const DeleteAllBtn = ({ setCities, cities }) => {
  return (
    <div className="btn-container">
      {cities.length > 1 && (
        <button
          className="btn btn-delete-all btn-delete"
          onClick={() => {
            setCities([]);
          }}
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default DeleteAllBtn;
