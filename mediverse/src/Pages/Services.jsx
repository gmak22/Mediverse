import React from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import { ServiceCard } from '../Components/Service/ServiceCard';
import { FaTooth, FaEye, FaVirus, FaHeart, FaBrain, FaBone } from 'react-icons/fa';
import Plans from '../Components/Service/Plans';

export const Services = () => {
    const serviceData = [
        { title: 'Dental Care', content: 'Providing comprehensive dental services.', icon: FaTooth },
        { title: 'Eye Care', content: 'Offering advanced eye care treatments.', icon: FaEye },
        { title: 'Allergic', content: 'Specialized care for allergic reactions.', icon: FaVirus },
        { title: 'Cardiology', content: 'Specialized care for heart-related issues.', icon: FaHeart },
        { title: 'Neurology', content: 'Advanced treatments for neurological disorders.', icon: FaBrain },
        { title: 'Orthopedic', content: 'Expertise in orthopaedic care and surgeries.', icon: FaBone },
    ];

    return (
        <Container maxW="xl" mt={8}>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={4}>
                {serviceData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        content={service.content}
                        icon={service.icon}
                    />
                ))}
            </SimpleGrid>
            <Plans/>
        </Container>
    );
};
