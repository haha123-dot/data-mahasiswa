import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import Dashboard from "./Page/Dashboard";
import Jadwal from "./Page/Jadwal";
import Nilai from "./Page/NIlai";
import DetailNilai from "./Page/DetailNilai";
import Profile from "./Page/Profile";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/:nama" element={<Dashboard />}>
          <Route path="jadwal" element={<Jadwal />} />
          <Route path="nilai" element={<Nilai />} />
          <Route path="profil" element={<Profile />} />
        </Route>
        <Route path="/nilai/:matkul" element={<DetailNilai />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
