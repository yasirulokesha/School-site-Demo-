import { Navbar_Landing, Footer, Body, PhotoLookup } from './Components';
import { CssBaseline, Stack , Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function Landing(){
    return(
        <>
            <Navbar_Landing/>
            <Cover/>
            <Body>
                <Stack direction="row">
                <PhotoLookup>
                {'./Sample1.jpg'}
                </PhotoLookup><PhotoLookup>
                {'./Sample1.jpg'}
                </PhotoLookup><PhotoLookup>
                {'./Sample1.jpg'}
                </PhotoLookup>
                </Stack>
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
                backgroundAttachment: 'fixed',
                maxWidth:"100vw",
                clipPath: "circle(380vh at 50% -280vh)",
                '::after':{
                    background: "linear-gradient(328deg, rgba(255,44,44,1) 0%, rgba(0,198,255,1) 70%)",
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    opacity: "20%",
                }
            }}
        >
            <div style={{zIndex:'20', position:"absolute",display:'flex',justifyContent:"center",alignItems:'center',    width: "-webkit-fill-available",height: "-webkit-fill-available", textAlign:'center', flexDirection:"column"}}>
                <Typography fontFamily="bold" lineHeight="0.9" color="#FFF" letterSpacing="0" fontSize="60pt" letterSpacing="-3px">Welcome to<br/>
                    Richmond College
                </Typography>
                <Typography fontFamily="old" lineHeight="0.9" color="#FFF" letterSpacing="0" fontSize="35pt" letterSpacing="-3px">
                    Nisi Dominus Fustra
                </Typography>
            </div>
            <CssBaseline/>
        </Box>
    )
}