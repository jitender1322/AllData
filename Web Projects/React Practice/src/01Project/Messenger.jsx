import { Avatar, Box, IconButton, TextField, Typography } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, query, where, orderBy, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseConfig';
import bg from './img/doddle.jpg';
import pg from './img/penguin.png';
import upg from './img/user.jpg';
import SendIcon from '@mui/icons-material/Send';

export default function Messenger() {
    const [selectedUserRecord, setSelectedUserRecord] = useState();
    const [users, setUsers] = useState([]);
    const [currentId, setCurrentId] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [chatId, setChatId] = useState('');
    const [input, setInput] = useState('');
    const [msgAll, setMsgAll] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchCurrentUserDetails(user);
            }
        });

        if (currentId) {
            fetchAlluser();
        }

        return () => unsubscribe();
    }, [currentId]);

    useEffect(() => {
        if (currentId && selectedId) {
            fetchMessages();
        }
    }, [currentId, selectedId]);

    const fetchCurrentUserDetails = async (user) => {
        if (user) {
            const userData = await getDoc(doc(firestore, 'User', user.uid));
            setCurrentId(user.uid);
        }
    };

    const fetchAlluser = async () => {
        const querySnapshot = await getDocs(collection(firestore, 'User'));
        const allUserData = [];
        querySnapshot.forEach((doc) => {
            if (doc.id !== currentId) {
                allUserData.push({ uid: doc.id, ...doc.data() });
            }
        });
        setUsers(allUserData);
    };

    const fetchSelectedUserDetails = async (userid) => {
        const record = await getDoc(doc(firestore, 'User', userid));
        setSelectedUserRecord(record.data());
        setSelectedId(userid);
        setChatId(userid);
    };

    const fetchMessages = async () => {

        if (!currentId || !selectedId) return;

        const q = query(
            collection(firestore, 'Chats'),
            where('senderId', 'in', [currentId, selectedId]),
            where('receiverId', 'in', [currentId, selectedId]),
            orderBy('timestamp', 'asc')
        );

        const querySnapshot = await getDocs(q);
        const fetchedMessages = [];

        querySnapshot.forEach((doc) => {
            fetchedMessages.push(doc.data());
        });

        setMsgAll(fetchedMessages);
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = {
            senderId: currentId,
            receiverId: selectedId,
            content: input.trim(),
            timestamp: serverTimestamp(),
        };

        await addDoc(collection(firestore, 'Chats'), newMessage);
        setInput('');
        fetchMessages();
    };

    return (
        <div className='scroll' style={{ backgroundColor: 'aliceblue', padding: '10px 0' }}>
            <Box sx={{ width: '65%', height: '95vh', margin: '0px auto', borderRadius: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', overflow: 'hidden', borderBottom: '11px solid #1976d2' }}>
                <h2 style={{ margin: '0', color: 'white', backgroundColor: '#1976d2', textAlign: 'center', padding: '10px', borderRadius: '20px 20px 0 0' }}>Messenger</h2>
                <Box sx={{ display: 'flex', height: '90%' }}>
                    <Box sx={{ width: '50%', height: '100%', overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                        {users ? users.map((e, i) => (
                            <Box key={i} onClick={() => fetchSelectedUserDetails(e.uid)} sx={{ display: 'flex', alignItems: 'center', padding: '10px', width: '80%', borderRadius: '12px', margin: '10px auto', gap: '30px', color: 'white', backgroundColor: '#1976d2', cursor: 'pointer' }}>
                                <Avatar src={e.picture}></Avatar>
                                <Box>
                                    <Typography variant='body1' sx={{ textTransform: 'capitalize' }}>{e.fname + " " + e.lname}</Typography>
                                    <Typography variant='body2'>Tap to chat</Typography>
                                </Box>
                            </Box>
                        )) : <p>Loading</p>}
                    </Box>
                    <Box sx={{ width: '50%', height: '100%', overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' } }}>
                        {
                            chatId ?
                                <Box sx={{ position: 'relative' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', padding: '10px', gap: '30px', color: 'white', backgroundColor: '#1976d2', cursor: 'pointer' }}>
                                        <Avatar src={selectedUserRecord?.picture ? selectedUserRecord?.picture : upg}></Avatar>
                                        <Typography variant='body1' sx={{ textTransform: 'capitalize' }}>{selectedUserRecord?.fname + " " + selectedUserRecord?.lname}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'column', height: '450px', backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', paddingBottom: '10px' }}>
                                        {msgAll.length > 0 ?
                                            msgAll.map((message, index) => (
                                                <div key={index} style={{ textAlign: message.senderId === currentId ? "right" : "left", margin: "7px 3px" }}>
                                                    <span style={{ padding: "5px 10px", borderRadius: message.senderId === currentId ? " 10px 10px 0 10px " : " 10px 10px 10px 0px ", backgroundColor: message.senderId === currentId ? "blue" : "purple", color: "white" }}>
                                                        {message.content}
                                                    </span>
                                                </div>
                                            ))
                                            :
                                            <p></p>}
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', bottom: '5%', zIndex: '22' }}>
                                        <TextField placeholder='Type a message' value={input} sx={{ backgroundColor: 'aliceblue', border: 'none', width: '462px', boxShadow: 'rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }} onChange={(e) => setInput(e.target.value)}></TextField>
                                        <IconButton sx={{ position: 'absolute', right: '20px' }} onClick={sendMessage}>
                                            <SendIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                                :
                                <img src={pg} style={{ width: '70%', margin: '70px' }} alt="" />
                        }
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
