import { Grid, TextField, Box, Typography, Button } from "@mui/material";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function FormContact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_uqw62vj', '1', form.current, {
                    publicKey: 'lp5iWtlO6TIFIa2M5',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setFormSubmitted(true);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    const resetForm = () => {
        setFormSubmitted(false);
    };

    return (
        <Grid item xs={12} md={4.9} bgcolor={'white'} borderRadius={'1rem'} alignItems={'center'} textAlign={'center'} boxShadow={3} margin={'1rem'} padding={'1rem'}>
            {formSubmitted ? (
                <>
                    <Typography variant="h6">Formulario enviado correctamente</Typography>
                    <Typography variant="body1">Gracias por contactarse con nosotros, le responderemos a la brevedad</Typography>
                    <Button onClick={resetForm} variant="contained" color="primary" style={{ marginTop: '1rem' }}>Enviar otro formulario</Button>
                </>
            ) : (
                <>
                    <Typography variant="h5" margin={'1rem 1rem 0rem 1rem'} bgcolor={'#013567'} color={'white'} padding={'.5rem'} borderRadius={'1rem'}>Ingrese su consulta</Typography>
                    <Box component="form" ref={form} onSubmit={sendEmail} display={'flex'} flexDirection={'column'} margin={'0rem 1rem 1rem 1rem'}>
                        <TextField name="name" label="Nombre completo" type="text" required margin="normal" />
                        <TextField name="mail" label="Email" type="email" required margin="normal" />
                        <TextField name="phone" label="Telefono" type="number" required margin="normal" />
                        <TextField name="consultation" label="Ingrese su consulta" margin="normal" type="text" required />
                        <input type="submit" value="Enviar" style={{ marginTop: '1rem', padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: '#013567', color: 'white', cursor: 'pointer' }} />
                    </Box>
                </>
            )}
        </Grid>
    )
}

