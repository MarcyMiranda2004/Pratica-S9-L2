import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false, 
        };
    }

    handleClick = () => {
        this.setState({ selected: true }); 
    };

    render() {
        const { book } = this.props;
        
        return (
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={book.img}
                    style={{ cursor: 'pointer' }}  
                    onClick={this.handleClick}  
                />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.price} €
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
