import React from 'react';
import {Card,CardActionArea,CardActions,CardMedia,CardContent,Typography ,makeStyles,Button} from '@material-ui/core';




    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
      
      export default function UserInfo({firstname,lastname,email,avatar}) {
        const classes = useStyles();


return(
    <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="https://image.shutterstock.com/image-photo/lion-king-isolated-on-black-260nw-564253519.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {firstname +" "+ lastname}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {email}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button size="small" href="https://image.shutterstock.com/image-photo/lion-king-isolated-on-black-260nw-564253519.jpg" color="primary">
          Thumbnail pic
        </Button>
    </CardActions>
  </Card>
)
}