'use client';
import Navbar from '@/components/navbar/Navbar';
import Grid from '@mui/material/Grid';
import Note from '@/components/home/Note';
import Popular from '@/components/home/Popular';

export default function Home() {
  return (
    <>
      <Navbar />
      <Grid container spacing={{
        xs: 12,
        md: 2,
      }} 
      sx={{
        padding: '60px 20px',
        justifyContent: 'space-around',
      }}>
        <Grid item sm={5} xs={12} sx={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          alignItems: { sm: 'flex-start', xs: 'center' },
          justifyContent: 'center'
        }}
        >
          <Note />
        </Grid>
        <Grid item sm={6} xs={12} sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px'
        }}>
          <Popular />
        </Grid>
      </Grid >
    </>
  )
}
