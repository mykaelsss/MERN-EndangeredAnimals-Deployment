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
const Sources = ({change,check}) => {
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
        <nav className='flex '>
            <Box sx={{ flexGrow: 1 }} className='Nav'>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sources Used For Website
                    </Typography>
                    <Link to={'/'} className=' p-2 rounded-md mx-4'>Home</Link>
                    <Link to={'/donate'} className='mr-4'>Donate</Link>
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
        <a href="https://roundtripfoundation.org.au/tracking-mountain-gorillas-in-the-post-pandemic-era/?gclid=Cj0KCQiAsdKbBhDHARIsANJ6-jfuXQjUs6ZMcxraNjFr9pkX6RxCHpkZHhaeexy5D2OqoPHMVifssoMaAqv1EALw_wcB" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>RoundTripFoundartion.org(Mountain Gorilla)</a>
        <a href="https://www.nationalgeographic.com/animals/mammals/facts/asian-elephant#:~:text=The%20Asian%20elephant%20is%20classified,elephants%20left%20in%20the%20wild." target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>NationalGeographic.com(Asian Elephant)</a>
        <a href="https://globalelephants.org/the-basics/?gclid=CjwKCAiA68ebBhB-EiwALVC-NngFO8OZY66BZMAU-2ZiV9koMV-8oCdviM8ECx-ygbGHgqiqvJP_DBoCC9MQAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>GlobalElephants.org(Asian Elephant)</a>
        <a href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/elephants/asian_elephants/#:~:text=Asian%20elephants%20are%20the%20continent's,in%20order%20to%20cool%20themselves." target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>WorldWildlife.org(Asian Elephant)</a>
        <a href="https://www.helpingrhinos.org/black-rhino/?gclid=CjwKCAiA68ebBhB-EiwALVC-No6KdhEF4YuiM9qTmb7a3Sk0DWf1pAOrGM9_AMJwZnVWoQE72blL2hoCctUQAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>HelpingRhinos.org(Black Rhino)</a>
        <a href="https://www.worldwildlife.org/species/black-rhino" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>WorldWildlife.org(Black Rhino)</a>
        <a href="https://www.britannica.com/animal/polar-bear" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Britannica.com(Polar Bear)</a>
        <a href="https://onekindplanet.org/animal/bengal-tiger/" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>OneKindPlanet.org(Bengal Tiger)</a>
        <a href="https://wildearthguardians.org/wildlife-conservation/endangered-species-list/mammals/ocelot/#:~:text=Ocelot%20(Leopardus%20pardalis)%20%7C%20ESA%20status%3A%20endangered" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>WildEarthGuardians.org(Ocelot)</a>
        <a href="https://www.nature.org/en-us/get-involved/how-to-help/animals-we-protect/black-footed-ferret/" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Nature.org(Black-Footed Ferret)</a>
        <a href="https://www.savethekoala.com/about-koalas/the-koala-endangered-or-not/#:~:text='ENDANGERED'%20The%20NSW%20Koala%20population,Threatened%20Species%20Conservation%20Act%201995." target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>SaveTheKoala.com(Koala)</a>
        <a href="https://kids.earth.org/life-on-land/koalas-endangered/" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Kids.earth.org(Koala)</a>
        <a href="https://endangeredlist.org/animal/blue-throated-macaw/" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Endangeredlist.org(Blue-Throated Macaw)</a>
        <a href="https://www.fisheries.noaa.gov/species/hawksbill-turtle#:~:text=Hawksbill%20turtles%20often%20nest%20in,in%20Australia%20and%20Solomon%20Islands." target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>Fisheries.noaa(Hawksbill Seaturtle)</a>
        <a href="https://www.worldwildlife.org/species/giant-panda#:~:text=Pandas%20live%20mainly%20in%20temperate,subsist%20almost%20entirely%20on%20bamboo." target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>WorldWildlife.org(Giant Panda)</a>
        <a href="https://www.treehugger.com/red-pandas-endangered-5024939" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>TreeHugger.com(Red Panda)</a>
        <a href="https://www.pittsburghzoo.org/Animal-Red-Panda/?gclid=CjwKCAiAjs2bBhACEiwALTBWZdw895YX8eJsNZsUOqHQaOd3rrv6OsJF9q9q9deqfGq6ZOD3gNjvVRoCYGUQAvD_BwE" target={'_blank'} rel="noopener noreferrer" className='text-blue-600 hover:text-purple-600'>PittsburghZoo.org(Red Panda)</a>
        </div>
    </div>
    )
}

export default Sources
