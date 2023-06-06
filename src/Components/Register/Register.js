import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import InputAdornment from "@mui/material/InputAdornment";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import {useForm} from "react-hook-form";
import "./Register.css";


export default function SignIn() {
    const [state, setState] = useState({
        email: "",
        password: "",
        passwordConfrim: "",
        hidePassword: true,
        error: null,
        errorOpen: false
    })

    const {
        register,
        handleSubmited,
        formState: {
            errors
        },
        reset,
        
        watch
    } = useForm({
        mode: "onBlur"
    })


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const showPassword = () => {
        setState(prev => {
            return{
                ...prev,
                hidePassword: !prev.hidePassword
            }
        })
    };


    return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                        <Avatar
                            sx={{ m: 1, bgcolor: 'secondary.main', width: 80, height: 80 }}>
                            <SentimentSatisfiedAltIcon bgcolor="blue" sx={{width: 60, height: 60}}/>
                        </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            type="email"
                            autoFocus

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                endAdornment:
                                state.hidePassword ?
                                    <Tooltip title="Show">
                                        <Button size="large" variant="text">
                                            <InputAdornment position="end">
                                                <VisibilityOffTwoToneIcon
                                                    onClick={showPassword}
                                                    type={state.hidePassword ? "password" : "input"}
                                                    fontSize="medium"
                                                />
                                            </InputAdornment>
                                        </Button>
                                    </Tooltip>
                                    :
                                    <Tooltip title="Hide">
                                        <Button size="large" variant="text">
                                            <InputAdornment position="end">
                                                <VisibilityTwoToneIcon
                                                    onClick={showPassword}
                                                    type={state.hidePassword ? "password" : "input"}
                                                    fontSize="medium"
                                                />
                                            </InputAdornment>
                                        </Button>
                                    </Tooltip>
                            }}
                        />
                        <Grid container>
                            <Grid item>
                                <Link href="react-form-auth/src/Components/Register/Register#" variant="body2" underline="hover">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid>
                                <Link href="react-form-auth/src/Components/Register/Register#" variant="body1" underline="hover">
                                    {"Start using"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

    );
}