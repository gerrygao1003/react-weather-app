import React from "react";

const Form = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            
            <input type="text" name="city" id="city" placeholder="City..." />
            <input type="text" name="country" id="country" placeholder="Country..." />
            <button >Get Weather</button>
        </form>
    )
}



export default Form;