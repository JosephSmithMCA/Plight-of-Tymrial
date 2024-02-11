import React from "react";


function InitialBody(){

    return(
        <div className="row">
            <InitialInitiativeDetails/>
        </div>
    )
}

function InitialInitiativeDetails(){

    return(
        <div className="col-sm-12">
            <h5>Enter Character's Name: </h5>
        </div>
    )
}

export default InitialBody