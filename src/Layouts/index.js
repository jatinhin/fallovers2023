import React, { Component } from 'react';
import MainCompomentRouter from './Main/Main';
import {BrowserRouter } from 'react-router-dom';

class Layouts extends Component {
    
    render() {
        
    
    return  <BrowserRouter basename={process.env.PUBLIC_URL}>
                <MainCompomentRouter/>
            </BrowserRouter>
    }
}

export default Layouts;
