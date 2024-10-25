import React, { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const defaultTheme = createTheme();
export default function UserLogin() {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userlog = await signInWithEmailAndPassword(auth, mail, password);
        navigate('/userDashboard', { replace: true });
    }
    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{
                        marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography variant="h5">
                            User Login
                        </Typography>
                        <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Email Address"
                                        onChange={(e) => setMail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}
