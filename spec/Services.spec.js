import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as Services } from '../src'
import { Flex } from 'reflexbox'

const renderer = TestUtils.createRenderer()

describe('Services', () => {
    let tree

    beforeEach(() => {
        renderer.render(<Services services={[]}/>)
        tree = renderer.getRenderOutput()
    })

    it('should render', () => {
        expect(tree.type).toEqual(Flex)
    })
})
