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

    const [countRound, setCountRound] = React.useState(1)

    function addRound(){
        setCountRound(prevCountRound => prevCountRound + 1)
    }

    function resetRound(){
        setCountRound(prevCountRound => prevCountRound = 1)
    }
    
    return(
        <div className="col-sm-4">
            <div className="col-sm-12 text-center">
                <h1 onClick={addRound}>Round {countRound}</h1>
            </div>
        </div>
    )
}

function Stats(){

    return(
        <div className="col-sm-4">
            <input type="text" />
        </div>
    )
}

function MagicalEffects(){

    return(
        <div className="col-sm-4">
            <h1>Magical Effects</h1>
            <div className="col-sm-12">
                <p>akijnacjnn</p>
            </div>
        </div>
    )
}

export default Body