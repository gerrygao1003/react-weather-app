import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// Import Open Weather Map API key
import API_KEY from "./api";




class App extends React.Component {
  
  state = {
    latitude: undefined,
    longitude: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault(); //Prevent default behavior of the page;
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){

      // console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }

  }

  getMyLocation = () => {
    
    const location = navigator && navigator.geolocation

    if (location) {
      location.getCurrentPosition(async (position) => {
        const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`);
        let dataAuto = await  api_call.json();
        document.getElementById('city').value = dataAuto.name; 
        document.getElementById('country').value = dataAuto.sys.country; 

      }, (error) => {
       
      })
    }

  }
  
  render(){
    this.getMyLocation();
    return(
     <div className="container app-wrapper ">
      <div className="row">
      <div className="col s12">
        <div className="card ">
          <div className="card-content">
                  <Titles />
                  <Form getWeather={this.getWeather} hasCountry={this.hasCountry}/>

          </div>

        </div>

                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
      </div>
      </div>
      </div>
             
        
         
    );
  }
  
}

export default App;
