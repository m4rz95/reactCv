import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Oopss...</h3>
        <p>Halaman ynag anda tuju tidak ditemukan..</p>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
