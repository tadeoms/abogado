import { Box, Typography } from "@mui/material"

export default function Pasos() {
    const pasos=[
        {id:1, title:'Consulta gratuita.', info:'Ofrecemos una consulta sin costo con nuestros abogados especializados en derecho laboral. Obtén orientación precisa y clara sobre tus preocupaciones laborales, desde despidos hasta condiciones laborales.'},
        {id:2, title:'Asesoría legal.', info:'Coordinaremos una reunión personalizada gratuita donde recibirás asesoramiento adaptado a tu situación laboral específica. Te ayudaremos a entender tus derechos y opciones legales.'},
        {id:3, title:'Procedimiento legal.',info:'Una vez acordado el plan durante la consulta, procederemos legalmente en tu caso laboral, encargándonos de todos los aspectos legales, incluida la representación en negociaciones o procesos judiciales si es necesario.'}
    ]
    return (
        <Box  
            bgcolor={'#013567'} 
            color={'black'}
        >
            <Box 
                margin={'2rem'} 
                paddingTop={'2rem'}
            >
                <Typography 
                    variant="h4"  
                    color={'white'}
                    fontWeight={'bold'}
                >
                    Pasos a seguir
                </Typography>
            </Box>
            <Box 
                sx={{
                    display:{ xs:'blox', md:'flex'},
                    textAlign:'center', 
                    padding:'0rem 2rem 2rem 2rem',
                }}  
            >
                {pasos.map((p)=>{
                return(
                    <Box 
                        sx={{
                            bgcolor:'white', 
                            borderRadius:'1rem', 
                            m:'1rem', 
                            p:'1rem',
                            transition: 'transform 0.3s ease-in-out', 
                            '&:hover': {
                                transform: 'scale(1.1)',
                            }
                            
                        }}
                    >
                        <Typography 
                            variant="h5" 
                            bgcolor={'#013567'} 
                            borderRadius={'2rem'} 
                            color={'white'}
                        >
                            {p.id}.    
                            {p.title}
                        </Typography>
                        <Typography 
                            paddingTop={'1rem'}
                        >
                            {p.info}
                        </Typography>
                    </Box>
                )
                })}
            </Box>
        </Box>
    )
}