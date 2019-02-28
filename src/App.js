import React, { Component } from 'react';

import SplashScreen from "./Screens/SplashScreen";
import MapScreen from "./Screens/MapScreen";

import styled from 'styled-components';

const StyledMain = styled.main`
        width: 100%;
        height: 100vh;
        max-width: 100%;
        overflow: hidden;
        position: fixed;
        left: 0;
        top:0;
`;

class App extends Component {

render() {

 return (
      <StyledMain>
        <SplashScreen />
        <MapScreen isLoaded={this.props.isLoaded}/>
      </StyledMain>
    );
  }

}

export default App;
