import Element from "./Element";

const List = ({ items, removeItem }) => {
  return (
    <div className="flex w-full flex-col space-y-8 p-10 md:p-20">
      {items.map((item, index) => (
        <Element key={index} text={item} onClick={() => removeItem(index)} />
      ))}
    </div>
  );
};

export default List;
