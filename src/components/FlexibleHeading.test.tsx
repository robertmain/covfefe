import { describe, expect, it, vi } from 'vitest'
import { cleanup, render } from '@testing-library/vue'
import FlexibleHeading from './FlexibleHeading.vue'
import { afterEach } from 'node:test'

describe('FlexibleHeading', () => {
  it('does not allow negative heading levels', async () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    render(FlexibleHeading, { props: { level: -1 } })
    expect(spy.mock.calls[0][0]).toMatch(/invalid prop: custom validator/i)
    spy.mockRestore()
    cleanup()
  })
  it('does not allow heading levels greater than 5', async () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    render(FlexibleHeading, { props: { level: 6 } })
    expect(spy.mock.calls[0][0]).toMatch(/invalid prop: custom validator/i)
    spy.mockRestore()
    cleanup()
  })

  it('renders the text provided', async () => {
    const resutlt = render(<FlexibleHeading level={1}>Hello!</FlexibleHeading>)
    expect(resutlt.queryByRole('heading')?.textContent).toContain('Hello')
  })
})
