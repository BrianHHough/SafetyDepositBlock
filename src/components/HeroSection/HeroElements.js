import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000C30;
`

export const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 0.4;

`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
`

export const HeroH0 = styled.div`
    width: 40%;
    position: relative;
    align-items: flex-start;
`
export const HeroH0Img = styled.img`
    position: relative;
    height: 40px;
`

export const HeroH0Text = styled.div`
    position: relative;
    float: left;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
    transform: translateY(50%);
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 34x;
    text-align: center;
    margin-bottom: 3px;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`

export const HeroH1Gradient = styled.h1`
    color: #fff;
    font-size: 56px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroDisclaimer = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    color: white;
`
export const ArrowForward = styled(ArrowForwardIcon)`
    margin-left: 8px;
    font-size: 25px;
`

export const ArrowRight = styled(ArrowForwardIosIcon)`
margin-left: 8px;
font-size: 25px;
`

export const EmailButton = styled(MarkEmailReadIcon)`
margin-left: 8px;
font-size: 45px;
`