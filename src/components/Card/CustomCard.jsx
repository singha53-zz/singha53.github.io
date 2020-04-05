import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.jsx";

function CustomCard({ ...props }) {
  const { image, title, description, buttons } = props
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        { buttons.map(button => {
          return (
            <Button href={button.link} size="small" color={ button.color }>
            { button.name }
          </Button>
          )
        }) }
        </CardActions>
      </Card>
    </div>
  )
}

export default CustomCard;