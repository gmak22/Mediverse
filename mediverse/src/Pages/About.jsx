import { Heading, Image, Box, Spacer, HStack, Text, Flex } from "@chakra-ui/react";

export const About = () => {
    return (<>

        {/* <HStack spacing={6} align="center">
            <Box textAlign="center">
                <Image
                    src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
                    width={800}
                    rounded="full"
                />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Spacer/>
            <Box>
                <Image src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
                    width={800}
                    rounded="full" />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Spacer/>
            <Box>
                <Image src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
                    width={300}
                    rounded="full" />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Spacer/>
            <Box>
                <Image src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
                    width={300}
                    rounded="full" />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Spacer/>

            <Box>
                <Image src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
                    width={300}
                    />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Spacer/>

            <Box>
                <Image src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
                    width={300}
                    />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
          
        </HStack> */}

        {/* <Flex justifyContent="center" alignItems="center" p={10}>
            <Box textAlign="center">
                <Image
                    src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
                   
                    alt="Thomas Jack"
                />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Box textAlign="center">
                <Image
                    src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
               
                    alt="Thomas Jack"
                />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Box textAlign="center" mx={6}>
                <Image
                    src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
              
                    alt="Thomas Jack"
                />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
            <Box textAlign="center" mx={6}>
                <Image
                    src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5789.jpg?size=626&ext=jpg&ga=GA1.2.1342494070.1692619306&semt=sph"
             
                    rounded="full"
                    alt="Thomas Jack"
                />
                <Text fontWeight="bold" fontSize="xl" mt={2} noOfLines={1}>
                    Thomas Jack
                </Text>
            </Box>
        </Flex> */}



        <Flex justify="center" align="center" mt={15} mb={6}>
            <Image
                src="https://img.freepik.com/free-photo/doctor-patient_1421-64.jpg?w=740&t=st=1692804566~exp=1692805166~hmac=07b3d5e6a9d4e7acf0af1663ff875642f59858005184b416c0971f17014be4ee"
                alt="Random Image"
                w={500} height={550}

            />
            <Spacer />
            <Box ml={8}>
                <Box mb={6} width={500}>
                    <Heading as="h1" fontSize="xl">
                        Our Vision
                    </Heading>
                    <Text>
                        Offering solutions and products that are verifiably effective - that
                        is our vision. Our vision always pushes us to develop and offer high
                        quality solutions and products which can be proven to be effective
                        and efficient in their application.
                    </Text>
                </Box>

                <Box mb={6}>
                    <Heading as="h1" fontSize="xl">
                        Our Mission
                    </Heading>
                    <Text>
                        Our mission is to always improve the quality of life and the quality of work for all our clients and patients with our work and our solutions. Safety and success of therapies are always our focus.
                    </Text>
                </Box>

                <Box>
                    <Heading as="h1" fontSize="xl">
                        Our Values
                    </Heading>
                    <Text>
                        Clarity, trust, loyalty, pride and respect - these are our values.
                        They have accompanied us since our beginning and will continue to do
                        so in the future. They are the constants which shape our work and our
                        behavior.
                    </Text>
                </Box>
            </Box>

        </Flex>

    </>

    );
}