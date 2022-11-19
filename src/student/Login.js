import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const StudentLogin = (props) => {
    return (
        <div className='w-full h-full bg-slate-100 flex flex-col justify-center items-center'>
            <div className='w-96 shadow-md rounded-lg bg-white py-4 px-5'>
                <h2 className='text-gray-500 text-lg mb-2'>Hi! Student, Enter into class</h2>
                <TextField
                    className='mb-3 w-full'
                    label="Login ID"
                    helperText="Enter login id provided by organisation"
                    variant="standard"
                />
                <TextField
                    className='mb-3 w-full'
                    label="Password"
                    variant="standard"
                />
                <div className='w-full flex justify-end'>
                    <Button color='primary' variant="contained">
                        LOGIN
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin;