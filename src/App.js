import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>
     
      <Header/>

      <Main/>
   
   <Footer />
    </>
    
  )
}


}

export default App