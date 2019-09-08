import React from "react";

const Input = props => {
  return (
    <div
      className="input-group ml-auto mr-auto 
                     mb-lg-5 mt-lg-5 w-50 "
    >
      <input
        type="text"
        className="form-control p-lg-4"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        onChange={props.clicked}
      />
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={props.clicked}
        >
          <i class="fa fa-search p-2" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Input;
