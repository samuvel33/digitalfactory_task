import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Stack, Button, Backdrop, TextField } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Logo from "../Images/Logo.png";
import { FiCheckSquare } from "react-icons/fi";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { FaSearch } from "react-icons/fa";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CloseIcon from '@mui/icons-material/Close';


export default function Header() {

    const navigate = useNavigate()
    const [Menu, setMenu] = useState(false)
    const [search, setSearch] = useState(false)
    const { navlink, setNavlink } = useContext(MyContext)


    useEffect(() => {
        navigate('/')
    }, [])


    return (

        <>
            <Box>
                <Grid zIndex={1} sx={{ display: { md: 'block', xs: 'none' } }} px={{ xl: 20, lg: 10, sm: 2 }} container>
                    <Grid my={4} size={{ lg: 12 }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
                            <Box component="img" src={Logo} ></Box>
                            <Stack direction="row" alignItems="center" gap={3}>
                                <Box pl={3} sx={{ borderLeft: "2px solid #EFEFEF" }}>
                                    <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#424242", }}>  <FiCheckSquare stroke="#1E7ECA" style={{ marginRight: '5px' }} />Corporate/Family Tours</Typography>
                                    <Typography sx={{ fontSize: "15px", color: "#424242", }}>Comfort Travel Assured</Typography>
                                </Box>
                                <Box pl={3} sx={{ borderLeft: "2px solid #EFEFEF" }}>
                                    <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#424242", }}>  <FiCheckSquare stroke="#1E7ECA" style={{ marginRight: '5px' }} />Temple & Wedding Tours</Typography>
                                    <Typography sx={{ fontSize: "15px", color: "#424242", }}>Organized Easily</Typography>
                                </Box>
                                <Box pl={3} sx={{ borderLeft: "2px solid #EFEFEF" }}>
                                    <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#424242", }}>  <FiCheckSquare stroke="#1E7ECA" style={{ marginRight: '5px' }} />Educational Tours</Typography>
                                    <Typography sx={{ fontSize: "15px", color: "#424242", }}>Arranged Instantly</Typography>
                                </Box>
                            </Stack>
                            <Box>
                                <Button onClick={() => { navigate('/booking'); setNavlink({ name: "Booking", link: "/booking" }) }} endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px" }}> Book Now</Button>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid sx={{ backgroundColor: "#002C49", width: "100%", height: "65px" }} size={{ lg: 12 }}>
                        <Stack sx={{ position: "sticky", backgroundColor: "#002C49", zIndex: 1 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack direction="row">
                                <Typography onClick={() => { navigate('/'); setNavlink({ name: "Home", link: "/" }) }} sx={{ backgroundColor: navlink.name == "Home" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "20px 20px", width: "fit-Content", fontWeight: 500, color: "#FFFFFF", }}> Home</Typography>
                                <Typography onClick={() => { navigate('/about'); setNavlink({ name: "About", link: "/about" }) }} sx={{ backgroundColor: navlink.name == "About" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "20px 20px", width: "fit-Content", fontWeight: 500, color: "#FFFFFF", }} > About</Typography>
                                <Typography onClick={() => { navigate('/fleet'); setNavlink({ name: "Fleet", link: "/fleet" }) }} sx={{ backgroundColor: navlink.name == "Fleet" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "20px 20px", width: "fit-Content", fontWeight: 500, color: "#FFFFFF", }} > Fleet</Typography>
                                <Typography onClick={() => { navigate('/fares'); setNavlink({ name: "Fares", link: "/fares" }) }} sx={{ backgroundColor: navlink.name == "Fares" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "20px 20px", width: "fit-Content", fontWeight: 500, color: "#FFFFFF", }} > Fares</Typography>
                                <Typography onClick={() => { navigate('/booking'); setNavlink({ name: "Booking", link: "/booking" }) }} sx={{ backgroundColor: navlink.name == "Booking" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "20px 20px", width: "fit-Content", fontWeight: 500, color: "#FFFFFF", }} > Booking</Typography>
                                <Typography onClick={() => { navigate('/contact'); setNavlink({ name: "Contact", link: "/contact" }) }} sx={{ backgroundColor: navlink.name == "Contact" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "20px 20px", width: "fit-Content", fontWeight: 500, color: "#FFFFFF", }} > Contact</Typography>
                            </Stack>
                            {/* <FaSearch /> */}
                            <FaSearch fill="#FFFFFF" onClick={() => setSearch(true)} style={{ marginRight: '25px' }
                            } />
                        </Stack>
                    </Grid>
                </Grid>
                <Grid sx={{ display: { md: 'none', xs: 'block' } }} px={2} container>
                    <Grid my={2} size={{ xs: 12 }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2}>
                            <Box component="img" src={Logo} sx={{ width: { xs: '200px !important', sm: 'auto !important' } }}></Box>
                            <Stack direction="row" alignItems="center" gap={3}>
                                <FaSearch onClick={() => setSearch(true)} />
                                <DehazeIcon onClick={() => setMenu(!Menu)} />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid sx={{
                        backgroundColor: "#002C49",
                        width: "100%",
                        height: Menu ? "300px" : 0,
                        overflow: Menu ? "visible" : "hidden",
                        display: "block",
                        transition: "height 0.5s ease",
                    }} size={{ lg: 12 }}>
                        <Stack direction="column" width="100%">
                            <Typography onClick={() => { setMenu(false); navigate('/'); setNavlink({ name: "Home", link: "/" }) }} sx={{ backgroundColor: navlink.name == "Home" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "11px 20px", fontWeight: 500, color: "#FFFFFF", }}> Home</Typography>
                            <Typography onClick={() => { setMenu(false); navigate('/about'); setNavlink({ name: "About", link: "/about" }) }} sx={{ backgroundColor: navlink.name == "About" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "11px 20px", fontWeight: 500, color: "#FFFFFF", }}> About</Typography>
                            <Typography onClick={() => { setMenu(false); navigate('/fleet'); setNavlink({ name: "Fleet", link: "/fleet" }) }} sx={{ backgroundColor: navlink.name == "Fleet" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "11px 20px", fontWeight: 500, color: "#FFFFFF", }}> Fleet</Typography>
                            <Typography onClick={() => { setMenu(false); navigate('/fares'); setNavlink({ name: "Fares", link: "/fares" }) }} sx={{ backgroundColor: navlink.name == "Fares" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "11px 20px", fontWeight: 500, color: "#FFFFFF", }}> Fares</Typography>
                            <Typography onClick={() => { setMenu(false); navigate('/booking'); setNavlink({ name: "Booking", link: "/booking" }) }} sx={{ backgroundColor: navlink.name == "Booking" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "11px 20px", fontWeight: 500, color: "#FFFFFF", }}> Booking</Typography>
                            <Typography onClick={() => { setMenu(false); navigate('/contact'); setNavlink({ name: "Contact", link: "/contact" }) }} sx={{ backgroundColor: navlink.name == "Contact" ? "#1E73BE" : "#002C49", ':hover': { backgroundColor: "#1E73BE" }, fontSize: "17px", padding: "11px 20px", fontWeight: 500, color: "#FFFFFF", }}> Contact</Typography>
                        </Stack>
                    </Grid>

                </Grid>

                {
                    (navlink?.name != "Home") && <Box width="100%" sx={{ position: "relative", height: '190px' }}>
                        <Box sx={{ position: "absolute", zIndex: "", top: { md: "-30px", xs: '0px' }, width: "100%", height: "190px", background: 'url(https://basstravels.in/digitalfactory_content/uploads/2017/07/WH.jpg)', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                            <Stack height="100%" direction="column" alignItems="center" justifyContent="center">
                                <Typography sx={{ fontSize: "28px", color: '#424242', fontFamily: `Montserrat, sans-serif !important`, textAlign: 'center' }}>About </Typography>
                                <Box my={2} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                                <Stack direction="row" alignItems="center" justifyContent="center" columnGap={1}>
                                    <Typography onClick={() => { navigate('/'); setNavlink({ name: "Home", link: "/" }) }} sx={{ fontSize: "16px", color: "#424242", lineHeight: "160%", textAlign: 'center' }}> Home</Typography>
                                    <ChevronRightIcon fontSize="20px" sx={{ color: "#424242" }} />
                                    <Typography onClick={() => { navigate(navlink?.link) }} sx={{ fontSize: "16px", color: "#424242", lineHeight: "160%", textAlign: 'center' }}>{navlink?.name}</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                }

                {
                    (navlink?.name == "Home") &&

                    <Box width="100%" sx={{ position: "relative", height: { lg: "600px", xs: "500px", } }}>
                        <Box width="100%" sx={{ position: "absolute", zIndex: "", top: { md: "-30px", xs: '0px' } }}>
                            <Carousel
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={3500}
                                showStatus={false}
                                showArrows={false}

                            >

                                <Box width="100%" height={{ lg: "600px", xs: "500px", }}>
                                    <Box sx={{ width: "100%", height: "100%", background: 'url(https://basstravels.in/digitalfactory_content/uploads/2017/07/B1.jpg)', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                                        <Stack height="100%" direction="column" alignItems="center" justifyContent="center">
                                            <Stack height="100%" direction="column" alignItems="center" justifyContent="center">
                                                <Typography sx={{ fontSize: { lg: "64px", md: "40px", xs: "24px" }, color: "#00FFFA", fontFamily: `Montserrat, sans-serif !important`, textAlign: 'center' }}>Re-define your Travel Experience </Typography>
                                                <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                                                <Typography sx={{ fontSize: "17px", color: "#00FFFA", lineHeight: "160%", textAlign: 'center' }}>Choose from our fleet of A.C. Buses, Vans & Cars </Typography>
                                                <Typography sx={{ fontSize: "17px", color: "#00FFFA", lineHeight: "160%", textAlign: 'center' }}>For Family Trips, Airport Transit, Wedding Functions, Corporate Holidays, Sightseeing, Temple & Educational Tours! </Typography>
                                                <Button onClick={() => { navigate('/fleet'); setNavlink({ name: "Fleet", link: "/fleet" }) }} endIcon={<NavigateNextIcon />} sx={{ width: '160px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none", mt: 3 }}>Explore our Fleet</Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Box>

                                <Box width="100%" height={{ lg: "600px", xs: "500px", }}>
                                    <Box sx={{ width: "100%", height: "100%", background: 'url(https://basstravels.in/digitalfactory_content/uploads/2017/07/B2.jpg)', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                                        <Stack height="100%" direction="column" alignItems="center" justifyContent="center">
                                            <Stack height="100%" direction="column" alignItems="center" justifyContent="center">
                                                <Typography sx={{ fontSize: { lg: "64px", md: "40px", xs: "24px" }, color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important`, textAlign: 'center' }}>Welcome to BASS TRAVELS! </Typography>
                                                <Typography mt={3} sx={{ fontSize: "17px", color: "#FFFFFF", lineHeight: "160%", textAlign: 'center' }}>We are an Exclusive Tours & Travels Agency.</Typography>
                                                <Typography sx={{ fontSize: "17px", color: "#FFFFFF", lineHeight: "160%", textAlign: 'center' }}>We offer luxury buses, deluxe vans & premium cars on tour & holiday rentals!</Typography>
                                                <Button onClick={() => { navigate('/about'); setNavlink({ name: "About", link: "/about" }) }} endIcon={<NavigateNextIcon />} sx={{ width: 'fit-content', padding: "20px 30px", borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none", mt: 3 }}>About BASS TRAVELS</Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Box>

                                <Box width="100%" height={{ lg: "600px", xs: "500px", }}>
                                    <Box sx={{ width: "100%", height: "100%", background: 'url(https://basstravels.in/digitalfactory_content/uploads/2017/07/S1.jpg)', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                                        <Stack height="100%" direction="column" alignItems="center" justifyContent="center">
                                            <Stack height="100%" width="70%" direction="column" alignItems="start" justifyContent="center">
                                                <Typography sx={{ fontSize: { lg: "64px", md: "40px", xs: "24px" }, color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important`, textAlign: 'center' }}>Travel In Luxury</Typography>
                                                <Typography mt={3} sx={{ fontSize: "17px", color: "#FFFFFF", lineHeight: "160%", textAlign: 'center' }}>Book your tours from our wide fleet range of luxury coaches</Typography>
                                                <Typography sx={{ fontSize: "17px", color: "#FFFFFF", lineHeight: "160%", textAlign: 'center' }}>mini-buses and vans designed for a comfortable travel experience!</Typography>
                                                <Button onClick={() => { navigate('/booking'); setNavlink({ name: "Booking", link: "/booking" }) }} endIcon={<NavigateNextIcon />} sx={{ width: 'fit-content', padding: "20px 30px", borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none", mt: 3 }}>Book Now</Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Carousel>
                        </Box>
                    </Box>


                }

            </Box>


            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={search}

            >
                <Stack direction="row">
                    <TextField placeholder="To search, type and hit enter" sx={{ backgroundColor: "#FFFFFF", width: "300px" }} fullWidth />
                    <Button onClick={() => setSearch(false)} endIcon={<CloseIcon fontSize="29px" />} sx={{ borderRadius: "0px", width: "20px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "57px" }}></Button>
                </Stack>
            </Backdrop>
        </>
    )
}

