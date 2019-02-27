import React from 'react';
import SlideIn from '../Utilities/SlideIn';
import styled, { keyframes } from 'styled-components';


function Headline(props) {

// #region STYLES

    const StyledHeadline = styled.h1`
        position: absolute;
        color: rgba(255,255,255,.6);
        top: 25%;
        left: 0;
        right: 0;
        text-align:center;
        width: 100%;
        font-size: 8vw;
        display: inline-block;
        font-family: sans-serif;
        letter-spacing: 8px;
    `;
// #endregion STYLES
    
        const inputString = props.text;
        const separatedString = inputString.split("");
        const mappedChars = separatedString.map((char, index) => {
            return  <SlideIn animDuration={index * 150 + 'ms'} animFillMode="forwards" animDelay="400ms">{char}</SlideIn>;
        })

    return (
        <StyledHeadline style={props.location}>
            {mappedChars}
        </StyledHeadline>
    );
}

export default Headline;
