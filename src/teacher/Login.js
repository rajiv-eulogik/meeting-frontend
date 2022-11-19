import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';


export const TeacherLogin = (props) => {

    const navigate = useNavigate()

    return (
        <div className='w-full h-full bg-slate-100 flex flex-col justify-center items-center'>
            <div className='w-96 shadow-md rounded-lg bg-white py-4 px-5'>
                <h2 className='text-gray-500 text-lg mb-2'>Welcome Teacher,</h2>
                <TextField
                    className='mb-3 w-full'
                    label="Email address"
                    variant="standard"
                />
                <TextField
                    className='mb-3 w-full'
                    label="Password"
                    variant="standard"
                />
                <div className='w-full flex justify-end'>
                    <Button color='primary' variant="contained" onClick={() => navigate('classes', { replace: true })}>
                        LOGIN
                    </Button>
                </div>
            </div>
        </div>
    )
}

export const Teacher = (props) => {
    return (<Outlet />)
}



