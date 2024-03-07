import { Box, Link, Typography } from "@mui/material"
import { GoLaw } from "react-icons/go"
import {  FaPhoneSquareAlt, FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa"

export default function Footer() {
    return (
        <Box 
            display={'flex'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            p={'1rem'}  
            color={'white'} 
            bgcolor={'#013567'}
        >
            <Box 
                display='flex' 
                alignItems={'center'}
            >
                <Box>
                    <GoLaw size={'2.5rem'}/>
                </Box>
                <Box paddingLeft={'1rem'}>
                    <Typography 
                        variant="body2" 
                        m={'0px'} 
                        p={'0px'}
                    >
                        Dr. Martinez
                    </Typography>
                    <Typography 
                        variant="caption" 
                        m={'0px'} 
                        p={'0px'} 
                    >
                        Abogado Laboral
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Link href="tel:1234567890" target="_blank" color="inherit" >
                    <FaPhoneSquareAlt size={'2rem'}/>
                </Link>
                <Link href="https://www.facebook.com/" target="_blank" color="inherit">
                    <FaFacebookSquare size={'2rem'} />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" color="inherit">
                    <FaInstagramSquare  size={'2rem'}/> 
                </Link>
                <Link href="https://www.whatsapp.com/" target="_blank" color="inherit">
                    <FaWhatsappSquare  size={'2rem'}/>
                </Link>
            </Box>
        </Box>
    )
}