import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'



class SelectedBeast extends React.Component {
    render() {
        return (
          <>
      
<Modal show={this.props.selected} onHide={this.props.hideCard}>
        <Modal.Header closeButton>
        <Modal.Title>{this.props.showingData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Card className="cc" border="dark" style={{ width: '18rem'  , padding: '10px' , margin: '10px' ,}}>
                <Card.Img  src={this.props.showingData.image_url} alt={this.props.title} />
                <Card.Body>
                    <Card.Title>{this.props.showingData.title}</Card.Title>
                    <Card.Text>
                        {this.props.showingData.description}
                    </Card.Text>
               
                </Card.Body>
            </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideCard}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.hideCard}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal></>
        )}}

      export default SelectedBeast