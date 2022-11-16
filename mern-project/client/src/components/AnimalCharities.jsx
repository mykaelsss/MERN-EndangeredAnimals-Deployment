import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
const AnimalCharities = ({change,check}) => {
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));
    return (
        <div>
            <nav className='flex charityNav'>
            <Box sx={{ flexGrow: 1 }} className='Nav'>
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Charities You Can Donate To
          </Typography>
          <Link to={'/'} className=' p-2 rounded-md mx-4'>Home</Link>
          <Link to={'/sources'} className='mr-4'>Sources</Link>
          <FormGroup>
            <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }}  onChange={change} checked={check}/>}
                label=""
            />
        </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
            </nav>
            <div className='flex flex-col gap-3 charityLinks p-4 '>
                <a href="https://www.asianelephantsupport.org/#:~:text=Asian%20Elephant%20Support%20(AES)%20is,this%20magnificent%20and%20endangered%20species." target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Asian Elephant Support</a>
                <a href="https://www.awf.org/" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>African Wildlife</a>
                <a href="https://redpandanetwork.org/Red-Panda-Facts/?gclid=CjwKCAiAjs2bBhACEiwALTBWZdDuWhND3Cz4zK7n_9m0lreqwqDlsWRCnILa5vdYstESbV4u9Nv8aBoC9I4QAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Red Panda Network</a>
                <a href="https://www.seeturtles.org/hawksbill-turtles?gclid=CjwKCAiAjs2bBhACEiwALTBWZc8mZGN4X_eL7kMUk3Z8LUJzF55D9BUhPFjhRB7LOK_Q9VodwcZUFRoC8c4QAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Sea Turtles</a>
                <a href="https://www.birdlife.org/donate/?gclid=CjwKCAiAjs2bBhACEiwALTBWZfstKFVM05HjJsVW3Kyj0_cWIJ2tFUqlgLQwSfjh3q3izZY4UHPHqhoCJ9MQAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>BirdLife</a>
                <a href="https://www.worldlandtrust.org/news/2021/09/operation-ocelot-save-nature-with-steve-backshall/#:~:text=Operation%20Ocelot%20champions%20education%20as,in%20curriculums%20or%20at%20home." target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>World Land Trust</a>
                <a href="https://wildlifewarriors.org.au/conservation-projects/koala-conservation?gclid=CjwKCAiAjs2bBhACEiwALTBWZV4YXkQR2-Yk3FR7y3K4kE5BXr1lCQEFqwWs1zEOhf_OO344D4MI3hoCIOMQAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Wildlife Warriors</a>
                <a href="https://defenders.org/wildlife/black-footed-ferret?s_src=3WDW1900PJXXX&s_subsrc=googlegrant&gclid=CjwKCAiAjs2bBhACEiwALTBWZfrsEz_mjEteh9rZqNFhnunMwlt2NsQwm6o2gLINPFg61DRbL9fGFBoCN48QAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Black-Footed Ferret Defenders</a>
                <a href="https://www.iapf.org/?gclid=CjwKCAiAjs2bBhACEiwALTBWZRpyNrbrOTm01tzqLjd3xmKKRAaX8_ssx1157xZzh7m9uEKLnP_I6RoCSF0QAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>IAPF</a>
                <a href="https://defenders.org/wildlife/polar-bear?s_src=3WDW1900PJXXX&s_subsrc=googlegrant&gclid=CjwKCAiAjs2bBhACEiwALTBWZXBX3mINId2fhqTD1wcE8avmYpHVOwHI2SMYEIBNAXrGG-XLu83p8xoCfFwQAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Polar Bear Defenders</a>
                <a href="https://www.worldanimalprotection.us/pledge-join-team-tiger?gclid=CjwKCAiAjs2bBhACEiwALTBWZWI80M138jMgKgGCoXbx5Gtx9PrMMxdQvEr5jHCSk4F4rnTZC6ztbBoCAdEQAvD_BwE&gclsrc=aw.ds" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>World Animal Protection</a>
            </div>
        </div>
    )
}

export default AnimalCharities
