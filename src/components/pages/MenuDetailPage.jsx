/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import axios from "axios";

const MenuDetailPage = () => {
  const [menu, setMenu] = useState({});
  const { id } = useParams();

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => setMenu(res.data.data))
      .catch((error) => setMenu(error.response.data.message));
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-36  ">
        <div className="max-w-sm rounded-xl overlow-hidden shadow-lg ">
          <img src={menu.imageUrl} alt="" className="w-full h-52 object-cover mb-4 rounded-md" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{menu.name}</div>
            <p className="text-gray-700 text-base">{menu.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Type: {menu.type}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Price: {menu.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDetailPage;
