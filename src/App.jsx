import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import MenuPage from "./components/MenuPage";
import MenuDetailPage from "./components/MenuDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/menu-detail" element={<MenuDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
