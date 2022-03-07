import React from "react";

const PreviewSession = () => {
  const handleChange = () => {};
  return (
    <>
      <h2>
        END <small>63fa020321</small> APPOINTMENT?
      </h2>
      <div>
        <div>
          <p>About You</p>
          <p>
            With <small>Jane Doe</small>
          </p>
        </div>
        <div>
          <label htmlFor="topic">Topic</label>
          <input type="text" name="topic" id="topic" />
        </div>
        <div>
          <label htmlFor="description">Notes</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <div>
            <button>CONTINUE</button>
          </div>
          <div>
            <button>END</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewSession;
