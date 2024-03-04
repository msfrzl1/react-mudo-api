import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MenuPage from "./components/pages/MenuPage";
import MenuDetailPage from "./components/pages/MenuDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu-detail" element={<MenuDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
