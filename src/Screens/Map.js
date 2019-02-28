import React, { Component } from 'react';
import styled from 'styled-components';
import SlideIn from '../Utilities/SlideIn';
const fetchJsonp = require('fetch-jsonp');

//#region Map Styles
const StyledMap = styled.section`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 9000;
`;

//#endregion Map Styles


class Map extends Component {
    state = {
        apiResponse: null,
        busRoutes: null,
        isHidden: true
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
                //but it works as a callback.
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
            busRoutes: returnedBusRoutes,
            isHidden: !this.state.isHidden
        });
    }

    componentDidMount() {
        this.getBusRoutes();
    }

    render() {
        if (this.state.isHidden) return <div></div>;
        else {
            return (
                <SlideIn>
                    <StyledMap>
                    </StyledMap>
                </SlideIn>
            );

        }

    }
}

export default Map;
