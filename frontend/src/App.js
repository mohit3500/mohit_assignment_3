import React, { useEffect, useState } from 'react';
import Cards from './Profile';
import './App.css';

export default function App(){ 

  const [cardsData, setcardsData] = useState([])

  const getData = () => {fetch('https://jsonplaceholder.typicode.com/users')
                    .then((res) => res.json())
                    .then((data) => {setcardsData(data)})
                    .catch((err)=> {
                      console.log(err)
                    })}
                    

  useEffect(() => {
    getData()
    console.log(cardsData)
  }, [])

  return (
  <div className='cards'>
    <div className='cards_wrapper'>
      <Cards cardsData={cardsData} setcardsData={setcardsData} />
    </div>
  </div>
  )};
