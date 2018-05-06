import React from "react";



class Weather extends React.Component {

    render() {
     
        return (
                
            <div className="card">

                        {
                            this.props.city && this.props.country && <p className="card-content">Location:
                 <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                            </p>
                        }
                        {
                            this.props.temperature && <p className="card-content">Temperature:
                     <span className="weather__value"> {this.props.temperature}</span>
                            </p>
                        }
                        {
                            this.props.humidity && <p className="card-content">Humidity:
                     <span className="weather__value"> {this.props.humidity}</span>
                            </p>
                        }
                        {
                            this.props.description && <p className="card-content">Description:
                     <span className="weather__value"> {this.props.description}</span>
                            </p>
                        }
                        {
                            this.props.error && <p className="weather__error">{this.props.error}</p>
                        }
            </div>
        )
    }
}


export default Weather;