import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { MyCounter } from '../src'

describe('MyCounter component', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
  })
})
