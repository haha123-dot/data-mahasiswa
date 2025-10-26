import { useParams, useNavigate } from "react-router-dom";
import "../style/Login.css";

function DetailNilai() {
  const { matkul } = useParams();
  const navigate = useNavigate();

  const dataNilai = {
    "Pengembangan Karakter: Kewarganegaraan": { tugas: 92, uts: 95, uas: 95 },
    "Analisis dan Visualisasi Data": { tugas: 96, uts: 98, uas: 97 },
    "Interaksi Manusia dan Komputer": { tugas: 90, uts: 95, uas: 95 },
    "Pemrograman Berbasis Objek": { tugas: 96, uts: 98, uas: 97 },
    "Pengembangan Aplikasi Web": { tugas: 92, uts: 95, uas: 95 },
  };

  const nilai = dataNilai[(matkul)];
  const nilaiAkhir = ((nilai.tugas + nilai.uts + nilai.uas) / 3).toFixed(2);

  return (
    <div className="detail-container">
      <h3>Detail Nilai – {matkul}</h3>
      <p><strong>Tugas:</strong> {nilai.tugas}</p>
      <p><strong>UTS:</strong> {nilai.uts}</p>
      <p><strong>UAS:</strong> {nilai.uas}</p>
      <p><strong>Nilai Akhir:</strong> {nilaiAkhir}</p>

      <button className="btn-back" onClick={() => navigate(-1)}>
        Kembali
      </button>
    </div>
  );
}

export default DetailNilai;
