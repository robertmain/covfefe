import { describe, expect, it, vi, afterEach, beforeEach, type MockInstance } from 'vitest'
import { cleanup, render } from '@testing-library/vue'
import FlexibleHeading from './FlexibleHeading.vue'

describe('FlexibleHeading', () => {
  let warnMock: MockInstance<Console['warn']>
  beforeEach(() => {
    warnMock = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })
  afterEach(() => {
    warnMock.mockRestore()
    cleanup()
  })
  it('does not allow negative heading levels', async () => {
    render(FlexibleHeading, { props: { level: -1 } })
    expect(warnMock.mock.calls[0][0]).toMatch(/invalid prop: custom validator/i)
  })
  it('does not allow heading levels greater than 6', async () => {
    render(FlexibleHeading, { props: { level: 7 } })
    expect(warnMock.mock.calls[0][0]).toMatch(/invalid prop: custom validator/i)
  })
  it('renders the text provided', async () => {
    const resutlt = render(<FlexibleHeading level={1}>Hello!</FlexibleHeading>)
    expect(resutlt.queryByRole('heading')?.textContent).toContain('Hello')
  })
  it.each([1, 2, 3, 4, 5])('renders a <h%i> heading', (i) => {
    const result = render(<FlexibleHeading level={i}>Hello!</FlexibleHeading>)
    expect(result.queryByRole('heading')?.tagName).toBe(`H${i}`)
  })
  it('includes a ☝ emoji', async () => {
    const resutlt = render(<FlexibleHeading level={1}>Hello!</FlexibleHeading>)
    expect(resutlt.queryByRole('heading')?.textContent).toContain('☝')
  })
})
