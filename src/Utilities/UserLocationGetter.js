import React from 'react';

class UserLocationGetter extends React.Component {
    state = {
        userLat: null,
        userLong: null
    }

getUserLocation = () => {

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.setState({
            userLat: { latitude },
            userLong: { longitude }
        })

    }

    function error() {
        window.alert("Unable to find your location.");
    }

    if (!navigator.geolocation) {
        window.alert('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
    render(){
        this.getUserLocation();
        
        return (
            <div userLat={this.state.userLat} userLong={this.state.userLong}></div>
        );
    }

}

export default UserLocationGetter;
