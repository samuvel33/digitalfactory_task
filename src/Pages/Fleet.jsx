
import { Box, Typography, Stack, Tabs, Tab, Button, TextField, IconButton, MenuItem, Select } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Innova from "../Images/F-Innova.png"
import Etios from "../Images/F-Etios.png"
import Indigo from "../Images/F-Indigo.png"
import LuxuryCoach from "../Images/Luxury coach.png"
import TempoTraveller from "../Images/Tempo traveller.png"
import Deluxe from "../Images/Deluxe.png"
import Bus1 from "../Images/bus1.png"
import Bus2 from "../Images/bus2.png"
import Bus3 from "../Images/bus 3.png"
import { FaCheck } from "react-icons/fa";


const Images = [
    {
        id: 1,
        img: Innova,
        rs: "12",
        name: "Innova",
        seater: 7,
        bags: 9
    },
    {
        id: 2,
        img: Etios,
        rs: "12",
        name: "Etios",
        seater: 7,
        bags: 9
    }, {
        id: 3,
        img: Indigo,
        rs: "8.50",
        name: "Indigo",
        seater: 4,
        bags: 6
    }, {
        id: 4,
        img: Deluxe,
        rs: "12",
        name: "Deluxe Mini-Bus",
        seater: 37,
        bags: 42
    }, {
        id: 5,
        img: LuxuryCoach,
        rs: "15",
        name: "Luxury coach",
        seater: 54,
        bags: 60
    }, {
        id: 6,
        img: TempoTraveller,
        rs: "20",
        name: "17S Tempo Traveller",
        seater: 17,
        bags: 20
    },
    {
        id: 4,
        img: Bus1,
        rs: "15",
        name: "Luxury Mini-Bus",
        seater: 37,
        bags: 42
    }, {
        id: 5,
        img: Bus2,
        rs: "15",
        name: "Deluxe Luxury coach",
        seater: 33,
        bags: 38
    }, {
        id: 6,
        img: TempoTraveller,
        rs: "20",
        name: "14S Tempo Traveller",
        seater: 14,
        bags: 20
    },

]


export default function Fleet() {


    return (
        <Grid py={10} container px={{ xl: 20, lg: 10, xs: 2 }} rowGap={3} columnGap={3} justifyContent="center">
            {Images.map((item, index) => (
                <Grid size={{ md: 3.5, xs: 12 }} rowGap={2}>
                    <Box key={index} sx={{ padding: "0 10px", display: "flex", justifyContent: "center" }}>
                        <Box width="100%" sx={{ border: "1px solid #E8E8E8" }}>
                            <Box component="img" src={item.img} sx={{ width: "160px" }}></Box>
                            <Stack px={3} pt={4} pb={3} rowGap={1} textAlign="start" sx={{ borderTop: "1px solid #E8E8E8", position: "relative" }}>
                                <Button sx={{ position: "absolute", top: "-20px", width: '96px', borderRadius: "0px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "39px", textTransform: "none" }}>
                                    From Rs. {item.rs}
                                </Button>
                                <Typography sx={{ fontSize: "17px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>
                                    {item.name}
                                </Typography>
                                <Box my={2} sx={{ borderTop: "2px solid #1E73BE", width: "45px" }}></Box>
                                <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px" }} /> {item.seater} Seater
                                </Typography>
                                <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px" }} /> {item.bags} Bags
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}