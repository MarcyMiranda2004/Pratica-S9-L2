import { createRoot } from 'react-dom/client';
import React from 'react';
import MyHeader from "./components/MyHeader"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"

createRoot(document.getElementById('root')).render(
  <>
    <MyHeader />
    
    <Welcome />
    
    <AllTheBooks />

    <MyFooter />

  </>
  
);
