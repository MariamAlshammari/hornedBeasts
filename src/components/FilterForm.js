import React from 'react';
import Form from 'react-bootstrap/Form';
import Horned from './Horned.json';




class FilterForm extends  React.Component{

    dataFilter = (event) =>{
           let numOfHorns = parseInt(event.target.value);
           let data = Horned;
            if(numOfHorns){
                data =Horned.filter((item) =>numOfHorns===item.horns);
                
            }
            this.props.filterdBeast(data);

        }
        

    

    render(){

        
        return(
            <>
       
                <Form >
                    

                    <Form.Group aria-label="Default select example">
                        <Form.Label>View the beasts by the number of horns :</Form.Label>
                        <Form.Control as='select' name='hornsNum' onChange={this.dataFilter}>
                        <option>All</option>
                        <option value="1">one</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="100">Wow</option>
                        </Form.Control>
                    </Form.Group>
                   
                </Form>

             

            </>

        )
    }
}


export default FilterForm