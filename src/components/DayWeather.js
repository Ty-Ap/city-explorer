import React from 'react';
import { Card } from 'react-bootstrap';


class DayWeather extends React.Component {
  render() {

    return (
      <>
            <Card.Text>{this.props.date}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
      </>
    )
  }
}

export default DayWeather;