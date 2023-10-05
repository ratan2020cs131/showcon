'use client';
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@/components/styled-components/Button';
import { logo } from '@/assets/images/Index';
import styles from './nav.module.css';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
    return (
        <Box className={styles.navbar}>
            <Image
                src={logo}
                width={200}
                height={50}
            ></Image>
            <Stack direction='row' spacing={6} sx={{display:'flex', alignItems:'center'}}>
                <Link href="#" className={styles.navlink}>Movies</Link>
                <Link href="#" className={styles.navlink}>Sports</Link>
                <Button sx={{gap:"5px"}}>
                    Sign in
                    <LoginIcon/>
                </Button>
            </Stack>
        </Box>
    )
}

export default Navbar;