import React from "react";

const Form = (props) => {
    return (

        <form onSubmit={props.getWeather}>
            <div className="input-field col s6">
                <input type="text" name="city" id="city" placeholder="" />
                <label htmlFor="city" >City</label>
            </div>
            <div className="input-field col s6">

                <input type="text" name="country" id="country" placeholder="" />
                <label htmlFor="country" >Country</label>
            </div>
            <button className="waves-effect waves-light btn" >Get Weather</button>
        </form>
    )
}

export default Form;