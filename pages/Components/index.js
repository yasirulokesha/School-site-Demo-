import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import categories from '../Data/categories.json';
import { styled } from '@mui/material/styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Link from 'next/link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Stack from '@mui/material/Stack';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

//Theming

const theme = createTheme({
    palette:{
        primary:{
            main:'#00C2FF'
        },
    }
})


const Nav_desk = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display:"none",
    }
}));

const Nav_mob = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display:"block",
    },
    [theme.breakpoints.up('md')]: {
        display:"none",
    }
}));

export function Blue_bar(){
    return(
        <Box sx={{
            width: "100vw",
            height: 10,
            bgcolor: "#00C2FF"
        }}></Box>
    )
}

//NavBar

export function Navbar_Landing(){
    
    const [mob, setstate] = useState("hide"); 

    return(
        <div className='nav'>
            <Blue_bar></Blue_bar>
            <Nav_desk>
                <Grid item ml="auto" mr="auto" md={11} lg={11} height={100} display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Image src='/navbar_logo.png' width={50} height={50} />
                    </Grid>
                    <Grid item>
                        <Container sx={{display:"flex"}} >
                            {categories.map(get=>{
                                return(
                                    <ul className='drop' key={get.Topic}>
                                        <div className='nav_ct'>{get.Topic}</div>
                                        <li className='dropdown'>
                                            <Link href={`${(get.l1)}`}><a>{get.ca1}</a></Link>
                                            <Link href={`${(get.l2)}`}><a>{get.ca2}</a></Link>
                                            <Link href={`${(get.l3)}`}><a>{get.ca3}</a></Link>
                                            <Link href={`${(get.l4)}`}><a>{get.ca4}</a></Link>
                                            <Link href={`${(get.l5)}`}><a>{get.ca5}</a></Link>
                                            <Link href={`${(get.l6)}`}><a>{get.ca6}</a></Link>
                                            <Link href={`${(get.l7)}`}><a>{get.ca7}</a></Link>
                                            <Link href={`${(get.l8)}`}><a>{get.ca8}</a></Link>
                                            <Link href={`${(get.l9)}`}><a>{get.ca9}</a></Link>
                                        </li>
                                    </ul>
                                )
                            })}
                        </Container>
                    </Grid>
                    <Grid item>
                        Icons
                    </Grid>
                </Grid>
            </Nav_desk>
            <Nav_mob>
                <Grid item ml="auto" mr="auto" md={11} lg={11} height={100} sm={11} display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Image src='/navbar_logo.png' width={50} height={50} />
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Menu" onClick={()=>setstate()}>
                            <MenuRoundedIcon fontSize='large'/>
                        </IconButton>
                    </Grid>
                </Grid>
                    <Grid item className={mob} width="100vw" mt="-100px" height="100vh" sx={{backdropFilter:"blur(7px)", zIndex:500, position:"absolute"}}>
                        <Grid item height={0} mt="10px" marginLeft="85vw">
                            <IconButton aria-label="Menu" onClick={()=>setstate("hide")}>
                                <CloseRoundedIcon fontSize='large' />
                            </IconButton>
                        </Grid>
                        <Container sx={{display:"flex", flexDirection:"column", width:"100%", height:"100%", alignItems: "center", justifyContent:"center"}} >
                            {categories.map(get=>{
                                return(
                                    <ul className='drop' key={get.Topic}>
                                        <div className='nav_ct'>{get.Topic}</div>
                                        <li className='dropdown'>
                                            <Link href={`${(get.l1)}`}><a>{get.ca1}</a></Link>
                                            <Link href={`${(get.l2)}`}><a>{get.ca2}</a></Link>
                                            <Link href={`${(get.l3)}`}><a>{get.ca3}</a></Link>
                                            <Link href={`${(get.l4)}`}><a>{get.ca4}</a></Link>
                                            <Link href={`${(get.l5)}`}><a>{get.ca5}</a></Link>
                                            <Link href={`${(get.l6)}`}><a>{get.ca6}</a></Link>
                                            <Link href={`${(get.l7)}`}><a>{get.ca7}</a></Link>
                                            <Link href={`${(get.l8)}`}><a>{get.ca8}</a></Link>
                                            <Link href={`${(get.l9)}`}><a>{get.ca9}</a></Link>
                                        </li>
                                    </ul>
                                )
                            })}
                        </Container>
                    </Grid>
            </Nav_mob>
        </div>
    )
}

