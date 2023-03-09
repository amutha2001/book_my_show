import React from 'react'
import "./Header.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
 import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      
    return (
    <>
        <div className='logo'>
                <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:"grey" }}>
                <Toolbar>
                
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    bookmyshow
                </Typography>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ display: "flex" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                
                
                </Toolbar>
            </AppBar>
            
            </Box>

        </div>
            <header>
            
                <div className='nav'>
                    <div className='menu'>
                        <ul>
                            <li><a href="#">Movies</a> </li>
                            <li><a href="#">Stream</a> </li>
                            <li><a href="#">Events</a> </li>
                            <li><a href="#">Plays</a> </li>
                            <li><a href="#">Sports</a> </li>
                            <li><a href="#">Activities</a> </li>
                            <li><a href="#">Buzz</a> </li>
                        </ul>  
                    </div>
                    <div className='list'>
                        <ul>
                            <li><a href="#">ListYourShow</a> </li>
                            <li><a href="#">Corportes</a> </li>
                            <li><a href="#">Offers</a> </li>
                            <li><a href="#">Gift Cards</a> </li>
                        </ul>  
                    </div>
                </div>
            </header> 
    </>
  )
}

export default Header
