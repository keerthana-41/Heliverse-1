import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete"; // Import the Delete component

const Read = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch("http://localhost:8000/Api/User");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const localReturnData = await response.json();
        setFetchData(localReturnData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromApi();
  }, []);

  const handleDelete = (email) => {
    // Filter out the record with the matching email
    setFetchData(fetchData.filter((item) => item.email !== email));
  };

  return (
    <div className="card">
      <div className="card-deader">
        <Link to="/insert" className="btn btn-primary">
          Add
        </Link>
      </div>
      <div className="card-body">
        <table className="table container" style={{ borderCollapse: "collapse", border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>firstName</th>
              <th style={{ border: "1px solid black" }}>lastName</th>
              <th style={{ border: "1px solid black" }}>email</th>
              <th style={{ border: "1px solid black" }}>password</th>
              <th style={{ border: "1px solid black" }}>gender</th>
              <th style={{ border: "1px solid black" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fetchData.map((item) => (
              <tr key={item._id}>
                <td style={{ border: "1px solid black" }}>{item.firstName}</td>
                <td style={{ border: "1px solid black" }}>{item.lastName}</td>
                <td style={{ border: "1px solid black" }}>{item.email}</td>
                <td style={{ border: "1px solid black" }}>{item.password}</td>
                <td style={{ border: "1px solid black" }}>{item.gender}</td>
                <td>
                  <div className="col-md-6">
                    <button className="btn btn-warning" type="button">
                      Update
                    </button>
                    {/* Use Delete component */}
                    <Delete email={item.email} onDelete={handleDelete} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
