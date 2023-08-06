import { LandingPage, CervezasPage, AdministracionPage, ReportesPage,
         AdministracionEstilosPage, AdministracionMarcasPage,
         AdministracionPaisesPage, AdministracionCiudadesPage, AdministracionCervezasPage } from "./pages";
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from "./components/protectedRoute";
import { User } from "./interfaces/user";


function App() {
  const [user, setUser] = useState<User>();

  let usuario: User = {id: 1, nombre: "Maxi", perfil: "Usuario"}
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
        <Route element={<ProtectedRoute isAllowed={!!usuario}/>}>
          <Route path="/administracion" element={<AdministracionPage></AdministracionPage>}></Route>     
          <Route path="/administracion/paises" element={<AdministracionPaisesPage></AdministracionPaisesPage>}></Route>
          <Route path="/administracion/ciudades" element={<AdministracionCiudadesPage></AdministracionCiudadesPage>}></Route>
          <Route path="/administracion/marcas" element={<AdministracionMarcasPage></AdministracionMarcasPage>}></Route>
          <Route path="/administracion/estilos" element={<AdministracionEstilosPage></AdministracionEstilosPage>}></Route>
          <Route path="/administracion/cervezas" element={<AdministracionCervezasPage></AdministracionCervezasPage>}></Route>
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!usuario && usuario.perfil == "Administrador"}/>}>
          <Route path="/reportes" element={<ReportesPage></ReportesPage>}></Route>          
        </Route>
        {/* <Route path="/administracion" element={
            <ProtectedRoute user={user} redirectTo='/landing'>
              <Administracion></Administracion>
            </ProtectedRoute>
        }></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
