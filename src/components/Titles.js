import React from "react";

const Titles = (props) => {
    return(
        <div>
            <h1 className="title-container__title">Weather Finder</h1>
            <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
            <button onClick={props.getLocation}>get Location</button>

        </div>
    );
}
export default Titles;