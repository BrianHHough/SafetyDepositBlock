import React, {useState} from 'react';
import '../../App.css'
import Video from '../../assets/developer-coding-video/big-data-servers.mp4';
import { HeroContainer, HeroBackground,VideoBackground, HeroContent, HeroH1, HeroH1Gradient, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroDisclaimer} from './HeroElements';
import { ButtonMetamask } from '../ButtonElements';
// import { useHistory } from "react-router-dom"
import { useMoralis } from "react-moralis";
import MetaMaskImg from "../../assets/images/metamaskimgfilter.png";


const HeroSection = () => {
    // const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    // const history = useHistory();
    // const { authenticate, isAuthenticated, user } = useMoralis();
    const { authenticate } = useMoralis();
    // const { logout, isAuthenticating } = useMoralis();
    const { isAuthenticating } = useMoralis();

    // const onHover = () => {
    //     setHover(!hover)
    // }

    const onHover2 = () => {
        setHover2(!hover2)
    }

    // const handleRouteSignUpForm = () => {
    //     history.push("/signupform")
    // }

    // const handleRouteGetStarted = () => {
    //     history.push("/signup")
    // }


    return (
        <>
        <HeroContainer id="home">
            
            
            <HeroBackground>
                <VideoBackground 
                    autoPlay 
                    loop 
                    muted 
                    src={Video} 
                    type='video/mp4'
                    allowFullScreen
                    allowfullscreen='true'
                    playsInLine
                    controls={false}
                    >

                </VideoBackground>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Mobile. Portable. Encrypted.</HeroH1>
                <HeroH1Gradient className="H1Gradient">SafetyDepositBlock</HeroH1Gradient>
                <HeroP>Sign up for a new account and get free web3 storage <br></br><b>(up to 20GB)</b>* on SafetyDepositBlock.</HeroP>
                <HeroDisclaimer>*While supplies lasts (see elgibility)</HeroDisclaimer>
                {/* <HeroBtnWrapper>
                    <Button 
                    to="getstarted" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    onClick={handleRouteGetStarted}
                    >
                    <EmailButton 
                    width="50px"
                    
                    />
                    &nbsp;
                        Sign Up Here {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
                
                <HeroBtnWrapper>
                    <ButtonMetamask 
                    to="signupform" 
                    onMouseEnter={onHover2}
                    onMouseLeave={onHover2}
                    primary="true"
                    dark="true"
                    onClick={() => authenticate()}
                    isLoading={isAuthenticating}
                    iconRight
                    >
                    <img src={MetaMaskImg} 
                    alt="Metamask" 
                    width="40px" 
                    padding="20px"
                    />
                    &nbsp;
                        Sign in with Metamask {hover2 ? <ArrowForward /> : <ArrowRight />}
                    </ButtonMetamask>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
