import React from "react";

const Delete = ({ email, onDelete }) => {
  const handleClick = () => {
    onDelete(email);
  };

  return (
    <button className="btn btn-danger" type="button" onClick={handleClick}>
      Delete
    </button>
  );
};

export default Delete;
