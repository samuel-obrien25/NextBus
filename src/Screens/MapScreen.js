import React, { Component } from 'react';
import styled from 'styled-components';
import SlideIn from '../Utilities/SlideIn';
import Map from '../Components/Map';
import RoutePicker from '../Components/RoutePicker';

const fetchJsonp = require('fetch-jsonp');

//#region Map Styles
    const StyledMapScreen = styled.section`
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100vh;
        background-color: /*#c4167d*/ gray;
    `;
//#endregion Map Styles


class MapScreen extends Component {
    state = {
        apiResponse: null,
        isMapScreenActive: false,
        mappedBusRoutes: null
    }

    getBusRoutes = () => {
        //Fetches JSONP response from SEPTA API
        fetchJsonp("https://www3.septa.org/api/TransitViewAll/?callback=test")
            .then((response) => response.json())
            .then((busRoutesJSON) => {
                //Set busRoutes' state to the response
                this.setState({
                    apiResponse: busRoutesJSON,
                });
                //Call mapBusRoutes to work through the JSON response for later use.
                this.mapBusRoutes();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    mapBusRoutes = () => {
        //Get the API response from state
        /* {[{[
                {}
                {}
                {}
            ]}]}
            Response is: object wraps an array of route objects, each route object has an array of objects containing bus data.
        */
        
        //Logs the whole response from the SEPTA API
        console.log("mapDataObject: ", this.state.apiResponse);

        //Returns the object wrapper as an array of route objects
        const mapDataArrays = Object.entries(this.state.apiResponse);

        //Maps the array of route objects, and returns each route object as an array
        const mappableRoutes = mapDataArrays.map((route) => {
            return Object.entries(route[1][0]);
        });

        //Pushes each route array into one routeArr const for easy use later
        const routeArr = [];

        mappableRoutes[0].forEach((route) => {
            routeArr.push(route);
        });

        //Finally, set the mapScreen to active state and set the formatted API response data to State.
        //This way I can pass it down to the necessary components.
        this.setState({
            isMapScreenActive: !this.state.isMapScreenActive,
            mappedBusRoutes: routeArr
        });
    }

    componentDidMount() {
        //Run everything on mount
        this.getBusRoutes();
    }

    render() {
        if (!this.state.isMapScreenActive) return null;
        else {
            return (
                <SlideIn animDelay="3200ms" animFillMode="forwards" animDuration="900ms" animStyle="fullScreen" isLoaded={true}>
                    <StyledMapScreen>
                        <RoutePicker routeData={this.state.mappedBusRoutes} />
                        <Map/>
                    </StyledMapScreen>
                </SlideIn>
            );

        }

    }
}

export default MapScreen;
