import { Box, Typography, Stack } from "@mui/material"
import Grid from '@mui/material/Grid2';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <Box py={8} sx={{ backgroundColor: "#002c49" }}>
                <Grid px={{ lg: 20, xs: 2 }} container gap={5}>
                    <Grid size={{ lg: 5 }}>
                        <Typography sx={{ fontSize: "14px", color: "#FFFFFF", }}>ABOUT US</Typography>
                        <Box my={3} sx={{ borderTop: "2px solid #1E73BE", width: "55px" }}></Box>
                        <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>
                            BASS TRAVELS is a leading tours and travels agency in Pondicherry. With over 10 years of experience in organizing tours and providing fleet services,
                            we have gathered significant knowledge in designing and offering you the best tour packages to meet your
                            requirements perfectly.
                        </Typography>
                        <Typography mt={3} sx={{ fontSize: "14px", color: "#FFFFFF" }}>

                            BASS TRAVELS also offers a wide range of travel services – high-tech fleet services for
                            private tours, seasonal temple tours, educational tours, corporate holiday outings, business tours and wedding trips. Our objective is
                            to offer our clients a safe, comfortable and happy journey experience!
                        </Typography>
                    </Grid>
                    <Grid size={{ lg: 3 }}>

                        <Typography sx={{ fontSize: "14px", color: "#FFFFFF", }}>QUICK LINKS</Typography>
                        <Box my={3} sx={{ borderTop: "2px solid #1E73BE", width: "55px" }}></Box>
                        <Stack py={1} borderBottom="1px solid #3B3B3B" direction="row" alignItems="center">
                            <ChevronRightIcon sx={{ color: "#1E73BE" }} />
                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>Travel Policy</Typography>
                        </Stack>
                        <Stack py={1} borderBottom="1px solid #3B3B3B" width="100%" direction="row" alignItems="center">
                            <ChevronRightIcon sx={{ color: "#1E73BE" }} />
                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>F.A.Q’s</Typography>
                        </Stack>
                        <Stack py={1} borderBottom="1px solid #3B3B3B" width="100%" direction="row" alignItems="center">
                            <ChevronRightIcon sx={{ color: "#1E73BE" }} />
                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>Privacy Policy</Typography>
                        </Stack>
                        <Stack py={1} borderBottom="1px solid #3B3B3B" width="100%" direction="row" alignItems="center">
                            <ChevronRightIcon sx={{ color: "#1E73BE" }} />
                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>Feedback Form</Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{ lg: 3 }}>

                        <Typography sx={{ fontSize: "14px", color: "#FFFFFF", }}>QUICK LINKS</Typography>
                        <Box my={3} sx={{ borderTop: "2px solid #1E73BE", width: "55px" }}></Box>
                        <Stack py={1.5} direction="row" alignItems="start" columnGap={2}>
                            <Box mt={1}> <LocationOnIcon sx={{ color: "#FFFFFF", fontSize: "30px" }} /> </Box>
                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>#20,21,ECR, 100FT, ROAD, KARUVADIKUPPAM, <br /> PONDICHERRY-605008</Typography>

                        </Stack>
                        <Stack py={1.5} width="100%" direction="row" alignItems="start" columnGap={2}>
                            <Box mt={1}> <CallIcon sx={{ color: "#FFFFFF", fontSize: "30px" }} /> </Box>

                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>+919443279915  <br /> +919791855051  <br />
                                <span style={{ color: "#6F767A" }}>Mon-Sat | 7.00 a.m. - 10.30 p.m.</span> </Typography>

                        </Stack>
                        <Stack py={1.5} width="100%" direction="row" alignItems="start" columnGap={2}>
                            <Box mt={1}> <MailIcon sx={{ color: "#FFFFFF", fontSize: "30px" }} /> </Box>
                            <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>bookings@basstravels.in <br />
                                <span style={{ color: "#6F767A" }}> We respond within 3 hours.</span></Typography>
                        </Stack>
                        <Stack py={1} width="100%" direction="row" alignItems="center">
                        </Stack>
                    </Grid>
                    {/* <Grid size={{ sm: 12 }}>

                    </Grid> */}
                </Grid>
                <Stack textAlign="center" direction="column" alignItems="center" borderTop="1px solid #3B3B3B" pt={6} rowGap={3}>
                    <Stack direction="row" columnGap={3}>
                        <FaFacebookF fill="#FFFFFF" />
                        <FaGooglePlusG fill="#FFFFFF" style={{ fontSize: '20px' }} />
                        <FaSkype fill="#FFFFFF" />
                    </Stack>
                    <Typography sx={{ fontSize: "14px", color: "#FFFFFF", lineHeight: "160%", }}>© 2017 BASS TRAVELS | Powered by <span style={{ color: "#1E73BE" }}>DIGITAL FACTORY</span></Typography>
                </Stack>
            </Box>
        </>
    )
}