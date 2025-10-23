import { Link, Outlet, useParams } from "react-router-dom";
import "../style/Login.css";

function Dashboard() {
  const { nama } = useParams();

  return (
    <div className="dashboard-container">
      <h2 className="welcome">Selamat datang, {nama} 👋</h2>

      <nav className="navbar">
        <Link to="jadwal" className="nav-link">Jadwal Kuliah</Link>
        <Link to="nilai" className="nav-link">Nilai</Link>
        <Link to="profil" className="nav-link">Profil</Link>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
