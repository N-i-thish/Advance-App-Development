import NavBar from '../Components/NavBar'
import '../assets/css/Homepage.css';
// import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


const Homepage = () => {
  return (
    
    <div>
    <div >
    <NavBar />
    </div>
    <div className='Home'>
    <div className='contentHome'>
    <h1 style={{ paddingTop: "140px", color: "black", marginBottom: "30px" }}>Fastest way to Reading Book</h1>
    <div className="typeHome" style={{ color: "black", marginBottom: "320px" }}>
    <h3>Unlock British English mastery, a certificate to declare,
    Refine your skills with precision rare,
    Certified excellence beyond compare!
    </h3>
    </div>
    </div>
    </div>
    <Footer />
    </div>
    
    
    );
}

export default Homepage;