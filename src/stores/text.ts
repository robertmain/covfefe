import { defineStore } from 'pinia'

type TextStore = {
  /**
   * The raw quote text
   */
  rawText: string

  /**
   * The character limit for the text length
   */
  limit: number

  /**
   * Whether to include emoji in the output or not
   */
  emoji: boolean

  /**
   * An array of emojis to be randomly mixed in with the text to mimic orange
   * dipshits stupid fucking hand movements
   * */
  emojis: string[]
}

export enum ACTIONS {
  SET_TEXT = 'SET_TEXT',
  SET_EMOJI = 'SET_EMOJI',
}

export enum GETTERS {
  GET_REMAINING_CHARS = 'GET_REMAINING_CHARS',
  GET_TEXT_WITH_EMOJIS = 'GET_TEXT_WITH_EMOJIS',
  GET_TEXT = 'GET_TEXT',
}

export const useTextStore = defineStore('text', {
  state: (): TextStore => ({
    rawText: '',
    limit: 280,
    emoji: false,
    emojis: ['☝', '👌', '🖐', '👋', '🤏', '👐'],
  }),
  actions: {
    [ACTIONS.SET_TEXT](text: string) {
      this.rawText = text
    },
    [ACTIONS.SET_EMOJI](emoji: string) {
      this.emoji = `${emoji}` === 'true' ? true : false
    },
  },
  getters: {
    [GETTERS.GET_REMAINING_CHARS]:
      ({ rawText, limit }) =>
      () => {
        const remain = limit - rawText.length
        return remain >= 0 ? remain : 0
      },
    [GETTERS.GET_TEXT_WITH_EMOJIS]:
      ({ rawText, emojis }) =>
      () =>
        rawText
          .split(' ')
          .map((word) => word + (Math.random() >= 0.5 ? emojis[Math.floor(Math.random() * 6)] : ''))
          .join(' '),
    [GETTERS.GET_TEXT]({ rawText, emoji }) {
      return () => (emoji === true ? this[GETTERS.GET_TEXT_WITH_EMOJIS]() : rawText)
    },
  },
})
