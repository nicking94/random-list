const Element = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex w-full cursor-pointer flex-col rounded bg-gray-100 px-4 py-2 shadow-md shadow-gray-600"
    >
      <p className="border-b-[.1rem] border-gray-300 text-end text-[.7rem] italic text-red-500 md:text-[1rem]">
        Si tocas, se eliminará de la lista
      </p>
      <p className="truncate text-[1rem] font-semibold text-gray-800 md:text-[1.5rem]">
        {text}
      </p>
    </div>
  );
};

export default Element;
