import React from 'react'
import HornedBeast from './HornedBeast'
// import Horned from './Horned.json';



class Main extends React.Component {
    render() {
  
        return (
            <>
                {
                // Horned.map((item,idx)=>{

    this.props.hornedData.map((item,idx)=>{
                    return (
                    <HornedBeast title={item.title} description={item.description} image_url={item.image_url}
                    showCard={this.props.showCard} 
                    // hideCard={this.props.hideCard} 
                    key={idx} idx={idx}></HornedBeast>
                    )


                })}
               
            </>
        )
        
    }
}

export default Main