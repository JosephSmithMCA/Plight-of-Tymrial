import React from "react";
import ConditionsRow from "./ConditionsRow";

function Body(){

    return(
        <div className="row">
            <InitiativeOrder/>
            <Stats/>
            <Conditions/>
        </div>
    )
}

function InitiativeOrder(){

    return(
        <div className="col-sm-4">
            
        </div>
    )
}

function Stats(){

    return(
        <div className="col-sm-4 text-center">
            <input type="text" />
        </div>
    )
}

function Conditions(){

    return(
        <div className="col-sm-4 text-center">
            <h2 className="text-decoration-underline">Conditions</h2>
            <div className="col-sm-12">
                <ConditionsRow/>
            </div>
        </div>
    )
}

export default Body