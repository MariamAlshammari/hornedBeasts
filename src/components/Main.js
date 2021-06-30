import React from 'react'
import HornedBeast from './HornedBeast'
// import Horned from './Horned.json';
import FilterForm from './FilterForm.js'



class Main extends React.Component {
    render() {
  
        return (
            <>
            <FilterForm filterdBeast={this.props.filterdBeast}/>
            <div>
                {
                // Horned.map((item,idx)=>{

    this.props.hornedData.map((item,idx)=>{
                    return (
                    <HornedBeast title={item.title} description={item.description} image_url={item.image_url}
                    horns={item.horns}
                    showCard={this.props.showCard} 
                    // hideCard={this.props.hideCard} 
                    key={idx} idx={idx}></HornedBeast>
                    )


                })}
     </div>
            </>
        )
        
    }
}

export default Main