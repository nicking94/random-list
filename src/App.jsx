import { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  // Función para cargar los datos desde localStorage
  const loadItemsFromLocalStorage = () => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  };

  const [items, setItems] = useState(loadItemsFromLocalStorage);

  // Guardar los datos en localStorage cada vez que items cambia
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (index) => {
    const confirmRemove = window.confirm(
      `¿Eliminar elemento ${items[index].toUpperCase()}? `,
    );
    if (confirmRemove) {
      setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-[100vh] bg-slate-800">
      <h1 className="py-10 text-center text-[2rem] font-bold italic text-gray-200">
        Arma tu lista
      </h1>
      <Input addItem={addItem} />
      <List items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
