import React, { useState, useContext } from "react";
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Box, Typography, Stack, Tabs, Tab, Button, TextField, IconButton, MenuItem, Select } from "@mui/material"
import Grid from '@mui/material/Grid2';
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

import { useNavigate } from "react-router-dom";
import { MyContext } from "../Components/Context";

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
]


export const Home = () => {

    const navigate = useNavigate()
    const { navlink, setNavlink } = useContext(MyContext)


    const [TabValue, setTabValue] = useState(1)

    const isMobile = useMediaQuery('(max-width: 600px)'); // Detects mobile view
    const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)'); // Detects tablet view

    let slidePercentage;
    if (isMobile) {
        slidePercentage = 100; // Single item on mobile
    } else if (isTablet) {
        slidePercentage = 50; // Two items on tablet
    } else {
        slidePercentage = 33.33; // Three items on desktop
    }




    return (
        <>
            {/* <Header /> */}

            <Box py={8}>
                <Grid container px={{ xl: 20, lg: 10, xs: 2 }} justifyContent="center" columnGap={3} rowGap={7}>
                    <Grid size={{ md: 5.8, xs: 12 }}>
                        <Stack direction="row" columnGap={3} width="100%">
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", minWidth: "66px", height: "66px" }} border="3px solid #1E73BE" > <FaRegCalendarCheck fontSize="28px" fill="#1E73BE" /></Box>
                            <Stack direction="column">
                                <Typography sx={{
                                    fontSize: "20px", color: "#070707", fontFamily: `Montserrat,  sans-serif !important`
                                }}>Easy Online Booking</Typography>
                                <Box my={3} sx={{ borderTop: "2px solid #1E73BE", width: "55px" }}></Box>
                                <Typography sx={{ fontSize: "16px", color: "#070707", lineHeight: "160%", }}>Just fill up basic details and choose the dates on our reservation form in this website to book your travel needs.</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 5.8, xs: 12 }}>
                        <Stack direction="row" columnGap={3} width="100%">
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", minWidth: "66px", height: "66px" }} border="3px solid #1E73BE" > <FaIdCard fontSize="28px" fill="#1E73BE" /></Box>
                            <Stack direction="column">
                                <Typography sx={{ fontSize: "20px", color: "#070707", fontFamily: `Montserrat,  sans-serif !important` }}>Professional Drivers</Typography>
                                <Box my={3} sx={{ borderTop: "2px solid #1E73BE", width: "55px" }}></Box>
                                <Typography sx={{ fontSize: "16px", color: "#070707", lineHeight: "160%", }}>Our drivers are not only professional but also very supportive to ensure your journey is totally comfortable.</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 5.8, xs: 12 }}>
                        <Stack direction="row" columnGap={3} width="100%">
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", minWidth: "66px", height: "66px" }} border="3px solid #1E73BE" > <FaBus fontSize="28px" fill="#1E73BE" /></Box>
                            <Stack direction="column">
                                <Typography sx={{ fontSize: "20px", color: "#070707", fontFamily: `Montserrat,  sans-serif !important` }}>Wide Fleet of Vehicles</Typography>
                                <Box my={3} sx={{ borderTop: "2px solid #1E73BE", width: "55px" }}></Box>
                                <Typography sx={{ fontSize: "16px", color: "#070707", lineHeight: "160%", }}>All our fleet that are in perfect condition before the journey to provide you a safe and pleasant travel experience.</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 5.8, xs: 12 }}>
                        <Stack direction="row" columnGap={3} width="100%">
                            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", minWidth: "66px", height: "66px" }} border="3px solid #1E73BE" > <FaShieldAlt fontSize="28px" fill="#1E73BE" /></Box>
                            <Stack direction="column">
                                <Typography sx={{ fontSize: "20px", color: "#070707", fontFamily: `Montserrat,  sans-serif !important` }}>Free Travel Insurance</Typography>
                                <Box my={3} sx={{ borderTop: "2px solid #1E73BE", width: "55px" }}></Box>
                                <Typography sx={{ fontSize: "16px", color: "#070707", lineHeight: "160%", }}>Enjoy your travel in comfort with our free travel insurance that offers life coverage up to Rs. 2 Lacs. Conditions apply.</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{ display: 'flex', flexDirection: { xl: "row", xs: "column" }, width: "100%", height: { xl: "175px", xs: 'fit-content' }, backgroundColor: "#002C49" }}
            >
                <Box sx={{ display: "flex", flexDirection: { xl: "column", xs: "row" } }}>
                    <Button onClick={() => setTabValue(1)} sx={{ minWidth: { xs: 'auto', sm: "220px" }, width: "100%", borderRadius: "0px", height: "88px", backgroundColor: TabValue == 1 ? "#1E73BE" : "#002C49", color: "#FFFFFF", textTransform: "none", fontSize: "16px" }}>Distance</Button>
                    <Button onClick={() => setTabValue(2)} sx={{ minWidth: { xs: 'auto', sm: "220px" }, width: "100%", borderRadius: "0px", height: "88px", backgroundColor: TabValue == 2 ? "#1E73BE" : "#002C49", color: "#FFFFFF", textTransform: "none", fontSize: "16px" }} >Flat Rate</Button>
                </Box>

                {TabValue == 1 &&
                    <Stack my={{ xs: 4, xl: 0 }} rowGap={3} width="100%" direction={{ xl: "row", xs: "column" }} alignItems="center" justifyContent="space-evenly">
                        <Stack rowGap={1} width={{ xs: "90%", xl: 'auto' }}>
                            <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Address</Typography>
                            <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth placeholder="Enter a location"
                                InputProps={{ disableUnderline: true, endAdornment: <IconButton><LocationOnIcon sx={{ color: "#B4B4B4" }} /> </IconButton> }}
                            />
                        </Stack>
                        <Stack rowGap={1} width={{ xs: "90%", xl: 'auto' }}>
                            <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Drop Off Address</Typography>
                            <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth placeholder="Enter a location"
                                InputProps={{ disableUnderline: true, endAdornment: <IconButton><LocationOnIcon sx={{ color: "#B4B4B4" }} /> </IconButton> }}
                            />
                        </Stack>
                        <Stack rowGap={1} width={{ xs: "90%", xl: 'auto' }}>
                            <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Date</Typography>
                            <DatePicker format="DD/MM/YYYY" defaultValue={dayjs(new Date())} sx={{ backgroundColor: "#FFFFFF" }} />
                        </Stack>
                        <Stack rowGap={1} width={{ xs: "90%", xl: 'auto' }}>
                            <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Time</Typography>
                            <TimePicker sx={{ backgroundColor: "#FFFFFF" }} />
                        </Stack>
                        <Stack pt={{ xs: 4, xl: 3 }} width={{ xs: "90%", xl: 'auto' }}>
                            <Button endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none" }}>Reserve Now</Button>
                        </Stack>
                    </Stack>
                }
                {TabValue == 2 &&
                    <Stack my={{ xs: 4, xl: 0 }} pl={{ xl: 3, xs: 0 }} columnGap={3} rowGap={3} width="100%" direction={{ xl: "row", xs: "column" }} alignItems="center">
                        <Stack rowGap={1} width={{ xs: "90%", xl: 'auto' }}>
                            <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Drop Off Address</Typography>
                            {/* <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth placeholder="Enter a location"
                                InputProps={{ disableUnderline: true, endAdornment: <IconButton><LocationOnIcon sx={{ color: "#B4B4B4" }} /> </IconButton> }}
                            /> */}
                            <Select defaultValue={1} sx={{ backgroundColor: "#FFFFFF", width: "250px" }}>
                                <MenuItem value={1}>{`Chennai Airport > Pondicherry`}</MenuItem>
                                <MenuItem value={2}>{` Pondicherry > Chennai Airport`} </MenuItem>
                                <MenuItem value={3}>{` Pondicherry > Chennai Central `}</MenuItem>
                                <MenuItem value={4}>{`Pondicherry > Chennai Egmore`}</MenuItem>
                                <MenuItem value={5}>{`Pondicherry Beach > Mission Street`}</MenuItem>
                            </Select>
                        </Stack>
                        <Stack rowGap={1} width={{ xs: "90%", xl: 'auto' }}>
                            <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Date</Typography>
                            <DatePicker format="DD/MM/YYYY" defaultValue={dayjs(new Date())} sx={{ backgroundColor: "#FFFFFF" }} />
                        </Stack>
                        <Stack rowGap={1} width={{ xs: "90%", xl: 'auto' }}>
                            <Typography sx={{ fontSize: "16px", color: "#FFFFFF", }}>Pick Up Time</Typography>
                            <TimePicker sx={{ backgroundColor: "#FFFFFF" }} />
                        </Stack>
                        <Stack pt={{ xs: 4, xl: 3 }} width={{ xs: "90%", xl: 'auto' }}>
                            <Button endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none" }}>Reserve Now</Button>
                        </Stack>
                    </Stack>
                }
            </Box>

            {/* Our Fleet */}

            <Box py={10} textAlign="center">
                <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>Our Fleet  </Typography>
                <Stack direction="row" alignContent="center" justifyContent="center">
                    <Box my={2} sx={{ borderTop: "2px solid #1E73BE", width: "45px" }}></Box>
                </Stack>

                <Typography sx={{ fontSize: "18px", color: "#42424", lineHeight: "160%" }}>Choose from our wide range of luxury and budgeted fleet to meet your travel needs. </Typography>

                <Box width="100%" display="flex" justifyContent="center">
                    <Box py={10} width="70%">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={3500}
                            showStatus={false}
                            showArrows={false}
                            centerMode={!isMobile}
                            centerSlidePercentage={slidePercentage} // 100% on mobile (1 item), 33.33% on larger screens (3 items)

                        >
                            {Images.map((item, index) => (
                                <Box height="430px" key={index} sx={{ padding: "0 10px", display: "flex", justifyContent: "center" }}>
                                    <Box width="255px" >
                                        <Box component="img" src={item.img} sx={{ width: "160px", border: "1px solid #E8E8E8" }}></Box>
                                        <Stack px={3} pt={4} pb={3} rowGap={1} textAlign="start" sx={{ border: "1px solid #E8E8E8", position: "relative" }}>
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
                            ))}
                        </Carousel>
                    </Box>
                </Box >
            </Box >

            <Grid py={10} container px={{ xl: 20, lg: 10, xs: 2 }} rowGap={3} columnGap={3}>
                <Grid size={{ md: 5.6, xs: 12 }} rowGap={2}>
                    <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>About - BASS TRAVELS  </Typography>
                    {/* <Stack direction="row" alignContent="center" justifyContent="center"> */}
                    <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    {/* </Stack> */}
                    <Typography sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>BASS TRAVELS – a leading tours and travels agency in Pondicherry with over ten years of experience specializes in organizing tours and offering fleet & taxi services. We have gathered significant knowledge and exposure to design and offer you the best services and meet your requirements perfectly.</Typography>
                    <Typography mt={3} sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>We also accommodate custom trip requests to offer you the best we can at reasonable fares. Our professional drivers will guide and support you to ensure that your journey turns out to be a comfortable experience.</Typography>
                    <Button onClick={() => { navigate('/about'); setNavlink({ name: "About", link: "/about" }) }} endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none", mt: 3 }}>Learn More</Button>

                </Grid>
                <Grid size={{ md: 5.6, xs: 12 }}>
                    <Box component="img" src={safetyTips} sx={{ width: "100%", height: "100%" }}></Box>
                </Grid>
            </Grid>
            <Box sx={{ width: "100%", height: "360px", background: 'url(https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/CTAM.jpg)' }}>
                {/* <Box component="img" src={BusBgHome} sx={{ width: "100%", minHeight: "400px", height: "100%", objectFit: "cover" }}></Box> */}
                <Stack height="100%" direction="column" alignItems="center" justifyContent="center">
                    <Typography sx={{ fontSize: { md: "34px", xs: "24px" }, color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important`, textAlign: 'center' }}>Book Online Now to Enjoy Comfort Travel! </Typography>
                    <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    {/* </Stack> */}
                    <Typography sx={{ fontSize: "16px", color: "#FFFFFF", lineHeight: "160%", textAlign: 'center' }}>Call us: +91 94432 79915 | Email: bookings@basstravels.in</Typography>
                    <Button onClick={() => { navigate('/booking'); setNavlink({ name: "Booking", link: "/booking" }) }} endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none", mt: 3 }}>BOOK NOW</Button>

                </Stack>
            </Box>


            <Grid py={10} container px={{ xl: 20, lg: 10, xs: 2 }} rowGap={3} columnGap={6}>
                <Grid size={{ md: 5.6, xs: 12 }} rowGap={2} textAlign="center">
                    <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>Fleet gallery</Typography>
                    {/* <Stack direction="row" alignContent="center" justifyContent="center"> */}
                    <Stack width="100%" direction="row" alignItems="center" justifyContent="center">
                        <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    </Stack>
                    {/* <Stack sx={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row' }} rowGap={2} columnGap={2}> */}
                    <Box width="100%">
                        <Grid container size={{ xs: 12 }} rowGap={4} columnGap={2}>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Innova} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 7 Seater Innova</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Etios} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 4 Seater Etios</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Indigo} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 4 Seater indigoCS</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Bus1} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 54 Seater Non-A.C.</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Bus2} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 37 Seater A.C.</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Bus3} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 54 Seater Non-A.C.</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Deluxe} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 37 Seater Non-A.C.</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={TempoTraveller} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 33 Seater A.C.</Typography>
                            </Grid>
                            <Grid size={{ xs: 3.6 }} rowGap={2}>
                                <Box component="img" src={Bus2} sx={{ width: "100% !important", height: "100%" }}></Box>
                                <Typography sx={{ fontSize: "12px", color: "#CCCCCC", lineHeight: "160%", textAlign: 'center' }}> 37 Seater A.C.</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid size={{ md: 5.6, xs: 12 }} textAlign="center">
                    <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>Customer Opinions</Typography>
                    {/* <Stack direction="row" alignContent="center" justifyContent="center"> */}
                    <Stack width="100%" direction="row" alignItems="center" justifyContent="center">
                        <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    </Stack>
                    <Box width="100%">
                        <Box width="80%" height="60%" border="1px solid #E8E8E8" p={4} className="home-reviews">
                            <Carousel
                                style={{ height: '100% !important' }}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={3500}
                                showStatus={false}
                                showArrows={false}
                            // centerMode={!isMobile}
                            // centerSlidePercentage={slidePercentage} // 100% on mobile (1 item), 33.33% on larger screens (3 items)

                            >
                                <Box height="380px">
                                    <Stack direction="row" columnGap={4}>
                                        <ImQuotesLeft fill="#1E73BE" style={{ fontSize: '90px', paddingBottom: "56px" }} />
                                        <Typography sx={{ fontSize: "16px", color: "#424242", lineHeight: "160%", textAlign: 'center' }}>
                                            I found BASS TRAVELS very reliable,
                                            I could count on them to do our corporate tour as planned, despite the rough
                                            weather! They made us feel safe. Highly recommend them!
                                        </Typography>
                                        <ImQuotesRight fill="#1E73BE" style={{ fontSize: '90px', paddingTop: "56px" }} />

                                    </Stack>
                                    <Box component="img" src={'https://basstravels.in/digitalfactory_content/uploads/2017/07/TI1-antique.jpg'} sx={{ width: "80px !important", height: "80px", borderRadius: "100px" }}></Box>
                                    <Typography sx={{ fontSize: "16px", color: "#424242", lineHeight: "160%", textAlign: 'center' }}>Mike Jones - Luxury Coach
                                    </Typography>
                                </Box>
                                <Box height={{ sm: "380px", xs: "450px" }}>
                                    <Stack direction="row" columnGap={4}>
                                        <ImQuotesLeft fill="#1E73BE" style={{ fontSize: '90px', paddingBottom: "56px" }} />
                                        <Typography sx={{ fontSize: "16px", color: "#424242", lineHeight: "160%", textAlign: 'center' }}>
                                            BASS TRAVELS is definitely a professional travel agency from my personal experience. Flexible, polite and safety-
                                            conscious drivers are rare to find nowadays! My experience with them was comfortable and I recommend them!
                                        </Typography>
                                        <ImQuotesRight fill="#1E73BE" style={{ fontSize: '90px', paddingTop: "56px" }} />

                                    </Stack>
                                    <Box component="img" src={'https://basstravels.in/digitalfactory_content/uploads/2017/07/Kamal-Raj-orangepeel.jpg'} sx={{ width: "80px !important", height: "80px", borderRadius: "100px" }}></Box>
                                    <Typography sx={{ fontSize: "16px", color: "#424242", lineHeight: "160%", textAlign: 'center' }}>Kamal Raj - 17S Tempo Traveler
                                    </Typography>
                                </Box>
                            </Carousel>
                        </Box>
                    </Box>
                </Grid >
            </Grid >

            {/* <Footer /> */}

        </>
    )
}