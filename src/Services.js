import { default as React, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { default as Service } from './Service'
import { Link } from 'react-router'

const Services = ({ services, ...props }) =>
    <Flex
        justify="center"
        wrap
        {...props}
    >
        {services.map(({ href, ...serviceProps }, key) => {
            if (href) {
                return (
                    <Link
                        key={key}
                        to={href}
                    >
                        <Service {...serviceProps}/>
                    </Link>
                )
            }
            return (
                <Service
                    key={key}
                    {...serviceProps}
                />
            )
        })}
    </Flex>

Services.propTypes = {
    services: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Services
