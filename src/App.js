import React, {Component, Fragment} from 'react';
import './App.scss';


import { Header } from './components/Header/Header';
import { Cards } from './components/Cards/Cards';

class App extends Component {


         state = {
            header: true,
            data : [

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
            ],

            filteredData: []
        }

        toggleHeader () {
            this.setState({
                header: !this.state.header
                })
           
        }

    filterData (searchResults) {
this.setState({
    filteredData: searchResults
})
    }
    
    
        render() {

        const {header, data, filteredData} = this.state;
        
        return (
            <Fragment>
                {header && <Header black 
                                    search 
                                    data={data}
                                    onDataFilter={(searchResults=> this.filterData(searchResults))} />}

                
                
                <Cards data={filteredData} />
                <button onClick={()=>this.toggleHeader()}>Toggle Header</button>

            </Fragment>
        )
    }

}



export default App;



