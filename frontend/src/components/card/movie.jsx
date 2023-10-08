'use-client';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CustomFavoriteIcon, CustomFavoriteBorderIcon } from '@/components/styled-components/Icon';

const MovieCard = ({ data }) => {
    const [favorite, setFavorite] = useState(false);
    return (
        <Card sx={{ minWidth: { xs: '45%', md: 200 } }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={data.image}
                    alt="thumbnail"
                />
                <CardContent sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 10px',
                    backgroundColor: { xs: '#1E1F22', sm: '#E9E5D7' },
                    color: { sm: '#1E1F22', xs: '#E9E5D7' },
                    justifyContent: 'space-between'
                }}>
                    <Typography component="span">
                        {data.title}
                    </Typography>
                    <Typography component="span" onClick={() => setFavorite(!favorite)} sx={{
                        display:'flex',
                        alignItems: 'center'
                    }}>
                        {favorite ? <CustomFavoriteIcon /> : <CustomFavoriteBorderIcon />}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard;