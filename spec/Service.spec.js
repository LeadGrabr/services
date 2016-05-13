import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Service } from '../src'
import { Flex } from 'reflexbox'

const renderer = TestUtils.createRenderer()

describe('Service', () => {
    let tree

    beforeEach(() => {
        renderer.render(<Service/>)
        tree = renderer.getRenderOutput()
    })

    it('should render', () => {
        expect(tree.type).toEqual(Flex)
    })
})
