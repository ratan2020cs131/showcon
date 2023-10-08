import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';

export const CustomFavoriteIcon = styled(FavoriteIcon)(
    ({color}) => ({
        color: color ? color : "#F55139",
    })
);

export const CustomFavoriteBorderIcon = styled(FavoriteBorderIcon)(
    ({color}) => ({
        color: color ? color : "#F55139",
    })
);