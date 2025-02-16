import { describe, expect, it, vi, afterEach, beforeEach, type MockInstance } from 'vitest'
import FlexibleHeading from './FlexibleHeading.vue'
import { mount } from '@vue/test-utils'

describe('FlexibleHeading', () => {
  let warnMock: MockInstance<Console['warn']>
  beforeEach(() => {
    warnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })
  afterEach(() => {
    warnMock.mockRestore()
  })
  it('does not allow negative heading levels', async () => {
    mount(FlexibleHeading, { props: { level: -1 } })
    expect(warnMock.mock.calls[0][0]).toMatch(/invalid prop: custom validator/i)
  })
  it('does not allow heading levels greater than 6', async () => {
    mount(FlexibleHeading, { props: { level: 7 } })
    expect(warnMock.mock.calls[0][0]).toMatch(/invalid prop: custom validator/i)
  })
  it('renders the text provided', async () => {
    const result = mount(<FlexibleHeading level={1}>Hello!</FlexibleHeading>)
    expect(result.find('h1').text()).toContain('Hello')
  })
  it.each([1, 2, 3, 4, 5, 6])('renders a <h%i> heading', (i) => {
    const result = mount(<FlexibleHeading level={i}>Hello!</FlexibleHeading>)
    expect(result.find<HTMLHeadingElement>(`h${i}`).html()).toContain('Hello')
  })
  it('includes a ☝ emoji', async () => {
    const result = mount(<FlexibleHeading level={1}>Hello!</FlexibleHeading>)
    expect(result.find<HTMLHeadingElement>('h1').text()).toContain('☝')
  })
})
