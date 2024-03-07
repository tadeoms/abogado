import { Box, Typography } from "@mui/material"
import { GoLaw } from "react-icons/go"

export default function Header() {
    return (
        <Box 
            display={'flex'} 
            p={'1rem'} 
            paddingBottom={'2rem'} 
            alignItems={'center'} 
            color={'white'} 
            bgcolor={'#013567'}
        >
            <Box>
                <GoLaw 
                    size={'3.5rem'}
                />
            </Box>
            <Box 
                paddingLeft={'1rem'}
            >
                <Typography 
                    variant="h6" 
                    m={'0px'} 
                    p={'0px'}
                >
                    Dr. Martinez
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    m={'0px'} 
                    p={'0px'} 
                >
                    Abogado Laboral
                </Typography>
            </Box>
        </Box>
    )
}