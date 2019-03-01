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

    overlayRouteInfo = (route) => {
        
    }

    handleChange = (e) => {
        if(this.state.activeRoute !== e.target.value){
            this.setState({
                activeRoute: e.target.value
            });
        }
    }

    componentDidMount() {

    }

    render() {
        const {  activeRoute } = this.state;
        const { routeData } = this.props

        //Get formatted API data from MapScreen.js and map each route arr into an <option> element, grabbing the data we want for the key, value, and text.
        const mappedRoutes = routeData.map((route) => {
                    return <option key={route[0]} value={route[0]}> Route: {route[0]} </option>
                });
        
        return (
            <StyledRoutePicker name="routes" onChange={this.handleChange} currentRoute={activeRoute} routeData={this.props.routeData}>
                {mappedRoutes}
            </StyledRoutePicker>
        );
    
    }
}

export default RoutePicker;