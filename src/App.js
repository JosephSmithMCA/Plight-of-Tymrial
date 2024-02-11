import react from "react";
import Header from "./components/Header";
import InitialBody from "./components/InitialBody";
import Body from "./components/Body";
import './style.css'

function App(){

    return(
        <div className="row">
            <InitialBody/>
            <Header/>
            <Body/>
        </div>
    )
}

export default App