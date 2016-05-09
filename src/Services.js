import { default as React, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { default as Service } from './Service'

const Services = ({ services, ...props }) =>
    <Flex
        justify="space-around"
        wrap
        {...props}
    >
        {services.map((service, key) =>
            <Service
                key={key}
                {...service}
            />
        )}
    </Flex>

Services.propTypes = {
    services: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Services
