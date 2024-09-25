import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Pokemon = () => {
    var [user, setUser] = useState([])
    axios.get("https://dummyapi.online/api/pokemon")
        .then((response) => {
            console.log(response.data)
            setUser(response.data)
        })
  return (
      <div>
          
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 140 }}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH0Y44iyh-2OlG_dvPgd2WkH4Fcs8Mg4Bkg&s"
                  title="green iguana"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      Pikachu
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
              </CardActions>
          </Card>
    </div>
  )
}

export default Pokemon