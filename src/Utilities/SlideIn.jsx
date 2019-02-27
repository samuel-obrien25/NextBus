import React from 'react';
import styled, { keyframes } from 'styled-components';


function SlideIn(props) {

// #region STYLES
    const SlideIn = keyframes`
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    `;
    
    const StyledSlideIn = styled.span`
        animation: ${SlideIn};
        animation-delay: ${props => props.animDelay};
        animation-fill-mode: ${props => props.animFillMode};
        animation-duration: ${props => props.animDuration};
        opacity: 0;
        transform: translateY(50px);
        display: inline-block;
    `;
// #endregion STYLES

        const { animDelay, animDuration, animFillMode } = props;
    return (
        <StyledSlideIn animDelay={animDelay} animFillMode={animFillMode} animDuration={animDuration}>
          {props.children}
        </StyledSlideIn>
    );
}

export default SlideIn;
