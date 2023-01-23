import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import './Movies.css';
import DayWeather from './DayWeather';

class Weather extends React.Component {
  render() {

    return (
      <>
        {this.props.weatherData.map((day, index) => {
          return (
            <Stack ap={2} className="col-md-5 mx-auto">
              <Card>
                <DayWeather
                  key={index}
                  date={day.date}
                  description={day.description}
                />
              </Card>
            </Stack>
          )
        })}
      </>
    )
  }
}


export default Weather;