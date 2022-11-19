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
import { useNavigate } from 'react-router-dom';
import AttachmentIcon from '@mui/icons-material/Attachment';

export const Students = (props) => {

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
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-xl text-gray-500'>Students</h1>
                    <Button variant='outlined' color='success'>
                        START CLASS
                    </Button>
                </div>
                <div className='w-full shadow-sm bg-white'>
                    <List>
                        <ListItem alignItems="flex-start">
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
                        <ListItem alignItems="flex-start">
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
                        <ListItem alignItems="flex-start">
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
                    {"Add Students"}
                </DialogTitle>
                <DialogContent>
                    <p className='text-sm text-gray-600'>Choose CSV</p>
                    <TextField
                        className='mb-3 w-full'
                        variant="standard"
                        type={'file'}
                        InputProps={{
                            endAdornment: <IconButton color="primary" aria-label="upload picture" component="label">
                                <AttachmentIcon />
                            </IconButton>
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='error' onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' onClick={handleClose} autoFocus>
                        Upload Students
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}