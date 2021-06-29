import React from 'react'
import HornedBeast from './HornedBeast'
import Horned from './Horned.json';
// import './Main.css';

class Main extends React.Component {
    render() {
  
        return (
            <>
                {Horned.map((item,idx)=>{

                    return (
                    <HornedBeast title={item.title} description={item.description} image_url={item.image_url} key={idx} idx={idx}></HornedBeast>
                    )


                })}
               
            </>
        )
        
    }
}

export default Main