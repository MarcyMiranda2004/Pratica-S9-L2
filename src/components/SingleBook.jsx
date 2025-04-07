import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component {
    state = {
        selected: false,
    };

    handleClick = () => {
        this.setState({ selected: !this.state.selected });
        this.props.onSelect(this.props.book.asin);
    };

    render() {
        const { book } = this.props;

        return (
            <Card className="h-100 shadow p-1 mb-5 bg-body-tertiary rounded" style={{ border: this.state.selected ? '2px solid red' : 'none' }}>
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
                    
                    <Button variant="primary" className='mx-xl-2'>Details</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
