import { defineStore } from 'pinia'

type TextStore = {
  /**
   * The raw quote text
   */
  text: string

  /**
   * Whether to include emoji in the output or not
   */
  emoji: boolean
}

export enum ACTIONS {
  SET_TEXT = 'SET_TEXT',
  SET_EMOJI = 'SET_EMOJI',
}

export enum GETTERS {}

export const useTextStore = defineStore('text', {
  state: (): TextStore => ({
    text: '',
    emoji: false,
  }),
  actions: {
    [ACTIONS.SET_TEXT](text: string) {
      this.text = text
    },
    [ACTIONS.SET_EMOJI](emoji: string) {
      this.emoji = `${emoji}` === 'true' ? true : false
    },
  },
})
