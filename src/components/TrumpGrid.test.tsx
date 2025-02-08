import { describe, expect, it, afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/vue'
import TrumpGrid from './TrumpGrid.vue'

describe('TrumpGrid', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders one ImageTile for each trump passed', async () => {
    const result = render(TrumpGrid, {
      props: {
        trumps: [
          { name: 'Test 1', image: '', isSelected: false },
          { name: 'Test 2', image: '', isSelected: false },
          { name: 'Test 3', image: '', isSelected: false },
        ],
      },
    })
    expect(result.queryAllByRole('button').length).toBe(3)
  })
})
