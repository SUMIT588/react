import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const refValue = useRef(null);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [length, setLength] = useState(8);

  const [password, setPassword] = useState("");

  const passwordSet = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let char = "!@#$%^&*_-=+{}[]";

    if (numberAllowed) {
      str += number;
    }

    if (characterAllowed) {
      str += char;
    }

    for (let index = 1; index <= length; index++) {
      let num = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(num);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyClipboard = useCallback(() => {
    refValue.current?.select();
    // more optimized way
    refValue.current?.setSelectionRange(0, 19);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordSet();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md bg-gray-700 text-orange-500 px-4 rounded-lg py-4">
      <h2 className="text-white text-center mt-4 text-4xl">
        Password Generator
      </h2>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          value={password}
          className="rounded outline-none w-full px-2 "
          type="text"
          readOnly
          ref={refValue}
        />
        <button
          className="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0"
          onClick={copyClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
