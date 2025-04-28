import React from 'react';
import './Adocao.css';

import AcidoSabidoImage from "../../assets/Images/AcidoSabido.jpg"
import PanquecaImage from "../../assets/Images/Panqueca.jpg"
import YzmaImage from "../../assets/Images/Yzma.jpg"
const PetCards = () => {
  const pets = [
    {
      name: "Acido Sabido",
      gender: "Macho",
      status: "Cestrado",
      age: "4 anos",
      breed: "Viro lato",
      image: AcidoSabidoImage
    },
    {
      name: "Yzma",
      gender: "Fêmea",
      status: "Cestrada",
      age: "3 anos",
      breed: "Viro lato",
      image: YzmaImage
    },
    {
      name: "Panqueca",
      gender: "Macho",
      status: "Cestrado",
      age: "5 anos",
      breed: "Viro lato",
      image: PanquecaImage
    },
    
  ];

  return (
    <div className="pet-page-container">
      <div className="top-spacer"></div>
      
      <div className="pet-cards-container">
        {pets.map((pet, index) => (
          <div key={index} className="pet-card">
            <div className="pet-image-container">
              <img src={pet.image} alt={pet.name} />
            </div>
            <div className="pet-info">
              <h2>{pet.name} - {pet.gender}</h2>
              <p className="status"><strong>{pet.status}</strong></p>
              <p>{pet.age}</p>
              <p>{pet.breed}</p>
            </div>
            <button className="adopt-button">ADOTAR</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCards;