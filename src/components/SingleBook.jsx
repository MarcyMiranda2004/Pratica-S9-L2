import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';
import AddComment from './AddComment';

class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            showComments: false,
            showAddComment: false, 
        };
    }

    handleClick = () => {
        this.setState({ selected: true });
    };

    toggleComments = () => {
        this.setState((prevState) => ({
            showComments: !prevState.showComments
        }));
    };

    toggleAddComment = () => {
        this.setState((prevState) => ({
            showAddComment: !prevState.showAddComment
        }));
    };

    render() {
        const { book } = this.props;
        const { showComments, showAddComment } = this.state;

        return (
            <Card className="h-100 shadow p-1 mb-5 bg-body-tertiary rounded">
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

                    <Button className='mt-sm-2 mx-xl-2 mt-xxl-0' variant="secondary" onClick={this.toggleComments}>
                        {showComments ? "Hide Comments" : "Show Comments"}
                    </Button>

                    <Button className='mt-sm-2 mx-xl-2' variant="info" onClick={this.toggleAddComment}>
                        {showAddComment ? "Hide Comment Form" : "Add Comment"}
                    </Button>

                    {showComments && <CommentArea asin={book.asin} />}
                    {showAddComment && <AddComment asin={book.asin} />}
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
