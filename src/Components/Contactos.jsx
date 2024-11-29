import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';  // Importando os ícones
import Pin from '../assets/pin.svg'

// Coordenadas para R. de 5 de Outubro 111, 4100-175 Porto
const position = [41.159620, -8.630778]; // Coordenadas corrigidas

const ContactMap = () => {
  // Criando o link do Google Maps
  const googleMapsLink = `https://www.google.com/maps/place/Tosco.porto/@41.1596801,-8.6306788,101m/data=!3m1!1e3!4m6!3m5!1s0xd246f0dc758b62d:0x885912d949b015a9!8m2!3d41.1596112!4d-8.6307129!16s%2Fg%2F11v19gz4h8?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D`;

  // Links para os redirecionamentos
  const whatsappLink = "https://wa.me/351912345678";  // Exemplo de número do WhatsApp
  const instagramLink = "https://www.instagram.com/tosco.porto/";  // Link do Instagram

  return (  
    <>
    <div className='contactsBox'>
      


      <div className='mapContainer'> 
       <div ><h1>Do que estás à espera?</h1></div>
        
      <div className="contactItem5">
            
            <FaClock size={20} color="#FFA500" /> {/* Ícone de Relógio */}
            <p>12:00 - 15:30 || 19:00 - 23:00 </p>
            <FaMapMarkerAlt size={30} color="rgb(208, 100, 33 )" /> {/* Ícone de Localização */}
            <p>Rua de 5 de Outubro 111, 4100-175 Porto</p>
          </div>
        {/* Exibindo o ícone de localização e a morada */}
       
         
        <div className="mapCont">
          {/* Mapa do Leaflet */}
          <MapContainer center={position} zoom={17} style={{ width: '100%', height: '100%' }}>
            {/* Usando o TileLayer para o fundo do mapa (tiles do OpenStreetMap) */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Adicionando o marcador para a localização */}
            <Marker position={position} 
            icon={new L.Icon({
              iconUrl: Pin, // Ícone do marcador
              iconSize: [45, 45], // Tamanho do ícone
              iconAnchor: [12, 41], // Onde o ícone vai estar ancorado
              popupAnchor: [1, -34], // Onde o pop-up vai aparecer
              shadowSize: [41, 41], // Tamanho da sombra do ícone
            })}>
              {/* Pop-up do marcador */}
              <Popup>
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                  Clique aqui para abrir no Google Maps
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Ícones de WhatsApp e Instagram */}
       
      </div>
      
    </div> 
   <div className="contactInfo">
   <h1>Contactos</h1>
<div className='boxcontactos'>
    
          {/* Exibindo o ícone de telefone */}
          <div className="contactItem">
            <FaPhoneAlt size={30} color="#4CAF50" /> {/* Ícone de Telefone */}
            <p>91919199191</p>
          </div>

          {/* Exibindo o ícone de horário */}
         

            <div className='contactItem'>
                
                
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} color="#25D366" /> {/* Ícone do WhatsApp */}
          </a>
          <p>WhatsApp</p>
          </div>

          <div className='contactItem'>

          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#E4405F" /> {/* Ícone do Instagram */}
          </a>
          <p>@tosco.porto</p></div>
          </div>
        </div></>
  );
};

export default ContactMap;
