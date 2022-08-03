import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Screens from "./components/Screens";

const App =()=>{
    return(
        <React.Fragment>
            <Screens/>
        </React.Fragment>
    )
}

export default App;