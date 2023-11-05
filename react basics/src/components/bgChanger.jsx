import React, { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("violet");
  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center bg-white px-4 py-2 rounded-xl gap-3">
          <button
            className="outline-none px-4 py-2 text-white rounded-full "
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 text-white rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 text-white rounded-full"
            style={{ backgroundColor: "#d97706" }}
            onClick={() => {
              setColor("#d97706");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-2 text-white rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}
