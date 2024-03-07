import { Box, Typography } from "@mui/material"
import img from '../../assets/abogados.png'

export default function Nosotros(){
    return(
        <Box 
            display={'flex'}>
            <Box
                color={'white'} 
                bgcolor={'#013567'}
                padding={'1rem'}
            >
                <Typography 
                    variant="h4"  
                    margin="1rem"
                    color={'white'}
                    fontWeight={'bold'}
                >
                    Nosotros
                </Typography>
                <Typography
                    variant="h6"
                    padding={'1rem'}
                >
                    Somos un estudio jurídico dedicado exclusivamente a causas laborales con más de 20 años de experiencia, más de 100.000 causas con resultados exitosos. Nos especializamos en causas laborales por Despido Injustificado, Despido por Necesidades de la Empresa, Accidente de Trabajo, Vulneración de Derechos, Prácticas Antisindicales, Fuero Laboral, Subcontratación y Sindicatos.
                </Typography>
            </Box>
            <Box 
                sx={{
                    display: { xs: 'none', md: 'flex' },
                }}   
            >
                <img src={img} alt="" />
            </Box>

        </Box>

    )
}