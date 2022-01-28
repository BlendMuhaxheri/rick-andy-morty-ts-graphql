import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

interface Props {
    name: string,
    image: string,
    id: string

}

const CardList: React.FC<Props> = ({ name, image, id }) => {
    const history = useHistory();
    const handlePath = () => {
        history.push(`/characterdetail/${id}`)
    }
    return (
        <>
            <Card style={{ cursor: 'pointer', marginTop: '20px' }} sx={{ maxWidth: 345 }}>
                <CardMedia style={{ objectFit: 'cover' }}
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handlePath}>Learn More</Button>
                </CardActions>
            </Card>



        </>
    )
};

export default CardList;
