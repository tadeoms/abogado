import { Box, Grid, Typography } from "@mui/material"
import { FaThumbsUp, FaBusinessTime, FaUsers, FaCommentDollar } from "react-icons/fa"


export default function FormInfo(){
    const info=[
        {icon:<FaBusinessTime size={'2rem'}/>, info:'Más de 20 años de experiencia en el fuero laboral.'},
        {icon:<FaThumbsUp size={'2rem'}/>, info: 'Más de 100.000  reclamos con resultados exitosos.'},
        {icon:<FaUsers size={'3rem'}/>,info:'Equipo de profesionales altamente calificado para abordar una amplia gama de casos.'},
        {icon:<FaCommentDollar size={'2rem'}/>, info:'Los honorarios se pagan únicamente cuando el trabajador gana su reclamo.'}
    ]
    return(
        <Grid item 
            xs={12}
            md={6.5}
            bgcolor={'#013567'} 
            color={'white'} 
            borderRadius={'1rem'} 
            p={'1rem'} 
            m={'1rem'} 
        >

            <Box 
                marginBottom={'2rem'}
                marginTop={'1rem'}
            >
                <Typography 
                    textAlign={'center'} 
                    p={'.5rem'} 
                    fontWeight={'bold'} 
                    variant="h5"
                    borderColor={'white'}
                    border={'solid 2px'}
                    borderRadius={'1rem'}
                    
                >
                    ¡Recibe asesoramiento jurídico gratuito y experto para tus derechos laborales! 
                </Typography>
            </Box>
            <Box>
                {info.map((i)=>{
                    return(
                        <Box 
                            display={'flex'} 
                            padding={'.2rem 1rem'} 
                            alignItems={'center'} 
                            bgcolor={'white'} 
                            borderRadius={'1rem'} 
                            margin={'1rem'} 
                            color={'#013567'}>
                            
                            {i.icon}
                            <Typography 
                                variant="h6" 
                                paddingLeft={'1rem'}
                            >
                                {i.info}
                            </Typography>
                        </Box>
                    )
                })}
            </Box>
        </Grid>
    )
}

