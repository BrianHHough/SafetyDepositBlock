import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to="/">How SafetyDepositBlock works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                                <FooterLink to="/">Privacy Policy</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                                <FooterLink to="/">Partnerships</FooterLink>
                            </FooterLinkItems>
                    </FooterLinksWrapper>


                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Web3 Storage</FooterLinkTitle>
                                <FooterLink to="/">Upload Files</FooterLink>
                                <FooterLink to="/">Increase Web3 Storage</FooterLink>
                                <FooterLink to="/">Save to the Blockchain</FooterLink>
                                <FooterLink to="/">Appify Your Storage</FooterLink>
                            </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media</FooterLinkTitle>
                                <FooterLink to="/">LinkedIn</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">YouTube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                            </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            SafetyDepositBlock
                        </SocialLogo>
                        <WebsiteRights>SafetyDepositBlock ??? {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <InstagramIcon />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FacebookIcon />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                                <YouTubeIcon />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <TwitterIcon />
                            </SocialIconLink>

                        </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
