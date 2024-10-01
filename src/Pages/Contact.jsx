import { Box, Typography, Stack, Tabs, Tab, Button, TextField, IconButton, MenuItem, Select, Divider, StepLabel, Step, Stepper, TextareaAutosize } from "@mui/material"
import Grid from '@mui/material/Grid2';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";


export default function Contact() {
    return (
        <>

            <Box py={10} px={{ xl: 20, lg: 10, xs: 2 }}>
                <Grid py={10} container rowGap={3} columnGap={5} justifyContent="center">

                    <Grid size={{ md: 5, xs: 12 }} >
                        <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>Get In Touch</Typography>
                        {/* <Stack direction="row" alignContent="center" justifyContent="center"> */}
                        <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                        {/* </Stack> */}
                        <Typography sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>Got a custom tour/vehicle requirement?
                            Write to us using the form below. Also feel free to call our office landline or mobile numbers listed or
                            kindly drop in to our office to discuss your requirements in person. We’d be glad to respond to your needs quickly.
                        </Typography>

                        <Stack mt={4} rowGap={1} width="100%">
                            <Typography sx={{ fontSize: "16px", }}>Your Name (required)</Typography>
                            <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth />
                        </Stack>
                        <Stack mt={4} rowGap={1} width="100%">
                            <Typography sx={{ fontSize: "16px", }}>Your Email (required)</Typography>
                            <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth />
                        </Stack>
                        <Stack mt={4} rowGap={1} width="100%">
                            <Typography sx={{ fontSize: "16px", }}>Subject</Typography>
                            <TextField sx={{ backgroundColor: "#FFFFFF" }} fullWidth />
                        </Stack>
                        <Stack mt={4} rowGap={1} width="100%">
                            <Typography sx={{ fontSize: "16px", }}>Your Message</Typography>
                            <TextareaAutosize style={{ height: "225px" }} fullWidth />
                        </Stack>
                        <Button sx={{ mt: 6, width: '90px', borderRadius: "30px", backgroundColor: "#1E73BE", color: "#FFFFFF", height: "44px", textTransform: "none" }}>Send</Button>

                    </Grid>

                    <Grid size={{ md: 5, xs: 12 }} >
                        <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>Contact Details</Typography>
                        <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>


                        <Stack py={2} pt={3} direction="row" alignItems="start" borderTop="1px solid #E8E8E8" borderBottom="1px solid #E8E8E8" columnGap={2}>
                            <Box > <LocationOnIcon sx={{ color: "#1E73BE", fontSize: "23px" }} /> </Box>
                            <Typography sx={{ fontSize: "15px", lineHeight: "160%", }}>#20,21,ECR, 100FT, ROAD, KARUVADIKUPPAM, PONDICHERRY-605008</Typography>
                        </Stack>
                        <Stack py={2} pt={3} width="100%" direction="row" alignItems="start" columnGap={2} borderBottom="1px solid #E8E8E8">
                            <Box > <CallIcon sx={{ color: "#1E73BE", fontSize: "23px" }} /> </Box>
                            <Typography sx={{ fontSize: "15px", lineHeight: "160%", }}>+919443279915 | +919791855051  </Typography>
                        </Stack>
                        <Stack py={2} pt={3} width="100%" direction="row" alignItems="start" columnGap={2} borderBottom="1px solid #E8E8E8">
                            <Box > <MailIcon sx={{ color: "#1E73BE", fontSize: "23px" }} /> </Box>
                            <Typography sx={{ fontSize: "15px", lineHeight: "160%", }}>bookings@basstravels.in </Typography>
                        </Stack>
                        <Box mt={7} width="100%">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.2410444834104!2d79.82562787453217!3d11.95780603629445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53615f75502d6d%3A0xc47f307313a0cc3d!2s20%2C%2021%2C%20East%20Coast%20Rd%2C%20Karuvadikuppam%2C%20Puducherry%2C%20605012!5e0!3m2!1sen!2sin!4v1727783302575!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no - referrer - when - downgrade"></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}