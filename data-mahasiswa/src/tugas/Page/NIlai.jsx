import { Link, useParams } from "react-router-dom";
import "../style/Login.css";

function Nilai() {
  const { nama } = useParams();

  const daftarNilai = [
    { matkul: "Pengembangan Karakter: Kewarganegaraan", nilai: "A-" },
    { matkul: "Analisis dan Visualisasi Data", nilai: "A" },
    { matkul: "Interaksi Manusia dan Komputer", nilai: "A-" },
    { matkul: "Pemrograman Berbasis Objek", nilai: "A" },
    { matkul: "Pengembangan Aplikasi Web", nilai: "A-" },
  ];

  return (
    <div className="nilai-container">
      <h3 className="daftar-nilai">Daftar Nilai – {nama}</h3>
      <ul>
        {daftarNilai.map((item, index) => (
          <li key={index} className="nilai-item">
            <div>
              <strong>{item.matkul}</strong> <br />
              Nilai: {item.nilai}
            </div>
            <Link to={`/nilai/${(item.matkul)}`} className="detail-link">
              Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nilai;
