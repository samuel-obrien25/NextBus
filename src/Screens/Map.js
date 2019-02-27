import React, { Component } from 'react';

const fetchJsonp = require('fetch-jsonp');

class Map extends Component {
    state = {
        apiResponse: null,
        busRoutes: null
    }

    getBusRoutes = () => {
        //Fetches JSONP response from SEPTA API
        fetchJsonp("https://www3.septa.org/api/TransitViewAll/?callback=test")
            .then((response) => response.json())
            .then((busRoutesJSON) => {
                //Set busRoutes' state to the response, with a little massaging for ease of use later
                this.setState({
                    apiResponse: busRoutesJSON.routes[0],
                })
                //Return this.state.busRoutes as a parameter of mapBusRoutes. This is kinda pointless
                //but it works as a quick callback.
                return this.mapBusRoutes(this.state.apiResponse);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    mapBusRoutes = (returnedBusRoutes) => {
        //Logs the whole response from the SEPTA API
        console.log("All Routes: ", returnedBusRoutes[2]);

        this.setState({
            busRoutes: returnedBusRoutes
        });
    }

    componentDidMount() {
        this.getBusRoutes();
    }

    render() {
        return (
            <div className="App">
                <ul>
                </ul>
            </div>
        );
    }
}

export default Map;
