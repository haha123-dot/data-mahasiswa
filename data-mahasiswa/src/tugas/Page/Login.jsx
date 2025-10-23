import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

function Login() {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (nama !== "") {
      navigate(`/dashboard/${nama}`);
    } else {
      alert("Nama tidak boleh kosong!");
    }
  };

  return (
    <div className="container-login">
      <h2 className="title">Form Login</h2>
      <label className="label">Nama Mahasiswa:</label>
      <input
        className="input"
        type="text"
        placeholder="Masukkan nama..."
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <button className="btn" onClick={handleLogin}>
        Masuk
      </button>
    </div>
  );
}

export default Login;
