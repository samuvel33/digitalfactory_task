import React, { useState } from "react";
import { Box, Typography, Stack, Tabs, Tab, Button, TextField, IconButton, MenuItem, Paper, Select, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from "@mui/material"
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const data = [
    {
        id: 1,
        img: TempoTraveller,
        name: "Tempo Traveler 17S",
        col1_rs: "Rs.2500",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Toll surcharges",
        col2_rs: "Rs.3500",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs.20",
        col3_time: " Kilometer",
        col3_charges: " + Toll surcharges",
    },
    {
        id: 2,
        img: TempoTraveller,
        name: "Tempo Traveler 14S",
        col1_rs: "Rs.2000",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Toll surcharges",
        col2_rs: "Rs.2700",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs.16",
        col3_time: " Kilometer",
        col3_charges: " + Toll surcharges",
    },
    {
        id: 3,
        img: Bus1,
        name: "Mini-Bus (Non-A.C.)",
        col1_rs: "Rs.2500",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Toll Charges",
        col2_rs: "Rs.4500",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs.29",
        col3_time: " Kilometer",
        col3_charges: " + Toll charges",
    },
    {
        id: 4,
        img: Bus2,
        name: "Mini-Bus (A.C)",
        col1_rs: "Rs.3000",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Toll surcharges",
        col2_rs: "Rs.6500",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs.35",
        col3_time: " Kilometer",
        col3_charges: " + Toll surcharges",
    },
    {
        id: 5,
        img: LuxuryCoach,
        name: "Luxury Bus (A.C.)",
        col1_rs: "Rs.3000",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Toll surcharges",
        col2_rs: "Rs.6500",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs.35",
        col3_time: " Kilometer",
        col3_charges: " + Toll surcharges",
    },
    {
        id: 6,
        img: Innova,
        name: "Innova",
        col1_rs: "Rs.1700",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Fuel and Toll surcharges",
        col2_rs: "Rs.1700",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs.12",
        col3_time: " Kilometer",
        col3_charges: " + Toll surcharges",
    },
    {
        id: 7,
        img: Indigo,
        name: "Indigo",
        col1_rs: "Rs.1200",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Fuel & Toll Charges",
        col2_rs: "Rs.1200",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs.8.50",
        col3_time: " Kilometer",
        col3_charges: " + Toll Charges",
    },
    {
        id: 8,
        img: Etios,
        name: "Etios",
        col1_rs: "Rs.1200",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Fuel & Toll Charges",
        col2_rs: "Rs.1200",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs. 9",
        col3_time: " Kilometer",
        col3_charges: " + Toll Charges",
    },
    {
        id: 9,
        img: Deluxe,
        name: "Deluxe Bus (Non-A.C.)",
        col1_rs: "Rs.3000",
        col1_time: "3 Hours Min. ",
        col1_charges: "+ Toll surcharges",
        col2_rs: "Rs.6000",
        col2_time: "Day. ",
        col2_charges: " + Fuel & Toll Charges",
        col3_rs: "Rs. 35",
        col3_time: " Kilometer",
        col3_charges: " + Toll surcharges",
    },

]

export default function Fares() {

    const [Val, setVal] = useState('')



    return (

        <Box py={10} px={{ xl: 20, lg: 10, xs: 2 }}>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell onMouseEnter={() => setVal(1)} onMouseLeave={() => setVal('')} sx={{ backgroundColor: Val == 1 ? "#1E73BE" : "#002C49", padding: "30px", position: "relative", borderRight: "1px solid #3B3B3B", borderTop: "1px solid #3B3B3B" }}>
                                <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important` }}>
                                    Hourly Rate
                                </Typography>
                                <Typography sx={{ fontSize: "16px", color: "#838383", lineHeight: "160%" }}>
                                    Business Trips, Events
                                </Typography>
                                <ArrowDropDownIcon sx={{ position: "absolute", bottom: "-34px", left: "20px", color: Val == 1 ? "#1E73BE" : "#002C49", fontSize: "55px" }} />
                            </TableCell>
                            <TableCell onMouseEnter={() => setVal(2)} onMouseLeave={() => setVal('')} sx={{ backgroundColor: Val == 2 ? "#1E73BE" : "#002C49", padding: "30px", position: "relative", borderRight: "1px solid #3B3B3B", borderTop: "1px solid #3B3B3B" }}>
                                <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important` }}>
                                    Daily Rate
                                </Typography>
                                <Typography sx={{ fontSize: "16px", color: "#838383", lineHeight: "160%" }}>
                                    Weddings & Long Tours
                                </Typography>
                                <ArrowDropDownIcon sx={{ position: "absolute", bottom: "-34px", left: "20px", color: Val == 2 ? "#1E73BE" : "#002C49", fontSize: "55px" }} />

                            </TableCell>
                            <TableCell onMouseEnter={() => setVal(3)} onMouseLeave={() => setVal('')} sx={{ backgroundColor: Val == 3 ? "#1E73BE" : "#002C49", padding: "30px", position: "relative", borderRight: "1px solid #3B3B3B", borderTop: "1px solid #3B3B3B" }}>
                                <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important` }}>
                                    Distance Rate
                                </Typography>
                                <Typography sx={{ fontSize: "16px", color: "#838383", lineHeight: "160%" }}>
                                    Fixed Rate Charges
                                </Typography>
                                <ArrowDropDownIcon sx={{ position: "absolute", bottom: "-34px", left: "20px", color: Val == 3 ? "#1E73BE" : "#002C49", fontSize: "55px" }} />

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {data?.map((item, index) => (
                            <TableRow
                                sx={{}}
                            >
                                <TableCell sx={{ padding: "30px", borderRight: "1px solid #e8e8e8" }}>
                                    <Stack direction="row" alignItems="center">
                                        <Box component="img" src={item?.img} sx={{ width: "80px" }}></Box>
                                        <Typography sx={{ fontSize: "16px", fontWeight: "600", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>
                                            {item?.name}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell onMouseEnter={() => setVal(1)} onMouseLeave={() => setVal('')} sx={{ padding: "30px", borderRight: "1px solid #e8e8e8" }}>
                                    <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>
                                        <span style={{ color: "#1E73BE" }}>{item?.col1_rs} </span> / {item?.col1_time}
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px", color: "#838383", fontFamily: `Montserrat, sans-serif !important` }}>
                                        {item?.col1_charges}
                                    </Typography>
                                </TableCell>
                                <TableCell onMouseEnter={() => setVal(2)} onMouseLeave={() => setVal('')} sx={{ padding: "30px", borderRight: "1px solid #e8e8e8" }}>
                                    <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>
                                        <span style={{ color: "#1E73BE" }}> {item?.col2_rs} </span> / {item?.col2_time}
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px", color: "#838383", fontFamily: `Montserrat, sans-serif !important` }}>
                                        {item?.col2_charges}
                                    </Typography>
                                </TableCell>
                                <TableCell onMouseEnter={() => setVal(3)} onMouseLeave={() => setVal('')} sx={{ padding: "30px", borderRight: "1px solid #e8e8e8" }}>
                                    <Typography sx={{ fontSize: "16px", fontWeight: "700", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>
                                        <span style={{ color: "#1E73BE" }}>{item?.col3_rs} </span> / {item?.col3_time}
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px", color: "#838383", fontFamily: `Montserrat, sans-serif !important` }}>
                                        {item?.col3_charges}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Stack mt={7} px={3} direction="row" height="130px" alignItems="center" justifyContent="space-between" backgroundColor="#002C49">
                <Stack direction="column" justifyContent="center" alignItems="center" sx={{ height: "100px", }}>
                    <Typography sx={{ fontSize: "20px", color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important` }}>Book your trip or vehicle online and enjoy the experience of comfort travel! </Typography>
                </Stack>
                <Button endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none" }}>BOOK NOW</Button>
            </Stack>
        </Box>
    )
}