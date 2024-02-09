import React from "react";

function Header(){

    const [countRound, setCountRound] = React.useState(1)

    function addRound(){
        setCountRound(prevCountRound => prevCountRound + 1)
    }

    function resetRound(){
        setCountRound(prevCountRound => prevCountRound = 1)
    }
    
    return(
            <div className="col-sm-12 text-center">
                <h1 onClick={addRound}>Round {countRound}</h1>
            </div>
    )
}

export default Header