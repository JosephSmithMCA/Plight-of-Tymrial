import react from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import './style.css'

function App(){

    return(
        <div className="row">
            <Header/>
            <Body/>
        </div>
    )
}

export default App