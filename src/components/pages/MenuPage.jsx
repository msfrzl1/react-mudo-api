import { useEffect, useState } from "react";
import Navbar from "../Fragments/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const [menus, setMenus] = useState([]);

  const getMenusData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenus(res.data.data.Data))
      .catch((error) => setMenus(error.response.data));
  };
  useEffect(() => {
    getMenusData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center font-black text-5xl my-6">
        <h1>Menu</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {menus.map((item) => (
          <div key={item.id} className="bg-gray-100 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <img src={item.imageUrl} alt={item.name} className="w-full h-52 object-cover mb-4 rounded-md" />
              <div className="px-3 py-3">
                <h1 className="text-xl font-semibold mb-2">{item.name}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <Link to={`/menu/${item.id}`}>
              <button className="m-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuPage;
