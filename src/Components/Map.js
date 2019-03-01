import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

const StyledMap = styled(Map)`
    height: 100vh;
`

export default class map extends Component {
    state = {
        lat: 39.9526,
        lng: -75.1652,
        zoom: 10,
    }

    componentDidMount(){
        //If User Latitude exists, set the state with user's position. Otherwise center in on the user.
        if(this.props.userLat){
            this.setState({
                lat: this.props.userLat,
                lng: this.props.userLng
            })
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <StyledMap center={position} zoom={this.state.zoom}>
                <TileLayer
                    url="http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png"
                />
            </StyledMap>
        )
    }
}