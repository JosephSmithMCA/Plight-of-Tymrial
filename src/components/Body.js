import React from "react";

function Body(){

    return(
        <div className="row">
            <InitiativeOrder/>
            <Stats/>
            <MagicalEffects/>
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

function MagicalEffects(){

    return(
        <div className="col-sm-4 text-center">
            <h1>Magical Effects</h1>
            <div className="col-sm-12">
                <p>akijnacjnn</p>
            </div>
        </div>
    )
}

export default Body