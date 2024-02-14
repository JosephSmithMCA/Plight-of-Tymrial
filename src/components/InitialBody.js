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
        <div className="col-sm-12 InitialInitiativeDetail">
            <div className="row">
                <div className="col-sm-4">
                    <h5>Enter Character's Name: </h5>
                </div>
                <div className="col-sm-3">
                    <input type="text" />
                </div>
                <div className="col-sm-1">
                    <button className="rounded">Enter</button>
                </div>
            </div>
        </div>
    )
}

function InitialStats(){

    return(
        <div className="col-sm-4 text-center">
            <input type="text" />
        </div>
    )
}

export default InitialBody