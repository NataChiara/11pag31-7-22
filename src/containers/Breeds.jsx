import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Breeds.css';


const Breeds = () => {
  return (
    <React.Fragment>
        <Header/>
            <div className='breeds'>
                <br/>
                <h1> Elephant Breeds </h1>
                <br/><br/>
                <p>Two genetically different African species exist: the savanna elephant and the forest elephant, with a number of characteristics that differentiate them both.</p>
                <p>The African savanna elephant is the largest elephant species, while the Asian forest elephant and the African forest elephant are of a comparable, smaller size. Asian elephants differ in several ways from their African relatives, with more than 10 distinct physical differences between them. For example, Asian elephants' ears are smaller compared to the large fan-shaped ears of the African species. Only some male Asian elephants have tusks, while both male and female African elephants grow tusks.</p>  
          </div>
        <Footer/>
    </React.Fragment>
  )
};

export default Breeds;