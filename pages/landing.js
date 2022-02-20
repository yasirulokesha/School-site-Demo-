import {Navbar_Landing, Footer, Body} from './Components';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';


export default function Landing(){
    return(
        <>
        <Navbar_Landing/>
        <Cover/>
        <Body>
        <h1>Hello</h1>
        </Body>
        <Footer/>
        </>
    )
}

export function Cover(){
    return(
        <Box sx={{
            minHeight:"100vh",
            backgroundImage: "url(/landing.webp)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            maxWidth:"100vw",
            '::after':{
                background: "linear-gradient(328deg, rgba(255,44,44,1) 0%, rgba(0,198,255,1) 70%)",
                content: "''",
                zIndex: 5,
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: "10%",
            }
        }}>
            <CssBaseline/>
        </Box>
    )
}