import React, { Fragment, useState, useEffect } from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Download from './components/Download';
import Footer from './components/Footer';


function App() {

  // state para el envio del formulario de comentarios

  const [ stateData, setStateData ] = useState({
    name: '',
    email: '',
    message: ''
  }); 

  // state que se llena o actualiza obtener el listado las sucursales
  const [ stateLocations, setLocations ] = useState([]);
  // state que se llena al buscar las sucursales en el campo de búsqueda
  const [ stateTerm, setTerm ] = useState('');
  // state que se llena al dar click en alguna de las opciones "Llevar" o "Domicilio"
  const [ stateFilterLocation, setFilterLocation ] = useState('takeaway');

  const [ stateCoord, stateSetCoord ] = useState({
    lat: 13.710566,
    lng: -89.231635    
  });

  // actualizo el state para el input de búsqueda de dirección por nombre
  const handleChange = e => {
    //actualizar state
    setTerm(e.target.value);
  }

  // Llamado a la API al endpoint de locations

  const responseAPI = async() =>{

    if(stateTerm !== ''){
      const urlAPI = `https://api.elaniin.dev/api/locations?type=${stateFilterLocation}&query=${stateTerm}`;
      const response = await fetch(urlAPI);
      const result = await response.json();

      // console.log(result);
      setLocations(result.data);
    }else{
      const urlAPI = `https://api.elaniin.dev/api/locations?type=${stateFilterLocation}`;
      const response = await fetch(urlAPI);
      const result = await response.json();

      // console.log(result);
      setLocations(result.data);
    }

  }

  useEffect(() => {
    responseAPI();
  }, [stateFilterLocation, stateTerm]);

  // Obtener tipo de sucurlar

  const typeLocation = (type) => {
    const newTypeLocation = type;
    setTerm('');
    setFilterLocation(newTypeLocation);
  }

  // Dibujar marker en el map

  const markerDraw = (lat, lon) =>{
    const latitude = Number(lat);
    const longitude = Number(lon);

    stateSetCoord({
      lat: latitude,
      lng: longitude
    });
  }

  return (
    <Fragment>
      <Menu 
        position = 'sticky-top'
        categoryNav = ''
        color = 'text-color-black'
        zIndex = ''
      />
      <Hero 
        imageHamburger = 'hero_hamburger.png'
        imageYellow = 'hero_yellow.svg'
        backgroundColor = 'bg-transparent'
        bgYellow = 'bg-yellow-hero'
        titleOne = 'Un nuevo'
        titleTwo = 'sabor está en'
        titleThree = 'la ciudad'
        subtitleOne = 'Estamos a punto de descubrir un mundo lleno de sabores'
        subtitleTwo = 'y de emociones inigualables.'
      />
      <About />
      <Locations
        stateLocations={stateLocations}
        typeLocation={typeLocation}
        handleChange={handleChange}
        stateTerm={stateTerm}
        markerDraw={markerDraw}
        stateCoord={stateCoord}
      />
      <Comments/>
      <Contact 
        stateData={stateData}
        setStateData={setStateData}
      />
      <Download/>
      <Footer/>
    </Fragment>
  );
}

export default App;
