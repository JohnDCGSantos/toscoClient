
import HomeImg from '../assets/headerImg.jpg';
import HomeImg1 from '../assets/introImg1.jpg';
import HomeImg2 from '../assets/introImg2.jpg';
import HomeImg3 from '../assets/IntroImg3.jpg';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Home.css';
import { useNavigate } from 'react-router';

const CarouselHome = () => { 
           const nav= useNavigate()

    const goToMenu=()=>{
        nav('/menu')
    }
  return (
    <>
    
    <div className='CarouselBox'>
        <h1>Os nossos pratos</h1>
        
      
        <button className='verMenu' onClick={goToMenu} >  Ver Menu </button>

      
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
            <img src={HomeImg} className="d-block w-100" alt="First slide" />
          </div>
      <div className="carousel-item">

        <img src={HomeImg1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={HomeImg2}className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={HomeImg3}className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </>
  );
};

export default CarouselHome;



