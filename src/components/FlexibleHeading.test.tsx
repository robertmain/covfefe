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
  it('does not allow heading levels greater than 5', async () => {
    render(FlexibleHeading, { props: { level: 6 } })
    expect(warnMock.mock.calls[0][0]).toMatch(/invalid prop: custom validator/i)
  })
  it('renders the text provided', async () => {
    const resutlt = render(<FlexibleHeading level={1}>Hello!</FlexibleHeading>)
    expect(resutlt.queryByRole('heading')?.textContent).toContain('Hello')
  })
})
