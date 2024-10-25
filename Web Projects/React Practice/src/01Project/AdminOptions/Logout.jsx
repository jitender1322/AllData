import React from 'react'
import Person from '../img/person.png'
import { Box, Button, Typography } from '@mui/material'
import { auth } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate();
    const Logout = async () => {
        await signOut(auth);
        navigate('/', { replace: true })
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', width: '60%', margin: '80px 0 0 100px', padding: '30px 0', borderRadius: '18px' }}>
            <img src={Person} style={{ width: '22%' }} />
            <Box >
                <Typography variant='h6'>Do You Want To Logout ?</Typography>
                <Button sx={{ margin: '10px 0' }} onClick={Logout} variant='contained'>Log Out</Button>
            </Box>
        </div>
    )
}