export function Navbar(){
    
    const [mob, setstate] = useState("hide"); 

    return(
        <div className='nav'>
            <Blue_bar></Blue_bar>
            <Nav_desk>
                <Grid container bgcolor="#00C2FF">
                    <Grid item color="#FFF" ml="auto" mr="auto" md={11} lg={11} height={100} display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Image src='/navbar_logo.png' width={50} height={50} />
                        </Grid>
                        <Grid item>
                            <Container sx={{display:"flex"}} >
                                {categories.map(get=>{
                                    return(
                                        <ul className='drop' key={get.Topic}>
                                            <div style={{color:"#FFF"}} className='nav_ct'>{get.Topic}</div>
                                            <li className='dropdown'>
                                                <Link href={`${(get.l1)}`}><a>{get.ca1}</a></Link>
                                                <Link href={`${(get.l2)}`}><a>{get.ca2}</a></Link>
                                                <Link href={`${(get.l3)}`}><a>{get.ca3}</a></Link>
                                                <Link href={`${(get.l4)}`}><a>{get.ca4}</a></Link>
                                                <Link href={`${(get.l5)}`}><a>{get.ca5}</a></Link>
                                                <Link href={`${(get.l6)}`}><a>{get.ca6}</a></Link>
                                                <Link href={`${(get.l7)}`}><a>{get.ca7}</a></Link>
                                                <Link href={`${(get.l8)}`}><a>{get.ca8}</a></Link>
                                                <Link href={`${(get.l9)}`}><a>{get.ca9}</a></Link>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </Container>
                        </Grid>
                        <Grid item>
                            Icons
                        </Grid>
                    </Grid>
                </Grid>
            </Nav_desk>
            <Nav_mob>
                <Grid item ml="auto" mr="auto" md={11} lg={11} height={100} sm={11} display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Image src='/navbar_logo.png' width={50} height={50} />
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Menu" onClick={()=>setstate()}>
                            <MenuRoundedIcon fontSize='large'/>
                        </IconButton>
                    </Grid>
                </Grid>
                    <Grid item className={mob} width="100vw" mt="-100px" height="100vh" sx={{backdropFilter:"blur(7px)", zIndex:500, position:"absolute"}}>
                        <Grid item height={0} mt="10px" marginLeft="85vw">
                            <IconButton aria-label="Menu" onClick={()=>setstate("hide")}>
                                <CloseRoundedIcon fontSize='large' />
                            </IconButton>
                        </Grid>
                        <Container sx={{display:"flex", flexDirection:"column", width:"100%", height:"100%", alignItems: "center", justifyContent:"center"}} >
                            {categories.map(get=>{
                                return(
                                    <ul className='drop' key={get.Topic}>
                                        <div className='nav_ct'>{get.Topic}</div>
                                        <li className='dropdown'>
                                            <Link href={`${(get.l1)}`}><a>{get.ca1}</a></Link>
                                            <Link href={`${(get.l2)}`}><a>{get.ca2}</a></Link>
                                            <Link href={`${(get.l3)}`}><a>{get.ca3}</a></Link>
                                            <Link href={`${(get.l4)}`}><a>{get.ca4}</a></Link>
                                            <Link href={`${(get.l5)}`}><a>{get.ca5}</a></Link>
                                            <Link href={`${(get.l6)}`}><a>{get.ca6}</a></Link>
                                            <Link href={`${(get.l7)}`}><a>{get.ca7}</a></Link>
                                            <Link href={`${(get.l8)}`}><a>{get.ca8}</a></Link>
                                            <Link href={`${(get.l9)}`}><a>{get.ca9}</a></Link>
                                        </li>
                                    </ul>
                                )
                            })}
                        </Container>
                    </Grid>
            </Nav_mob>
        </div>
    )
}

//Sections

export function Sections(){
    return(
        <Box bgcolor="#93E5FF" width="100vw" padding={5}>
            <Grid container maxWidth="lg" bgcolor="#93E5FF" mr="auto" ml="auto">
                    {categories.map(get=>{
                    return(
                        <Grid item>
                                <ul key={get.Topic}>
                                    <div className='sec_ct'>{get.Topic}</div>
                                    <li className='cont'>
                                        <Link href={`${(get.l1)}`}><a>{get.ca1}</a></Link>
                                        <Link href={`${(get.l2)}`}><a>{get.ca2}</a></Link>
                                        <Link href={`${(get.l3)}`}><a>{get.ca3}</a></Link>
                                        <Link href={`${(get.l4)}`}><a>{get.ca4}</a></Link>
                                        <Link href={`${(get.l5)}`}><a>{get.ca5}</a></Link>
                                        <Link href={`${(get.l6)}`}><a>{get.ca6}</a></Link>
                                        <Link href={`${(get.l7)}`}><a>{get.ca7}</a></Link>
                                        <Link href={`${(get.l8)}`}><a>{get.ca8}</a></Link>
                                        <Link href={`${(get.l9)}`}><a>{get.ca9}</a></Link>
                                    </li>
                                </ul>
                            </Grid>
                        )
                    })}                 
            </Grid>
        </Box>
    )
}

//Devtag

export function Devtag(){
    return(
        <>
            <Box sx={{
                width: "100%",
                height: 2,
                bgcolor: "#C4C4C4",
                marginBottom: "10px"
            }}></Box>
            <Typography textAlign="center" margin="auto" fontFamily="light" fontSize="10pt" mb="10px">
                Copyright 2021 | Richmond College(Galle) | Proudly build by college student
            </Typography>
        </>
    )
}

//Footer

export function Footer(){
    return(
        <Box>
            <Sections/>
            <Grid container maxWidth="lg" mt="40px" mr="auto" ml="auto">
                <Grid item md={6} height={180} mt="auto" mb="auto">
                    <Stack direction="row" spacing={2}>
                        <ThemeProvider theme={theme}>
                            <IconButton color="primary">
                                <YouTubeIcon fontSize='large'/>
                            </IconButton>
                            <IconButton color="primary">
                                <FacebookRoundedIcon fontSize='large'/>
                            </IconButton>
                            <IconButton color="primary">
                                <TwitterIcon fontSize='large'/>
                            </IconButton>
                            <IconButton color="primary">
                                <InstagramIcon fontSize='large'/>
                            </IconButton>
                        </ThemeProvider>
                    </Stack>
                    <Typography fontFamily="light" fontSize="13pt" marginLeft="10px">
                        sample@mail.com
                    </Typography>
                </Grid>
                <Grid item md={6} height={180} mt="auto" mb="auto">
                    
                    <Typography fontFamily="medium" fontSize="13pt" marginLeft="10px">
                        Subscribe
                    </Typography>
                    <Typography fontFamily="light" fontSize="10pt" marginLeft="10px">
                        Subscribe newslatter to instant updates.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Grid item md={8}>
                            <input className='mail' type="text" id='mail' placeholder='sample@mail.com'></input>
                        </Grid>
                        <Grid item md={1}>
                            <button type='submit' className='submit'> <ArrowForwardRoundedIcon/></button>
                        </Grid>
                    </Stack>
                </Grid>
                <Devtag/>
            </Grid>
            <Blue_bar/>
        </Box>
    )
}

//ContentBody

export function Body({children}){
    return(
        <Container maxWidth="lg" sx={{display:"flex", flexDirection: "row", justifyContent:"center"}}>
            {children}
        </Container>
    )
}

//SubNavigations



//PhotoLookup

export function PhotoLookup({children}){
    return (
        <div>
        <Box width="150px" height="200px" display="flex" justifyContent="center" sx={{overflow: "hidden" , borderRadius: "5px", margin: "10px", filter: "drop-shadow(0px 0px 5px #0005)"}}>
            <img
            src={children}
            height="200px"
            />
        </Box>
        </div>
    );
}