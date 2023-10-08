import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@/app/page.module.css';

const Intro = () => {
    return (
        <Box sx={{ width: '100%', gap: '5px' }}>
            <Typography variant="h2" className={GlobalStyles.intro} sx={{ wordSpacing: '25px', textAlign: { xs: 'center', sm: 'left' } }}>
                Never miss
            </Typography>
            <Typography variant="h4" className={GlobalStyles.intro} sx={{ wordSpacing: '0', textAlign: { xs: 'center', sm: 'left' } }}>
                your favourite events
            </Typography>
        </Box>
    )
}

export default Intro;