// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Historial from "./pages/Historial";
import RespuestasOrden from "./pages/RespuestasOrden";
import RegistroMantenimiento from "./pages/RegistroMantenimiento";
import GestionMaquinas from "./pages/GestionMaquinas";
import AppAdmin from "./pages/AppAdmin";
import NotificacionesAdmin from "./pages/NotificacionesAdmin";
import GestionUsuarios from "./pages/GestionUsuarios";
import { MaquinasProvider } from "./context/MaquinasContext";
import { ElementosProvider } from "./context/ElementosContext";
import { ComponentesProvider } from "./context/ComponentesContext";
import { NotificacionesProvider } from "./context/NotificacionesContext";
import { CasinosProvider } from "./context/CasinosContext";
import ProtectedAdmin from "./ProtectedAdmin"; // Importa el ProtectedAdmin

function App() {
  return (
    <AuthProvider>
      <CasinosProvider>
        <MaquinasProvider>
          <ElementosProvider>
            <ComponentesProvider>
              <NotificacionesProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route element={<ProtectedRoute />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route path="/registro-mantenimiento" element={<RegistroMantenimiento />} />
                      <Route path="/respuestas-orden" element={<RespuestasOrden />} />
                      <Route element={<ProtectedAdmin />}>
                        <Route path="/admin" element={<AppAdmin />} />
                        <Route path="/usuarios" element={<GestionUsuarios />} />
                        <Route path="/notifi" element={<NotificacionesAdmin />} />
                      </Route>
                      <Route path="/Historial" element={<Historial />} />
                      <Route path="/gestionmaquinas" element={<GestionMaquinas />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </NotificacionesProvider>
            </ComponentesProvider>
          </ElementosProvider>
        </MaquinasProvider>
      </CasinosProvider>
    </AuthProvider>
  );
}

export default App;
