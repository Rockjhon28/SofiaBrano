import { useState } from "react";

import "./App.css";
import { FaTiktok, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';

function App() {
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network);
  };

  return (
    <div className="app">
      <header>
      
      </header>
      <h1>SOFIA BRANO</h1>
      <div className="network-buttons">
        <a href="https://www.tiktok.com/@sofiabrano?_t=8gXKsUDrLeP&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
          Tiktok
        </a>
        <a href="https://www.instagram.com/sofiabrano/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          Instagram
        </a>
       
        <a href="https://onlyfans.com/sofiabrano" target="_blank" rel="noopener noreferrer">
          <FaHeart />
          Only Fans
        </a>
      </div>
      {selectedNetwork && (
        <div className="network-content">
          {/* Aquí puedes mostrar contenido relacionado con la red social seleccionada */}
          <p>CLICK ON THE NETWORK YOU WANT TO SEE</p>
        </div>
      )}
    </div>
  );
}

export default App;
