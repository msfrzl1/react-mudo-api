import { useState } from "react";
import Input from "../Elements/Input";
import Label from "../Elements/Label";
import Navbar from "../Fragments/Navbar";
import axios from "axios";

const AddMenu = () => {
  const [notif, setNotif] = useState("");
  const [addedMenus, setAddedMenus] = useState([]);
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    type: "",
    imageUrl: "",
    price: "",
  });

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddMenu = () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const payload = {
      name: menu.name,
      description: menu.description,
      imageUrl: menu.imageUrl,
      price: parseInt(menu.price),
      type: menu.type,
    };

    axios
      .post("https://api.mudoapi.tech/menu", payload, config)
      .then((res) => {
        setNotif("success");
        setNotif({ message: res.data.message, success: true });
        setAddedMenus([...addedMenus, payload]);
      })
      .catch((error) => setNotif({ message: error.response.data.message, success: false }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 sm:px-8 p-3">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-5 px-4 shadow sm:rounded-lg sm:px-10">
            <form action="">
              <div className="flex justify-center font-black text-5xl mb-6">
                <h1>Add Menu</h1>
              </div>
              <Label>Name</Label>
              <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
              <Label>Description</Label>
              <Input type="text" name="description" placeholder="Description" onChange={handleChange} />
              <Label>Type</Label>
              <select name="type" className="w-full border p-2 rounded" onChange={handleChange}>
                <option value="">Pilih :</option>
                <option value="main-dish">Makanan</option>
                <option value="beverage">Minuman</option>
              </select>
              <Label>Image Url</Label>
              <Input type="text" name="imageUrl" placeholder="Image Url" onChange={handleChange} />
              <Label>Price</Label>
              <Input type="number" name="price" placeholder="Price" onChange={handleChange} />
            </form>
            <div className="mt-4">
              <button
                onClick={handleAddMenu}
                type="submit"
                className="w-full py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ease-in-out bg-indigo-600 hover:bg-indigo-700"
              >
                Login
              </button>
              {notif.message && (
                <div className={notif.success ? "text-green-500 flex justify-center mt-2" : "text-red-500 flex justify-center mt-2"}>
                  <p>{notif.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMenu;
