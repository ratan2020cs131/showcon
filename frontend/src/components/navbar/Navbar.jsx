'use client';
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Button from '@/components/styled-components/Button';
import { logo } from '@/assets/images/Index';
import styles from './nav.module.css';
import LoginIcon from '@mui/icons-material/Login';
import Grid from '@mui/material/Grid';
import './hamburger.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <Grid container className={styles.navbar}>
            <Grid item xs={10} sm={6}>
                <Image
                    src={logo}
                    width={200}
                    height={50}
                ></Image>
            </Grid>
            <label xs={1} className="hamburger">
                <input type="checkbox" onClick={() => setOpen(!open)}></input>
            </label>
            <Grid item xs={12} sm={6} className="menu"
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-end' }
                }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="#" className={styles.navlink}>Movies</Link>
                    <Link href="#" className={styles.navlink}>Sports</Link>
                    <Button sx={{ gap: "5px" }}>
                        Sign in
                        <LoginIcon />
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Navbar;