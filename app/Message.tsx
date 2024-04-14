"use client";
import React, { useState } from "react";

const Message: React.FC = () => {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() !== "") {
      setPopupMessage(`${message}: Message delivered`);
      setShowPopup(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-emerald-400 h-screen ">
      <div className="flex flex-col justify-center items-center border-2 border-black p-5 rounded-md bg-blue-400 gap-4">
        <div className="text-2xl font-semibold uppercase">Write a message</div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-purple-700 p-2 rounded-md px-9 text-white"
        >
          Submit
        </button>
        {showPopup && (
          <div>
            {popupMessage ? (
              <div className="bg-green-400 p-2">{popupMessage}</div>
            ) : (
              <div className="bg-red-400 p-2">Please enter a message</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
