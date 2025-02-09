import { describe, expect, it, vi, afterEach } from 'vitest'
import TrumpGrid from './TrumpGrid.vue'
import { createTestingPinia } from '@pinia/testing'
import type { ImageTileProps } from './ImageTile.vue'
import { useTrumpStore } from '@/stores/trump'
import { mount } from '@vue/test-utils'
import ImageTile from './ImageTile.vue'
import { nextTick } from 'process'

const trumps: ImageTileProps[] = [
  { name: 'Test 1', image: '', isSelected: false },
  { name: 'Test 2', image: '', isSelected: false },
  { name: 'Test 3', image: '', isSelected: false },
]
describe('TrumpGrid', () => {
  it('renders one ImageTile for each trump passed', async () => {
    const wrapper = mount(TrumpGrid, {
      props: { trumps },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })
    expect(wrapper.findAllComponents(ImageTile).length).toBe(trumps.length)
  })

  it('marks a trump as selected when clicked', async () => {
    const wrapper = mount(TrumpGrid, {
      props: { trumps },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          }),
        ],
      },
    })
    const store = useTrumpStore()
    const [, trump] = wrapper.findAllComponents(ImageTile)
    trump.trigger('click')
    return nextTick(() => {
      const [, selected] = wrapper.findAllComponents(ImageTile)
      expect(store.trumpIndex).toBe(1)
      expect(selected.attributes()['aria-pressed']).toBe('true')
      expect(selected.classes()).toContain('selected')
    })
  })
})
