import { useParams, useNavigate } from "react-router-dom";
import "../style/Login.css";

function Profile() {
  const { nama } = useParams();
  const navigate = useNavigate();

  const dataProfil = {
    nim: "241130136",
    jurusan: "Teknologi Informasi",
    semester: "3",
  };

  return (
    <div className="profil-container">
      <h3>Profil Mahasiswa</h3>
      <p><strong>Nama:</strong> {nama}</p>
      <p><strong>NIM:</strong> {dataProfil.nim}</p>
      <p><strong>Jurusan:</strong> {dataProfil.jurusan}</p>
      <p><strong>Semester:</strong> {dataProfil.semester}</p>

      <button className="btn-logout" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
