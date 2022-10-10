import { describe, it, expect } from '@jest/globals'
import cx from '../src/index'

const y = true
const n = false

describe('cx', () => {
  it('should return class names that were provided', () => {
    const result = cx('classOne classTwo', 'classThree', {
      classFour: 'classFour',
      classFive: 'classFive'
    })

    expect(result).toEqual('classOne classTwo classThree classFour classFive')
  })

  it('should not return falsy values', () => {
    const classNames = cx(y ? 'classOne classTwo' : 'classThree', n ? 'b' : 'c')

    expect(classNames).toEqual('classOne classTwo c')
    expect(classNames).not.toEqual('classThree')
  })

  it('should return an empty string if no arguments are provided', () => {
    const classNames = cx()

    expect(classNames).toEqual('')
  })

  it('should return an empty string if all arguments are falsy', () => {
    const classNames = cx(n ? 'a' : '', n ? 'b' : '', n ? 'c' : '')

    expect(classNames).toEqual('')
  })

  it('should return objects by their key as a string if its value is truthy', () => {
    const classNames = cx({ a: true, b: false, c: true, d: 'hello' })

    expect(classNames).toEqual('a c d')
  })
})
