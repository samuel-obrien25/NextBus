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
        busRoutes: null,
        isMapScreenActive: false,
    }

    getBusRoutes = () => {
        //Fetches JSONP response from SEPTA API
        fetchJsonp("https://www3.septa.org/api/TransitViewAll/?callback=test")
            .then((response) => response.json())
            .then((busRoutesJSON) => {
                //Set busRoutes' state to the response, with a little massaging for ease of use later
                this.setState({
                    apiResponse: busRoutesJSON,
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
        //Set busroutes to state and show component
        this.setState({
            busRoutes: returnedBusRoutes,
            isMapScreenActive: !this.state.isMapScreenActive
        });
    }

    

    componentDidMount() {
        this.getBusRoutes();
    }

    render() {
        if (!this.state.isMapScreenActive) return null;
        else {
            return (
                <SlideIn animDelay="3200ms" animFillMode="forwards" animDuration="900ms" animStyle="fullScreen" isLoaded={true}>
                    <StyledMapScreen>
                        <RoutePicker routeData={this.state.busRoutes} />
                        <Map/>
                    </StyledMapScreen>
                </SlideIn>
            );

        }

    }
}

export default MapScreen;
