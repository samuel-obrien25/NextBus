import React, { Component } from 'react';
import styled from 'styled-components';

const StyledRoutePicker = styled.select`
    position: fixed;
    top: 10px;
    left: 10px;
    width: 80%;
    padding: 20px;
    z-index: 9000;
`;

class RoutePicker extends Component {
    state = {
        activeRoute: null
    }

    render() {
        return (
            <select name="routes">
                {this.props.routesList}
            </select>
        );
    }
}

export default RoutePicker;