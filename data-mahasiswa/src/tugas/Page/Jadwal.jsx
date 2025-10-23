import "../style/Login.css";

function Jadwal() {
  const jadwalKuliah = [
    { nama: "Pengembangan Karakter: Kewarganegaraan", hari: "Senin", jam: "10.20 - 12.00" },
    { nama: "Analisis dan Visualisasi Data", hari: "Selasa", jam: "09.00 - 12.00" },
    { nama: "Interaksi Manusia dan Komputer", hari: "Rabu", jam: "10.20 - 12.00" },
    { nama: "Pemrograman Berbasis Objek", hari: "Kamis", jam: "09.00 - 14.40" },
    { nama: "Pengembangan Aplikasi Web", hari: "Jumat", jam: "09.00 - 15.00" },
  ];

  return (
    <div className="jadwal-container">
      <h3>Jadwal Kuliah</h3>
      <ul>
        {jadwalKuliah.map((mk, index) => (
          <li key={index} className="jadwal-item">
            <strong>{mk.nama}</strong> <br />
            Hari: {mk.hari} <br />
            Jam: {mk.jam}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jadwal;
