import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)(
    ({ bdrcolor, bgcolor, tcolor, }) => ({
        "&:hover": {
            backgroundColor: bgcolor ? bgcolor : "#F55139",
            color: tcolor ? tcolor : "#E9E5D7",
        },
        color: tcolor ? tcolor : "#F55139",
        border: bdrcolor ? bdrcolor : "none",
        backgroundColor: bgcolor ? bgcolor : "#1E1F22",
        fontFamily:"MSB",
        padding:"5px 10px",
    })
);

export default CustomizedButton;

