import Intro from './Intro';
import Button from '@/components/styled-components/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Note = ()=>{
    return(
        <>
        <Intro />
          <Button bgcolor='#F55139' tcolor='#1E1F22' bradius='8px'
            sx={{
              width: {
                xs: '90%',
                sm: 'auto'
              },
              padding: '13px',
              gap: '5px'
            }}>
            Browse
            <ArrowRightAltIcon />
          </Button>
        </>
    )
}

export default Note;