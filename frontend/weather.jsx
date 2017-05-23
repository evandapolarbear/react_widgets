import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null
    }

    this.getWeatherData = this.getWeatherData.bind(this)
  }

  componentDidMount(){
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(pos => {
        this.getWeatherData(pos.coords)
      });
    } else {
      console.log("cannot determine location");
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(watchID);
  }

  getWeatherData({latitude, longitude}){
    let options = {
      method: "GET",
    }

    

    let req = fetch(url, options)
    req.then(res => res.json()).then(json => {
      console.log(json);
      console.log(this.state);
    })
  }


  render(){
    return (
      <div className='weather'>
        <h1>Weather app goes here</h1>
      </div>
    )
  }
}

export default Weather;
