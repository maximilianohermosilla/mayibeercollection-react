import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, CervezasPage, Administracion } from "./pages";
import { ProtectedRoute } from "./components/protectedRoute";
import { User } from "./interfaces/user";


function App() {
  const [user, setUser] = useState<User>();

  let usuario: User = {id: 1, nombre: "Maxi"}
  const login = () => {
    setUser(usuario)
  }

  const logout = () => setUser(undefined);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage></LandingPage>}></Route>
        <Route path="/" element={<h1 className="text-light">Home</h1>}></Route>
        <Route path="/landing" element={<LandingPage></LandingPage>}></Route>
        <Route path="/cervezas" element={<CervezasPage></CervezasPage>}></Route>
        <Route path="/administracion" element={
            <ProtectedRoute user={user} redirectTo='/landing'>
              <Administracion></Administracion>
            </ProtectedRoute>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
