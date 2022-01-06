import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../components/Home"
import { Navbar } from "../components/Navbar"
import { Login } from "../ui/Login"
import { Logout } from "../ui/Logout"

export const RutaPrincipal = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
