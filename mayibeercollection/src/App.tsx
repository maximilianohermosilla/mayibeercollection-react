import { HomepagePage, CervezasPage, AdministracionPage, ReportesPage,
         AdministracionEstilosPage, AdministracionMarcasPage,
         AdministracionPaisesPage, AdministracionCiudadesPage, AdministracionCervezasPage, AdministracionConfiguracionPage } from "./pages";
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from "./components/protectedRoute";
import { User } from "./interfaces/user";
import Login from "./components/pages/login";


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
        <Route index element={<HomepagePage></HomepagePage>}></Route>
        <Route path="/" element={<h1 className="text-light">Inicio</h1>}></Route>
        <Route path="/inicio" element={<HomepagePage></HomepagePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cervezas" element={<CervezasPage></CervezasPage>}></Route>
        <Route element={<ProtectedRoute isAllowed={!!usuario}/>}>
          {/* <Route path="/administracion" element={<AdministracionPage></AdministracionPage>}></Route>      */}
          <Route path="/administracion/paises" element={<AdministracionPaisesPage></AdministracionPaisesPage>}></Route>
          <Route path="/administracion/ciudades" element={<AdministracionCiudadesPage></AdministracionCiudadesPage>}></Route>
          <Route path="/administracion/marcas" element={<AdministracionMarcasPage></AdministracionMarcasPage>}></Route>
          <Route path="/administracion/estilos" element={<AdministracionEstilosPage></AdministracionEstilosPage>}></Route>
          <Route path="/administracion/cervezas" element={<AdministracionCervezasPage></AdministracionCervezasPage>}></Route>
          <Route path="/administracion/configuracion" element={<AdministracionConfiguracionPage></AdministracionConfiguracionPage>}></Route>
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!usuario && usuario.perfil == "Administrador"}/>}>
          <Route path="/administracion" element={<AdministracionPage></AdministracionPage>}></Route>     
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
