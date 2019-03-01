import React, { Component } from 'react';
import styled from 'styled-components';

const StyledRoutePicker = styled.select`
    position: fixed;
    top: 10px;
    right: 10px;
    width: 80%;
    padding: 10px;
    z-index: 9000;
    opacity: .8;
`;

class RoutePicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeRoute: null,
        }
    }

    handleChange = (e) => {
        if(this.state.activeRoute !== e.target.value){
            this.setState({
                activeRoute: e.target.value
            })

            window.alert(this.state.activeRoute);
        }
    }

   mapBusRoutes = () => {
        //Get the API response from MapScreen.js
        /* {[{[
                {}
                {}
                {}
            ]}]}
            Response is: object wraps an array of route objects, each route object has an array of objects containing bus data.
        */
        const mapDataObject = this.props.routeData;

        //Logs the whole response from the SEPTA API
        console.log("mapDataObject: ", mapDataObject);


        //Returns the object wrapper as an array of route objects
        const mapDataArrays = Object.entries(mapDataObject);

        //Maps the array of routes and returns each route object as an array
        const mappableRoutes = mapDataArrays.map((route) => {
            return Object.entries(route[1][0]);
        });

        //Pushes each route array into one routeArr const for easy mapping
        const routeArr = []
        mappableRoutes[0].forEach((route) => {
            routeArr.push(route);
        });

        //And finally, map each route arr into an <option> element, grabbing the data we want for the key, value, and text.
        const mappedRoutes = routeArr.map((route) => {
            return <option key={route[0]} value={route[0]}> Route: {route[0]} </option>
        });

        return mappedRoutes;
    }

    render() {

        const selectElements = this.mapBusRoutes();

        return (
            <StyledRoutePicker name="routes" onChange={this.handleChange}>
                {selectElements}
            </StyledRoutePicker>
        );
    }
}

export default RoutePicker;