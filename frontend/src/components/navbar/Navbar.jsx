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

const Navbar = () => {
const[open, setOpen]=useState(false);
    return (
        <Grid container className={styles.navbar}>
            <Grid item>
                <Image
                    src={logo}
                    width={200}
                    height={50}
                ></Image>
            </Grid>
            <Grid item xs={3} className={styles.drawer}>
                <label className={styles.hamburger}>
                    <input type="checkbox" onClick={()=>setOpen(!open)}></input>
                </label>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }} className={open?styles.menuOpen:styles.menuClose}>
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