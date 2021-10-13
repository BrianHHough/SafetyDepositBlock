import React from 'react';

// import Icon1 from '../../assets/images/svg-1.svg';
// import Icon2 from '../../assets/images/svg-2.svg';
// import Icon3 from '../../assets/images/svg-3.svg';
import { ListingsSearchContainer, ServicesContainer } from './ListingsElements'

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import EthereumSVG from "../../assets/images/ethereum.svg";

// import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';

// import { useMoralis } from "react-moralis";

import DropZoneCon from './DropZoneCon';
import DropZonePreviewCon from './DropZonePreviewCon';

// const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//       backgroundColor: '#44b700',
//       color: '#44b700',
//       boxShadow: `0 0 0 7px #44b700`,
//       '&::after': {
//         position: 'absolute',
//         top: -6,
//         left: -6,
//         bottom: 0,
//         width: '140%',
//         height: '140%',
//         borderRadius: '50%',
//         animation: 'ripple 1.6s infinite ease-in-out',
//         border: '4px solid currentColor',
//         content: '""',
//       },
//     },
//     '@keyframes ripple': {
//       '0%': {
//         transform: 'scale(.8)',
//         opacity: 1,
//       },
//       '100%': {
//         transform: 'scale(2.4)',
//         opacity: 0,
//       },
//     },
//   }));


const useStyles = makeStyles((theme) => ({
    SearchBar: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));


const Services = () => {
    const classes = useStyles();

    // const {user } = useMoralis();
    // const [username] = useState(user.attributes.username);
    // const [ethaddress, setEthaddress] = useState(user.attributes.username);

    return (
        <div id="listings">
        <ListingsSearchContainer >

        <div className="SearchBar">
                <Paper component="form" className={classes.SearchBar}>
                    <InputBase
                    className={classes.input}
                    placeholder="Search Listings..."
                    inputProps={{ 'aria-label': 'Search Sounds...' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                    </IconButton>
                </Paper>
              </div>

        </ListingsSearchContainer>
        
       

        <ServicesContainer id="perks">
        {/* Example 1: validator */}
        <DropZoneCon />

        </ServicesContainer>
        <br></br>
        <ServicesContainer id="perks">
        {/* Example 2: image preview */}
        <DropZonePreviewCon />

        </ServicesContainer>

     

        </div>    
    )
}

export default Services
