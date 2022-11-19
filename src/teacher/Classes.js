import React, { useState } from 'react';
import { Alert, Box, Container, TextField, CircularProgress, Button, Fab, IconButton, Toolbar, Typography, Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useGetAllTeacherQuery } from '../services/profile';
import { getToken } from '../services/localstorage';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Outlet, useNavigate } from 'react-router-dom';

export const Classes = (props) => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className='h-full w-full relative'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Welcome Teacher,
                        </Typography>
                        <Button color="inherit" onClick={() => navigate('/teacher', { replace: true })}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className='py-4 px-5'>
                <h1 className='text-xl text-gray-500 mb-4'>Classes</h1>
                <div className='w-full shadow-sm bg-white'>
                    <List>
                        <ListItem alignItems="flex-start" onClick={() => navigate('/teacher/classes/12')}>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start"  onClick={() => navigate('/teacher/classes/13')}>
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start"  onClick={() => navigate('/teacher/classes/12')}>
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </div>
            </div>
            <Fab style={{ position: 'absolute', bottom: 10, right: 10 }} color="primary" aria-label="add" onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add Class"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        className='mb-3 w-full'
                        label="Enter Class Name"
                        variant="standard"
                    />
                    <div className='flex justify-between'>
                        <TextField
                            className='w-full'
                            label="Enter Start Time"
                            variant="standard"
                        />
                        <p>&nbsp; &nbsp; &nbsp; &nbsp;</p>
                        <TextField
                            className='w-full'
                            label="Enter End Time"
                            variant="standard"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color='error' onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' onClick={handleClose} autoFocus>
                        Add Class
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export const ClassHome = () => {
    return ( <Outlet/> )
}