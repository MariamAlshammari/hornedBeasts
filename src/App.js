import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// import './App.css';
import Horned from './components/Horned.json';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    data: Horned ,
      selected: false,
  
      showingData: {}
    }
  }

  showCard = (values) => {

    this.setState({
    selected:true,
    showingData:values,
  });
  }

  hideCard = () => {this.setState({
    selected: false});
}


  render() {
    return (
      <>
     
      <Header/>

      <Main showCard={this.showCard} hornedData={this.state.data}/>
      <SelectedBeast selected={this.state.selected} showingData={this.state.showingData} hideCard={this.hideCard} />
   
   <Footer />
    </>
    
  )
}


}

export default App