import React, {useState, useEffect} from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinksLoggedIn, NavBtn, NavBtnLinkSignIn, NavBtnLinkToProfile } from './NavBarElements';
import '../../App.css';
import {animateScroll as scroll } from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useMoralis } from "react-moralis";

// edit hamburger menu icon
const useStyles = makeStyles((theme) => ({
    largeIcon: {
      '& svg': {
        fontSize: 50,
      }
    },
   
  }));

const NavBar = ({ toggle }) => {
    const classes = useStyles();
    const [scrollNav, setScrollNav] = useState(false);
    const { authenticate, isAuthenticating } = useMoralis();
    // const { isAuthenticated, user } = useMoralis();
    const { isAuthenticated } = useMoralis();
    // const { logout, isAuthenticating } = useMoralis();

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    if (!isAuthenticated) {
    return (
        <div>
            <>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>

                        <NavLogo 
                            to='/' 
                            onClick={toggleHome}
                            className="NavLogoGradient"
                            >
                            <h2>SafetyDepositBlock</h2>
                        </NavLogo>

                        <MobileIcon 
                            onClick={toggle}
                            className={classes.largeIcon}
                            >
                            <MenuIcon />
                        </MobileIcon>

                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="about"
                                    smooth="true"
                                    duration={500} 
                                    spy="true"
                                    exact='true' 
                                    offset={-80}
                                    >   
                                    About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="listings"
                                smooth="true"
                                duration={500} 
                                spy="true"
                                exact='true' 
                                offset={-80}
                                >Web3 Storage</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="perks"
                                smooth="true"
                                duration={500} 
                                spy="true" 
                                exact='true' 
                                offset={-80}
                                >Member Perks</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="start"
                                smooth="true" 
                                duration={500} 
                                spy="true"
                                exact='true' 
                                offset={-80}
                                >Get Started</NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            {/* <NavBtnLink to="/signin">
                            Log In
                            </NavBtnLink> */}
                            <NavBtnLinkSignIn 
                            onClick={() => authenticate({ signingMessage: "Hello World!" })}
                            isLoading={isAuthenticating}
                            >
                            Log In
                            </NavBtnLinkSignIn>
                        </NavBtn> 

                    </NavBarContainer>

                </Nav>
            </>
        </div>
    )
    };
    if (isAuthenticated) {
        return (
            <>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>

                        <NavLogo 
                            to='/' 
                            onClick={toggleHome}
                            className="NavLogoGradient"
                            >
                            <h2>SafetyDepositBlock</h2>
                        </NavLogo>

                        <MobileIcon 
                            onClick={toggle}
                            className={classes.largeIcon}
                            >
                            <MenuIcon />
                        </MobileIcon>

                        <NavMenu>
                            <NavItem>
                                <NavLinksLoggedIn 
                                to="/"
                                smooth="true"
                                duration={500}
                                spy="true"
                                exact='true' 
                                offset={-80}
                                >MyFiles</NavLinksLoggedIn>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinksLoggedIn 
                                to="/test"
                                smooth="true"
                                duration={500}
                                spy="true"
                                exact='true' 
                                offset={-80}
                                >MyFiles-Test</NavLinksLoggedIn>
                            </NavItem> */}
                            {/* <NavItem>
                                <NavLinks 
                                    to="about"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                    >   
                                    Listings</NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinksLoggedIn 
                                to="/upload"
                                smooth="true"
                                duration={500} 
                                spy="true"
                                exact='true' 
                                offset={-80}
                                >Upload</NavLinksLoggedIn>
                            </NavItem>
                            
                            <NavItem>
                                <NavLinksLoggedIn 
                                to="/signupform"
                                smooth="true"
                                duration={500} 
                                spy="true"
                                exact='true' 
                                offset={-80}
                                >Upgrade</NavLinksLoggedIn>
                            </NavItem>
                            <NavItem>
                                <NavLinksLoggedIn 
                                to="/support"
                                smooth="true"
                                duration={500} 
                                spy="true"
                                exact='true' 
                                offset={-80}
                                >Support</NavLinksLoggedIn>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLinkToProfile 
                            to="/profile"
                            smooth="true" 
                            duration={500} 
                            spy="true"
                            exact='true' 
                            >
                            My Profile
                            </NavBtnLinkToProfile>
                        </NavBtn> 

                    </NavBarContainer>

                </Nav>
            </>
        )
    }
}

export default NavBar
