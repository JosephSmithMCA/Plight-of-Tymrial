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
            <div className="col-sm-12 text-center Header">
                <h2 onClick={addRound}>Round {countRound}</h2>
            </div>
    )
}

export default Header