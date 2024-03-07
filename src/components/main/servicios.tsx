import { Box, Typography } from "@mui/material"

export default function Servicios(){
    const Servicios=[
        {title: 'Despidos Injustificados', img: '/public/despido.jpg'},
        {title: 'Accidentes Laborales', img: '/public/accidente.jpg' },
        {title: 'Maltrato Laboral', img: '/public/maltrato.jpg' },
        {title: 'Horas Extras y Feriados', img: '/public/hora.jpg'},
        {title: 'Trabajo en Negro', img: '/public/trabajo.jpg'}
    ]

    return(
        <Box>
            <Typography 
                variant="h4"  
                margin="2rem"
                color={'#013567'}
                fontWeight={'bold'}
            >
                Expertos en
            </Typography>
            <Box 
                sx={{
                    display:{ xs:'block', md:'flex'},
                    textAlign:'center', 
                    padding:'0rem 2rem 2rem 2rem',
                }}
            >
                {
                    Servicios.map((s)=>{
                        return(
                            <Box 
                                sx={{
                                    color: '#013567', 
                                    borderRadius: '2rem', 
                                    m: '1rem', 
                                    p: '1rem',
                                    bgcolor: 'white',
                                }} 
                            >
                                <Box>
                                    <img src={s.img} alt="" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                                </Box>
                                <Typography 
                                    variant="h5" 
                                    margin="1rem"
                                    color="white"
                                    bgcolor="#013567"
                                    borderRadius="1rem"
                                >    
                                    {s.title}
                                </Typography>
                            </Box>

                        )
                    })
                }
            </Box>
        </Box>
    )
}