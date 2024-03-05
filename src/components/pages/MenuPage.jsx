/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Navbar from "../Fragments/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const [menus, setMenus] = useState([]);
  const [pagination, setPagination] = useState({
    perPage: 0,
    total: 0,
    currentPage: 1,
    previousPage: 0,
    nextPage: 0,
  });

  const handleBack = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.previousPage,
    });
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.nextPage,
    });
  };

  const getMenusData = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?page=${pagination.currentPage}`)
      .then((res) => {
        setMenus(res.data.data.Data);
        setPagination({
          perPage: res.data.data.perPage,
          total: res.data.data.total,
          currentPage: res.data.data.currentPage,
          previousPage: res.data.data.previousPage,
          nextPage: res.data.data.nextPage,
        });
      })
      .catch((error) => setMenus(error.response.data));
  };

  useEffect(() => {
    getMenusData();
  }, []);

  useEffect(() => {
    getMenusData();
  }, [pagination.currentPage]);

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
      <div className="flex justify-center">
        <button
          disabled={pagination.currentPage === 1}
          onClick={handleBack}
          className="m-4 bg-indigo-600 text-white py-2 px-10 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Back
        </button>
        <button
          disabled={!pagination.nextPage}
          onClick={handleNext}
          className="m-4 bg-indigo-600 text-white py-2 px-10 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MenuPage;
