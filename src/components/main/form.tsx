import { Grid } from "@mui/material"
import FormInfo from "./form/formInfo"
import { FormContact } from "./form/formContact"


export default function Form(){
    return(
        <Grid container 
            spacing={2}  
            bgcolor={'white'} 
            p={'1rem'}

        >
            <FormInfo/>
            <FormContact/>

        </Grid>
    )
}