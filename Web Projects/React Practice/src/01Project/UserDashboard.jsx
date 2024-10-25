import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { auth, firestore } from '../firebaseConfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import AdbIcon from '@mui/icons-material/Adb';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FetchPosts from './AdminOptions/FetchPosts'
import { Add } from '@mui/icons-material'
import MyPost from './MyPost'


export default function UserDashboard() {
    const [record, setRecord] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [myPost, setMyPost] = useState(false);
    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    useEffect(() => {
        const render = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchData(user);
            }
        });
    }, [])

    const fetchData = async (user) => {
        if (user) {
            const userData = await getDoc(doc(firestore, "User", user.uid));
            setRecord(userData.data());
        }
    }

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/userLogin', { replace: true })
    }
    return (
        <div>
            {record ?
                <AppBar position="static">
                    <Container maxWidth="xl" >
                        <Toolbar disableGutters >
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                {record ? record.fname + " " + record.lname : "loading"}
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Button variant='outlined' onClick={() => navigate('/addpost')} endIcon={<Add />} sx={{ color: 'white', borderColor: 'white', margin: '0 10px', }} >Add Post</Button>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: '0', margin: '0 5px' }}>
                                        <Avatar sx={{ color: '#1976d2', backgroundColor: 'white' }} alt={record.fname} src={record.picture} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Messenger'>
                                    <IconButton sx={{ p: '0' }} onClick={() => navigate('/messenger')} >
                                        <Avatar sx={{ color: '#1976d2', backgroundColor: 'white' }} > <i className="fa-brands fa-facebook-messenger"></i></Avatar>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu} sx={{ display: 'flex', flexDirection: 'column' }} >
                                        <Button >Profile</Button>
                                        {!myPost ? <Button onClick={() => setMyPost(true)} >My Posts</Button> : <Button onClick={() => setMyPost(false)} >All Posts</Button>}
                                        <Button onClick={handleLogout}>LogOut</Button>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar> : <Loader />}

            {myPost ? <MyPost /> : <FetchPosts />}
        </div>
    )
}
