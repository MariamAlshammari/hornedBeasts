import React from 'react';
// import './HornedBeast.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'



class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0
        }
    }

    increaseNoOfVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1
        })
    }

    updateCardState = () => {
        let info={ title:this.props.title,
        description:this.props.description,
        image_url :this.props.image_url,
        horns :this.props.horns
        
        }

        this.props.showCard(info);
    }

    // hideCardState = () =>{
        
    //     this.props.hideCard();
    // }

    render() {
        return (
<>
            {/* <><h2>{this.props.title}</h2>
                <img onClick={this.increaseNoOfVotes} src={this.props.image_url} alt ={this.props.title}/>
                <p>{this.props.description}</p>
                <p>❤️ {this.state.numberOfVotes}</p>  </>  */}

{/* <Card className="cc" border="dark" style={{ width: '18rem' , float: 'left' , padding: '10px' , margin: '10px' ,}}></Card> */}
                 <Card  className="cc" border="dark" style={{ width: '18rem'  , padding: '10px' , margin: '10px' ,}}>
               
                <Card.Img onClick={this.updateCardState}  variant="top" src={this.props.image_url} alt={this.props.title} />
                <Card.Body >
                <div onClick={this.updateCardState} >
                    <Card.Title  >{this.props.title}</Card.Title>
                    <Card.Text  >
                        {this.props.description}
                    </Card.Text>
                    <Card.Text  >
                       Horns Number: {this.props.horns}
                    </Card.Text>
                    <Card.Text   >
                        <i className="fas fa-heart">favorited: 💚 {this.state.numberOfVotes}</i>
                    </Card.Text>
                    {/* <Card.Text>
                    💚 {this.state.numberOfVotes}
                    </Card.Text> */}
                </div>
                    <Button onClick={this.increaseNoOfVotes}  variant="primary">Vote</Button>
                </Card.Body>
            </Card>


            
            </>
        )
    }
}

export default HornedBeast