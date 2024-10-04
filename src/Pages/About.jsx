import { Box, Typography, Stack, Tabs, Tab, Button, TextField, IconButton, MenuItem, Select } from "@mui/material"
import Grid from '@mui/material/Grid2';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function About() {

    return (

        <>

            <Grid py={10} container px={{ xl: 20, lg: 10, xs: 2 }} rowGap={6} columnGap={4}>
                <Grid size={{ md: 5.6, xs: 12 }} rowGap={2} >
                    <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>BASS TRAVELS </Typography>
                    <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    <Typography sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>BASS TRAVELS is a leading tours and travels agency in Pondicherry.
                        With over 10 years of experience in organizing tours and providing fleet services, we have gathered significant knowledge in designing and
                        offering you the best tour packages to meet your requirements perfectly. We also accommodate custom travel needs that you might have and offer
                        you the best of our services. Our professional drivers will guide and support your tours and trips to ensure that your journey is totally comfortable.</Typography>

                    <Typography mt={3} sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>BASS TRAVELS also offers a wide range of travel services such as high-tech fleet services
                        for private tours, seasonal temple tours, corporate holiday outing, business tours and family weddings. Our fares are most reasonable and come with multiple benefits.
                        Our primary objective is to offer a safe, comfortable and happy travel experience!</Typography>

                </Grid>
                <Grid size={{ md: 5.6, xs: 12 }}>
                    <Typography sx={{ fontSize: "24px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>BASS FLEET </Typography>
                    <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    <Box sx={{ width: "100%", }}>
                        <Box component="img" src={'https://basstravels.in/digitalfactory_content/uploads/2017/02/BTFG-1024x683.jpg"'} sx={{ width: "100%", height: "100%", objectFit: "cover", border: "5px solid #EBEBEB" }}></Box>
                    </Box>
                </Grid>
                <Grid size={{ md: 5.6, xs: 12 }}>
                    <Stack direction="row" height="100px" width="100%" alignItems="center">
                        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#002C49", height: "100px", width: "100%" }}>
                            <Typography sx={{ fontSize: "20px", color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important` }}>EXPLORE OUR FLEET </Typography>
                        </Stack>
                        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#1E73BE", width: "52px", height: "100px" }}>
                            <ChevronRightIcon sx={{ color: "#FFFFFF", fontSize: "40px" }} />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ md: 5.6, xs: 12 }}>
                    <Stack direction="row" height="100px" width="100%" alignItems="center">
                        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#002C49", height: "100px", width: "100%" }}>
                            <Typography sx={{ fontSize: "20px", color: "#FFFFFF", fontFamily: `Montserrat, sans-serif !important` }}>VIEW OUR FARES </Typography>
                        </Stack>
                        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#1E73BE", width: "52px", height: "100px" }}>
                            <ChevronRightIcon sx={{ color: "#FFFFFF", fontSize: "40px" }} />
                        </Stack>
                    </Stack>
                </Grid>

                <Grid size={{ md: 5.6, xs: 12 }} rowGap={2} >
                    <Typography sx={{ fontSize: "20px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>Our Services </Typography>
                    <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    <Typography sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>
                        BASS TRAVELS offer ‘ <span style={{ fontWeight: "bold" }}>luxury fleet rentals with driver</span>‘ & ‘  <span style={{ fontWeight: "bold" }}>tour packages</span>’ to suit variety of needs & seasons.
                    </Typography>


                    <Stack mt={2} direction="column">
                        <Stack py={1.5} direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Luxury coaches & mini-buses for wedding functions, weekend getaways, temple tours, corporate & educational tours & business trips.
                            </Typography>
                        </Stack>
                        <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Budget & Premium taxi cabs for Airport transit & personal travel.
                            </Typography>
                        </Stack>
                        <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Tempo-travelers for private family tours & business trips.
                            </Typography>
                        </Stack> <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Custom-tour packages of customers with fleet & driver.
                            </Typography>
                        </Stack> <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Summer holiday destinations & exclusive temple festival tours.
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ md: 5.6, xs: 12 }} rowGap={2} >
                    <Typography sx={{ fontSize: "20px", color: "#42424", fontFamily: `Montserrat, sans-serif !important` }}>Our Mission </Typography>
                    <Box my={4} sx={{ borderTop: "3px solid #1E73BE", width: "45px" }}></Box>
                    <Typography sx={{ fontSize: "16px", color: "#42424", lineHeight: "160%" }}>
                        Our mission is to become the most preferred tours and travel services company in Pondicherry, by delivering quality services to clients consistently through happy travel experiences. </Typography>


                    <Stack mt={2} direction="column">
                        <Stack py={1.5} direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Deluxe air-conditioned and non-air-conditioned holiday coaches
                            </Typography>
                        </Stack>
                        <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Premium and budgeted taxis for personal and business needs
                            </Typography>
                        </Stack>
                        <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Disciplined and well-informed professional drivers
                            </Typography>
                        </Stack> <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Safe and comfortable fleets and taxis
                            </Typography>
                        </Stack> <Stack py={1.5} borderTop="1px solid #EBEBEB " direction="row">
                            <ChevronRightIcon sx={{ color: "#1E73BE", fontSize: "23px", }} />
                            <Typography sx={{ fontSize: "15px", color: "#42424", lineHeight: "160%" }}>
                                Most competitive and reasonable fares for tour packages
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}