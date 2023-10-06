
import React from 'react';

import Nav from './Nav'
import PropsSample from './PropsSample'
import MyApi from './MyApi'
import Counter from './Counter'
function Home() {
    return (
        <>
        <Nav/>
       
      <MyApi/>
      <PropsSample/>
      <Counter/>
      <h1>home</h1>
     
      
      </>
    );
  }
  
  export default Home;
  