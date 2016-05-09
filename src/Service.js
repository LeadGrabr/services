import { default as React, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Heading } from 'rebass'

const serviceSize = 275

const Service = ({ img, name }) =>
    <Flex
        align="flex-end"
        m={1}
        style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            height: serviceSize,
            width: serviceSize
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
    name: PropTypes.string.isRequired
}

export default Service
