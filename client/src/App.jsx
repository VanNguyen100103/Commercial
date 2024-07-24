import React from 'react'
import "./App.css";
import Loader from './components/Loader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AllRoutes from './routes/AllRoutes';
import Banner from './components/Banner';


function App() {
  return (
    <div className='App'>
      <Banner/>
      <Loader/>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
