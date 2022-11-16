import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const AnimalsList = () => {
    const [animals , setAnimals] = useState([])
    useEffect( () => {
        axios.get('http://localhost:8000/api/animal')
        .then( res => {
            console.log( res )
            setAnimals( res.data.animals )
        })
        .catch( err => console.log( err ))
    }, [])
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div id='aList' className=' grid grid-cols-1 place-items-stretch p-5 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4'>
            { animals.map( (animal, idx) => {
                return(
                    // <div key={idx}>
                    //     <h2>{ animal.name }</h2>
                    //     <img src={animal.img} alt="animal image" height={'300px'}/>
                    //     <p>Population: { numberWithCommas(animal.population) }</p>
                    //     <p>{ animal.description }</p>
                    //     <p>{ animal.cause_of_endangerment }</p>
                    //     { animal.location.map( ( location, idx ) => {
                    //         return(
                    //             <ul key={idx}>
                    //                 <li>{location}</li>
                    //             </ul>
                    //         )
                    //     })}
                    // </div>
                    <Card sx={{ maxWidth: 500}} key={idx} className='m-3' >
                    <CardMedia
                        component="img"
                        height="140"
                        image={ animal.img }
                        alt={ animal.name }
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='font-bold underline'>
                            {animal.name}
                        </Typography>
                        <Typography>
                            <span className='mr-2 font-bold text-lg'>Remaining Population:</span>{ numberWithCommas(animal.population) }
                        </Typography>
                        <Typography variant="body2" color="text.dark " >
                            <p className='font-bold text-lg'>Description:</p>
                            <p className='text-base'>{ animal.description}</p>
                        </Typography>
                        <Typography variant="body2" color="text.dark">
                            <p className='font-bold text-lg'>Cause of Endangerment:</p>
                            <p className='text-base'>{ animal.cause_of_endangerment}</p>
                        </Typography>
                        <Typography>
                        <p className='font-bold'>Where to find { animal.name }'s:</p>
                        { animal.location.map( ( location, idx ) => {
                            return(
                                <ul key={idx}>
                                    <li>{location}</li>
                                </ul>
                            )
                            })}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small"><a href={animal.more_info} target={'_blank'} rel="noopener noreferrer">Learn More</a></Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default AnimalsList
