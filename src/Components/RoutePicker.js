import React, { Component } from 'react';

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