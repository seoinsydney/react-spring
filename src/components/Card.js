import React from 'react'
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './index.scss';

function CardMenu() {

    const CardData =[
        {
            title: "React Spring Animation",
            description: "Basic sues of React Spring Animation",
            image: "",
            alt: "image",
            link: "./SpringAnimation"
        },
        {
            title: "Parallax Animation",
            description: "Basic sues of React Spring Animation",
            image: "",
            alt: "image",
            link: "./ParallaxAnimation"
        }
    ]

  return (
    <div className="card-menu">
        <h1>React Spring Animation</h1>
        <Grid container spacing={2}>
            {
                CardData.map(cardItem =>
                <Grid item xs={6} key={cardItem.title}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component={cardItem.image}
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt={cardItem.alt}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {cardItem.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cardItem.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to={cardItem.link}>See More</Link></Button>
                        </CardActions>
                    </Card>
                </Grid>
                )
            }
        </Grid>
    </div>
  )
}

export default CardMenu
