import { default as React, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Heading } from 'rebass'

const Service = ({ img, name, size }) =>
    <Flex
        align="flex-end"
        m={1}
        style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            height: size,
            width: size
        }}
    >
        <Heading
            backgroundColor="default"
            color="secondary"
            level={4}
            p={2}
            style={{
                width: '100%'
            }}
        >
            {name}
        </Heading>
    </Flex>

Service.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}

Service.defaultProps = {
    size: 250
}

export default Service
