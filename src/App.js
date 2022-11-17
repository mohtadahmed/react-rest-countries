import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries () {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Exploring all the countries of the World!</h1>
      <h3>Available Countries: {countries.length}</h3>
      <div className='country-container'>
      {
        countries.map(country => <Country country={country}></Country>)
      }
      </div>
    </div>
  )
}

function Country (props) {
  console.log(props)
  const country = props.country;
  return (
    <div className='country'>
      <h1>Name: {country.name}</h1>
      <img src={country.flags.png} alt="" />
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
    </div>
  )
}

export default App;
