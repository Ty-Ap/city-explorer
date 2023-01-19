import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Movies.css';

class Movies extends React.Component {
  render() {

    return (
      <>
        {this.props.movieResults.map((movie, index) => {
          return <ListGroup.Item key={index}>{movie.title}, {movie.release_date}</ListGroup.Item>
        })
        }
      </>
    )
  }
}

export default Movies;