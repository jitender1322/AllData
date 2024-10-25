import React, { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { auth, firestore, storage } from '../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [pic, setPic] = useState('')

    const upload = async () => {
        if (pic === '') {
            alert('Please upload a picture');
        }
        else {
            const user = auth.currentUser;
            const storageRef = ref(storage, `Posts/${user.uid}/${Date.now()}`)
            await uploadBytes(storageRef, pic);
            const url = await getDownloadURL(storageRef);

            await setDoc(doc(firestore, 'Post', `${Date.now()}`), {
                'title': title,
                'description': des,
                'image': url,
                'uid': user.uid,
                'time': Date.now(),
                'likes': []
            })
            navigate('/userDashboard', { replace: true });
        }
    }
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AddAPhotoIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Add Post
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    label="Title"
                                    autoFocus
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Description"
                                    value={des}
                                    onChange={(e) => setDes(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Upload File"
                                    type="file"
                                    file=''
                                    InputLabelProps={{ shrink: true }}
                                    onChange={(e) => setPic(e.target.files[0])}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={upload}
                        >
                            Upload
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

