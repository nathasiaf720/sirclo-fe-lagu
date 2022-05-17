import React from "react";
import { X } from "react-feather";

const ReviseReasonSubmit = () => {
  return (
    <React.Fragment>
      <div
        style={{ top: -100 }}
        className="bg-white position-absolute rounded col-10 col-md-12 p-0 m-0"
      >
        <div
          style={{ height: 28, width: 28, top: -14, right: -14 }}
          className="bg-white rounded d-flex justify-content-center align-items-center position-absolute"
        >
          <X className="text-muted" size={18} />
        </div>
        <div className="w-100 d-flex justify-content-start py-1 px-2 bg-warning rounded">
          <span className="text-white">Revise</span>
        </div>
        <div className="d-flex justify-content-start px-2 py-1">Reason</div>
        <div className="px-2">
          <textarea
            className="w-100 rounded p-1"
            style={{borderColor: 'gray'}}
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <br />
        <div className="row p-1 d-flex justify-content-end">
          <div
            style={{ height: 32 }}
            className="bg-success px-2 rounded text-white d-flex justify-content-center align-items-center mr-2"
          >
            OK
          </div>
          <div
            style={{ height: 32 }}
            className="bg-white text-success px-2 rounded text-white d-flex justify-content-center align-items-center mr-2 border border-success"
          >
            Cancel
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReviseReasonSubmit;
