import React, { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { auth, firestore, storage } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const defaultTheme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    const [fName, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userCredential = await createUserWithEmailAndPassword(auth, mail, password);
        const user = userCredential.user;
        if (picture) {
            const storageRef = ref(storage, `Images/${user.uid}`);
            await uploadBytes(storageRef, picture);
            const url = await getDownloadURL(storageRef);
            await setDoc(doc(firestore, "User", user.uid), {
                fname: fName,
                lname: lname,
                email: mail,
                picture: url
            })
        }
        else {
            await setDoc(doc(firestore, "User", user.uid), {
                fname: fName,
                lname: lname,
                email: mail,
            })
        }
        navigate('/userDashboard', { replace: true });
    }
    return (
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
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Last Name"
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </Grid>
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
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Upload File"
                                    type="file"
                                    InputLabelProps={{ shrink: true }}
                                    onChange={(e) => setPicture(e.target.files[0])}
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
                        <Grid container >
                            <Grid item sx={{ display: 'flex', gap: '90px' }}>
                                <Link onClick={() => navigate('/admin', { replace: true })} variant="body2" sx={{ cursor: "pointer" }}>
                                    Admin Login ?
                                </Link>
                                <Link onClick={() => navigate('/userLogin', { replace: true })} variant="body2" sx={{ cursor: "pointer" }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
