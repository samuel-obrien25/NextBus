import React from 'react';
import Headline from '../Text/Headline';
import styled, { keyframes } from 'styled-components';


function Splash() {

    /* Region STYLES */
 const Slide = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: "";
        opacity: 1;
    }
 `;
 const StyledSplashWrapper = styled.div`
    animation:  ${Slide} 600ms ease-in-out forwards;
    background: linear-gradient(to top, #512DA8, #2962FF);
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
`;
/* EndRegion */

        return (
            <StyledSplashWrapper>
                <Headline text="HEADLINE"/>
            </StyledSplashWrapper>
        );
}

export default Splash;
