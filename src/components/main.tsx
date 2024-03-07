import { Box } from "@mui/material"
import Map from "./main/map"
import Pasos from "./main/pasos"
import Form from "./main/form"
import Servicios from "./main/servicios"
import Nosotros from "./main/nosotros"

export default function Main() {
    return (
        <Box>
            <Form />
            <Nosotros />
            <Servicios />
            <Pasos />
            <Map />

        </Box>
    )
}