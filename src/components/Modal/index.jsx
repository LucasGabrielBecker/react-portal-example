import React, { useState } from "react";
import ReactDom from "react-dom";
import { toast } from "react-toastify";

export default function Modal({ setisOpen, children }) {
  const [volume, setVolume] = useState(0);
  const handleCloseModal = () => {
    setisOpen((prev) => !prev);
  };

  const notify = () => toast("Thank you for your time!");

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal-wrapper">
        {/* <button onClick={handleCloseModal}> X </button> */}
        <span>Settings</span>
        <div className="volume">
          <div className="volume-icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1024px-Speaker_Icon.svg.png"
              alt="Sound icon"
              width="20"
            />
          </div>
          <div className="sound">
            <div className="labels">
              <p>Sound</p>
              <p>{volume}%</p>
            </div>
            <input type="range" onChange={(e) => setVolume(e.target.value)} />
          </div>
        </div>
        <div className="chat">
          <div className="chat-icon">
            <img
              src="https://static.thenounproject.com/png/5736-200.png"
              alt="chat"
              width="20"
            />
          </div>
          <div className="chat-labels">
            <span>Chat</span>
            <p>Turn on chat during session</p>
          </div>
        </div>
        <div className="logo">
          <p>Logo</p>
          <div className="fakeInput">
            <span>logo-noname.gif</span>
            <div className="download-button">
              <img
                src="https://image.flaticon.com/icons/png/512/0/532.png"
                alt="downloadIcon"
                width="20"
              />
            </div>
          </div>
        </div>

        <div className="buttons-wrapper">
          <span>
            Advanced
            <img
              src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-512.png"
              alt="dropwodn"
              width="20"
              tintColor="#FFF"
            />
          </span>
          <div className="buttons">
            <div className="cancel btn" onClick={handleCloseModal}>
              Cancel
            </div>
            <div className="save btn" onClick={notify}>
              Save
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
