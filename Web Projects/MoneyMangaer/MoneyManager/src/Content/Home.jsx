import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { addBudget } from '../Features/Budget';
import { addExp } from '../Features/AddExpense';
export default function Home() {
    const [add, setAdd] = useState(false);
    const [amount, setAmount] = useState('');
    const [count, setCount] = useState('');
    const [des, setDes] = useState('');
    const dispatch = useDispatch();
    const handleAddBudget = () => {
        dispatch(addBudget(Number(amount)));
        setAdd(false)
        setAmount('')
    }
    const amountData = useSelector((state) => {
        return state.budgetkey.amount;
    });
    const handleAddExpense = () => {
        dispatch(addExp({ count, des }))
        setCount('')
        setDes('')
    }
    const expenseData = useSelector((state) => {
        return state.expensekey.expList;
    });
    return (<div>
        <Typography variant='h4' sx={{ textAlign: 'center' }} >Money Manager</Typography>
        <div style={{ width: '90%', paddingTop: '30px ', height: '530px', backgroundColor: '#731963', margin: '20px auto', borderRadius: '15px', boxShadow: ' rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px - 3px, rgba(0, 0, 0, 0.2) 0px - 3px 0px inset', overflowX: 'hidden' }} >
            <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between', padding: '10px 50px' }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '40%', backgroundColor: '#0B3C49', height: '470px', borderRadius: '15px', boxShadow: ' rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' }} >
                    <Box sx={{ width: '150px', height: '150px', border: '4px solid white', borderRadius: '50%', margin: '0px auto' }} >
                        <Typography variant='h3' sx={{ textAlign: 'center', padding: '50px 0' }} >{amountData}</Typography>
                    </Box>
                    <Button endIcon={<AddIcon />} onClick={() => setAdd(true)} variant='outlined' sx={{ color: 'white', borderColor: "white", margin: '20px 0', '&:hover': { borderColor: '#0B3C49' } }}>Add Budget</Button>
                    <Box sx={{ width: '60%', height: '200px', backgroundColor: '#0B3C49', position: 'absolute', top: '20%', left: add ? '20%' : '-500px', transition: '.4s all', borderRadius: '20px', textAlign: 'center', paddingTop: '50px', boxShadow: ' rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset' }} >
                        <Typography variant='body2'>Enter the Amount </Typography>
                        <TextField onChange={(e) => setAmount(e.target.value)} value={amount} size='small' sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            margin: '20px 0'
                        }} ></TextField>
                        <Button endIcon={<AddIcon />} onClick={handleAddBudget} variant='outlined' sx={{ color: 'white', borderColor: "white", '&:hover': { borderColor: '#731963' } }}>Add Budget</Button>
                    </Box>

                </Box>
                <Box sx={{ textAlign: 'center', width: '50%', backgroundColor: '#0B3C49', height: '470px', overflowY: 'scroll', '&::-webkit-scrollbar': { display: 'none' }, borderRadius: '15px', boxShadow: ' rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset' }}>
                    <Typography variant='h5' sx={{ padding: '50px 0 20px', textTransform: 'capitalize' }} >Add your Expense</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        <TextField value={count} onChange={(e) => setCount(Number(e.target.value))} size='small' sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white', }, '&:hover fieldset': { borderColor: 'white', }, }, '& .MuiInputBase-input': { color: 'white', }, '& .MuiInputLabel-root': { color: 'white', }, margin: '20px 10px', width: '90px' }} placeholder='Amount' ></TextField>
                        <TextField value={des} onChange={(e) => setDes(e.target.value)} size='small' sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white', }, '&:hover fieldset': { borderColor: 'white', }, }, '& .MuiInputBase-input': { color: 'white', }, '& .MuiInputLabel-root': { color: 'white', }, margin: '20px 0', width: '200px' }} placeholder='Description'></TextField>
                    </Box>
                    <Button endIcon={<AddIcon />} onClick={handleAddExpense} variant='outlined' sx={{ color: 'white', borderColor: "white", '&:hover': { borderColor: '#731963' } }}>Add</Button>
                    <Box>
                        {expenseData.map((e, i) => {
                            return <Box key={i} sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#731963', boxShadow: ' rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset', padding: '10px', margin: '15px 55px', borderRadius: '12px' }}>
                                <Typography variant='h6'>Rs. {e.count} :</Typography>
                                <Typography sx={{ textTransform: 'capitalize' }} variant='h6'> {e.des} </Typography>
                            </Box>
                        })}
                    </Box>
                </Box>
            </Box>
        </div></div>
    )
}
