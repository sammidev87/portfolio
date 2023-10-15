import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import CertificatesMain from "../CertificatesMain";
import Footer from "../Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <AboutMe />
            <CertificatesMain />
            <Footer />
        </div>
    );
}

export default Home;