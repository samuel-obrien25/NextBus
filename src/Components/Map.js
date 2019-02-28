import React, { Component } from 'react';
import styled from 'styled-components';
import SlideIn from '../Utilities/SlideIn';
import ReactMapGL from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

//#region Map Styles
const StyledMap = styled.div`
        position: relative;
        top:0;
        left:0;
        width: 98%;
        height: 98%;
        z-index: 9000;
        border: 2px solid #FFF;
        margin: auto;
    `;
//#endregion Map Styles

const TOKEN = 'pk.eyJ1Ijoic2FtdWVsb2JyaWVuMjUiLCJhIjoiY2pzbmVteGdpMGJuOTQ0bGl6N2ozcHdzdCJ9.1tmUXenL9dzdkvUB8HmEXA';

class Map extends Component {
    state = {
        viewport: {
            latitude: 39.9732,
            longitude: -75.1472,
            zoom: 11,
            height: 400,
            width: 400
        }
    };

    render() {

            return (
                   <ReactMapGL
                    {...this.state.viewport}
                    onViewPortChange={(viewport) => this.setState({viewport})}
                    mapboxApiAccessToken={TOKEN}
                    />
                );
    }
}

export default Map;
