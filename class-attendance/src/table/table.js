import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import "./table.scss";

const studentsDatas = require("../data/students.json");

const Table = () => {
  return (
    <div className="container">
      <table className="table-container">
        <thead className="table-container-head">
          <tr className="table-container-head-row">
            <th>No.</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="table-container-body">
          {studentsDatas.map(({ students }, index) => (
            <tr key={index} className="table-container-body-content">
              {students.map(({ name, absence_number, absence_status }, index) => (
                <div key={index}>
                  <td>{absence_number}</td>
                  <td>{name}</td>
                  <td>
                    <select name="status">
                      {absence_status.map((status, index) => (
                        <option value={status} key={index}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button>
                      <FiEdit className="table-container-icon" />
                      <span>Edit</span>
                    </button>
                    <button>
                      <MdDeleteOutline className="table-container-icon" />
                      <span>Delete</span>
                    </button>
                  </td>
                </div>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
