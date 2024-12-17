import React from 'react';
import CardList from "../src/CardList/CardList";
import image1 from './assets/webDev.jpg';
import image2 from './assets/cyberSecurity.jpg';
import image3 from '../src/assets/networking.jpg';
import image4 from './assets/AI.jpg';
const cardsData =[
  {
    image :image1,
    title :"Web Development",
    description :"Web Development involves creating websites and web apps. It covers front-end design and back-end logic to deliver user-friendly online experiences."
  },
  {
    image :image2,
    title :"Cyber Security",
    description :"Cybersecurity protects systems, networks, and data from digital attacks. It ensures sensitive information remains safe from unauthorized access and threats."
  },
  { image :image3,
    title :"Computer Networking",
    description :"Networking connects devices to share information and resources. It enables communication across the internet through wired and wireless systems."
  },
  { 
    image :image4,
    title :"Artificial Intelligence",
    description :"AI enables machines to mimic human intelligence, learning and making decisions. It powers tools like voice assistants, image recognition."
  }
];

function App() {
return (
    <>
     { <CardList data={cardsData} />}
    </>
  )
}

export default App
