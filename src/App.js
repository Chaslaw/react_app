import React, {Component, Fragment} from 'react';
import './App.scss';


import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';

class App extends Component {

    constructor () {
        super()

        this.data = [

            {
                name: "Peter",
                age: 35
            },
            {
                name: "Anna",
                age: 38
            },
            {
                name: "Mark",
                age: 30
            }
        ];

    }

   render() {
        return (
            <Fragment>
                <Header search />
                <Cards data={this.data} />
                
            
            </Fragment>
        )
    }

}

export default App;



