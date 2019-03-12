import React from 'react';
import Headline from '../Text/Headline';
import styled from 'styled-components';
import SlideIn from '../Utilities/SlideIn';
import SlideOut from '../Utilities/SlideOut';


const StyledSplashWrapper = styled.section`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    overflow: hidden;
    display: flex;
`;

const StyledSplashBackground = styled.div`
    background: linear-gradient(to top, #512DA8, #2962FF);
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 0;
`;


class SplashScreen extends React.Component{
    state = {
        slideInOut: "in",
        userLat: this.props.userLat,
        userLong: this.props.userLong
    }

    componentDidMount() {
        //How long to wait before Splash slidesout
        setTimeout(() => {
            this.setState({
                slideInOut: "out",
            });
        }, 2000);
    }

    render(){
        if(this.state.slideInOut === "in"){
            return (
                <StyledSplashWrapper>
                    <SlideIn animDelay="0" animFillMode="forwards" animDuration="600ms">
                        <StyledSplashBackground />
                    </SlideIn>
                    <SlideIn animDelay="150" animFillMode="forwards" animDuration="900ms">
                        <Headline slideInOut={this.state.slideInOut} text="HEADLINE"/>
                    </SlideIn>
                </StyledSplashWrapper>
            );
        } else {
            return (
                <SlideOut animDelay="1200ms" animFillMode="forwards" animDuration="800ms" animStyle="fullScreenSlide">
                    <StyledSplashWrapper>
                        <SlideOut animDelay="1200ms" animFillMode="forwards" animDuration="800ms">
                            <StyledSplashBackground />
                        </SlideOut>
                        <SlideOut animDelay="1000ms" animFillMode="forwards" animDuration="800ms">
                            <Headline slideInOut={this.state.slideInOut} text="HEADLINE" />
                        </SlideOut>
                    </StyledSplashWrapper>
                </SlideOut>
            );
        }
    }
}

export default SplashScreen;
