import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {

  const[slider, setSlider] = useState(data)
  const[index,setIndex] = useState(0)
  
  // function checkArrLimit(number){
  //   if(number>slider.length-1){
  //     return(0)
  //   }
  //   else if(number<0){
  //     return(slider.length-1)
  //   }
  //   else{
  //     return number
  //   }
  // }
  useEffect(()=>{
 let lastSlide=slider.length-1
 if(index<0){
  setIndex(lastSlide)
 }
 else if(index>slider.length-1){
  setIndex(0)
 }
  },[slider,index])

useEffect(()=>{
 const slide=setInterval(() => {
  setIndex(index+1)
}, 3000);
return ()=>{
  clearInterval(slide)
}
},[index])

  function Add(){
    setIndex(prev=>prev+1)
  }
  
  function Reduce(){
    setIndex(prev=>prev-1)
  }
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {slider.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          
          let position = "nextSlide"
          if(personIndex===index){
             position="activeSlide"
          }
          else if(personIndex===index-1 || (index===0 && personIndex===slider.length-1) ){
              position="lastSlide"
          }


          return (
            <article className={position}  key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>

              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="next" onClick={Add}><FiChevronRight/></button>
        <button className='prev' onClick={Reduce}><FiChevronLeft/></button>
        
        </div>
        </section>
  )}
export default App;
