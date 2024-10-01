
import { Box, Typography, Stack, Tabs, Tab, Button, TextField, IconButton, MenuItem, Select, Divider, StepLabel, Step, Stepper } from "@mui/material"
import Grid from '@mui/material/Grid2';


import React, { useState } from "react";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
// import { Box, Typography, Stack, Tabs, Tab, Button, TextField, IconButton, MenuItem, Select } from "@mui/material"
// import Grid from '@mui/material/Grid2';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Innova from "../Images/F-Innova.png"
import Etios from "../Images/F-Etios.png"
import Indigo from "../Images/F-Indigo.png"
import LuxuryCoach from "../Images/Luxury coach.png"
import TempoTraveller from "../Images/Tempo traveller.png"
import Deluxe from "../Images/Deluxe.png"
import Bus1 from "../Images/bus1.png"
import Bus2 from "../Images/bus2.png"
import Bus3 from "../Images/bus 3.png"
import safetyTips from "../Images/SafetyTips.jpg"
import BusBgHome from "../Images/BusBgHome.jpg"
import { useMediaQuery } from '@mui/material';
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const steps = [
    'Trip Details',
    'Select Vehicle',
    'Enter Payment Details',
    'Confirmation',

];

export default function Booking() {
    const [TabValue, setTabValue] = useState(1)

    return (
        <>
            <Box py={10} px={{ xl: 20, lg: 10, xs: 2 }}>
                <Stepper activeStep={1} alternativeLabel sx={{ '.MuiStepConnector-line': { margin: "10px" } }}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel icon={<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", width: "51px", height: "51px", backgroundColor: index == 0 ? "#1E73BE" : "#002C49", borderRadius: "100px", color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important` }}>{index + 1}.</Box>}>
                                <Typography sx={{ fontSize: "15px", color: "#424242", fontFamily: `Montserrat, sans-serif !important`,wordBreak:'break-word' }}>
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Grid py={10} container rowGap={3} columnGap={4} justifyContent="center">
                    <Grid size={{ md: 4, xs: 12 }} >
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Box sx={{ position: "relative", width: "100%", }}>
                                <Button onClick={() => setTabValue(1)} sx={{ minWidth: 'auto', width: "100%", borderRadius: "0px", height: "88px", backgroundColor: TabValue == 1 ? "#1E73BE" : "#002C49", color: "#FFFFFF", textTransform: "none", fontSize: "16px" }}>Distance</Button>
                                <ArrowDropDownIcon sx={{ position: "absolute", bottom: "-34px", left: "30%", color: TabValue == 1 ? "#1E73BE" : "#002C49", fontSize: "55px" }} />

                            </Box>
                            <Box sx={{ position: "relative", width: "100%", }}>
                                <Button onClick={() => setTabValue(2)} sx={{ minWidth: 'auto', width: "100%", borderRadius: "0px", height: "88px", backgroundColor: TabValue == 2 ? "#1E73BE" : "#002C49", color: "#FFFFFF", textTransform: "none", fontSize: "16px" }} >Flat Rate</Button>
                                <ArrowDropDownIcon sx={{ position: "absolute", bottom: "-34px", left: "30%", color: TabValue == 2 ? "#1E73BE" : "#002C49", fontSize: "55px" }} />

                            </Box>
                        </Box>

                        {TabValue == 1 &&
                            <Stack backgroundColor="#002C49" py={3} rowGap={2} width="100%" direction="column" alignItems="center" justifyContent="space-evenly">
                                <Stack rowGap={1} width="90%">
                                    {/* <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Address</Typography> */}
                                    <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth placeholder="Enter a location"
                                        InputProps={{ disableUnderline: true, endAdornment: <IconButton><LocationOnIcon sx={{ color: "#B4B4B4" }} /> </IconButton> }}
                                    />
                                </Stack>
                                <Stack rowGap={1} width="90%">
                                    {/* <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Drop Off Address</Typography> */}
                                    <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth placeholder="Enter a location"
                                        InputProps={{ disableUnderline: true, endAdornment: <IconButton><LocationOnIcon sx={{ color: "#B4B4B4" }} /> </IconButton> }}
                                    />
                                </Stack>
                                <Stack rowGap={1} width="90%">
                                    {/* <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Date</Typography> */}
                                    <DatePicker format="DD/MM/YYYY" defaultValue={dayjs(new Date())} sx={{ backgroundColor: "#FFFFFF" }} />
                                </Stack>
                                <Stack direction="row" alignItems="center" rowGap={1} columnGap={3} width="90%">
                                    <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Time</Typography>
                                    <TimePicker sx={{ width: "100%", backgroundColor: "#FFFFFF" }} />
                                </Stack>
                                <Stack pt={{ xs: 4, xl: 3 }} width="90%">
                                    <Button endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none" }}>Reserve Now</Button>
                                </Stack>
                            </Stack>
                        }
                        {TabValue == 2 &&
                            <Stack backgroundColor="#002C49" py={3} columnGap={3} rowGap={3} width="100%" direction="column" alignItems="center">
                                <Stack rowGap={1} width="90%">
                                    {/* <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Drop Off Address</Typography> */}
                                    {/* <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth placeholder="Enter a location"
                                InputProps={{ disableUnderline: true, endAdornment: <IconButton><LocationOnIcon sx={{ color: "#B4B4B4" }} /> </IconButton> }}
                            /> */}
                                    <Select defaultValue={1} sx={{ backgroundColor: "#FFFFFF", width: "100%" }}>
                                        <MenuItem value={1}>{`Chennai Airport > Pondicherry`}</MenuItem>
                                        <MenuItem value={2}>{` Pondicherry > Chennai Airport`} </MenuItem>
                                        <MenuItem value={3}>{` Pondicherry > Chennai Central `}</MenuItem>
                                        <MenuItem value={4}>{`Pondicherry > Chennai Egmore`}</MenuItem>
                                        <MenuItem value={5}>{`Pondicherry Beach > Mission Street`}</MenuItem>
                                    </Select>
                                </Stack>
                                <Stack rowGap={1} width="90%">
                                    {/* <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Date</Typography> */}
                                    <DatePicker format="DD/MM/YYYY" defaultValue={dayjs(new Date())} sx={{ backgroundColor: "#FFFFFF" }} />
                                </Stack>
                                <Stack direction="row" alignItems="center" rowGap={1} columnGap={3} width="90%">
                                    <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Time</Typography>
                                    <TimePicker sx={{ width: "100%", backgroundColor: "#FFFFFF" }} />
                                </Stack>
                                <Stack pt={{ xs: 4, xl: 3 }} width="90%">
                                    <Button endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none" }}>Reserve Now</Button>
                                </Stack>
                            </Stack>
                        }
                    </Grid>
                    <Grid size={{ md: 6, xs: 12 }} p={3} border="1px solid #E8E8E8">
                        <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>ONLINE BOOKING</Typography>
                        {/* <Stack direction="row" alignContent="center" justifyContent="center"> */}
                        <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                        {/* </Stack> */}
                        <Typography sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>BASS TRAVELS now offers “ONLINE BOOKING”
                            of their wide range of fleet from luxury and deluxe coaches, mini-buses, tempo-travelers and premium taxis to meet the
                            varied travel needs of their customers. Simple enter your pick-up and drop-off addresses, your preferred date and time of travel,
                            select a vehicle that fits your seating capacity from the list of available fleet
                            and fill-up some basic information requested in the form to reserve your choice of vehicle online.</Typography>

                        <Divider sx={{ pt: 4 }} />
                        <Stack direction="row" justifyContent="space-between">
                            <Stack mt={2} direction="column">
                                <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        A.C. & Non-A.C. Vehicles    </Typography>
                                </Stack>
                                <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Experienced and disciplined drivers  </Typography>
                                </Stack>
                                <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Fire, Emergency & First-aid Equipped  </Typography>
                                </Stack> <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        LED Television, Surround Speakers   </Typography>
                                </Stack> <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Comfortable Push-back/Recliner seats </Typography>
                                </Stack>
                            </Stack>
                            <Stack mt={2} direction="column">
                                <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Reasonable Fares</Typography>
                                </Stack>
                                <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Travel Insurance </Typography>
                                </Stack>
                                <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Flexible Travel scheduling</Typography>
                                </Stack> <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Mobile Chargers & First Aid-kit </Typography>
                                </Stack> <Stack py={1.5} direction="row" columnGap={1}>
                                    <FaCheck fill="#1E73BE" style={{ marginRight: "5px", marginTop: "5px" }} />
                                    <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                        Customizable tour packages </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}