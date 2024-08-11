import { useState } from "react";

const Input = ({ addItem }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (e) => {
    if (text.trim() && (e.type === "click" || e.key === "Enter")) {
      addItem(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex justify-center space-x-3">
      <input
        onChange={handleChange}
        onKeyDown={handleAdd}
        type="text"
        value={text}
        placeholder="Escribe algo..."
        className="h-[2.5rem] w-1/2 rounded px-4 shadow-sm shadow-gray-600 outline-none md:w-[25rem]"
      />
      <button
        onClick={handleAdd}
        className="rounded bg-green-800 px-4 py-1 font-semibold text-white shadow-sm shadow-green-500 outline-none transition-all duration-300 hover:bg-green-600"
      >
        Añadir
      </button>
    </div>
  );
};

export default Input;
