import React, { Component } from 'react';
import Splash from "./Screens/Splash";
import Map from "./Screens/Map";

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
        <Splash/>
        <Map/>
      </StyledMain>
    );
  }

}

export default App;
