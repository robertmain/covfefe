import { defineStore } from 'pinia'

import yelling from '@/assets/img/trumps/yelling.png'
import smug from '@/assets/img/trumps/smug.png'
import escapingHair from '@/assets/img/trumps/escaping_hair.png'
import bald from '@/assets/img/trumps/bald.png'

type Trump = {
  /**
   * A human readable name for each trump face
   */
  name: string

  /**
   * The image URL to the image. Used directly in <img> tags
   */
  image: string

  /**
   * Sets the pointer position for this Trump graphic
   */
  pointerPosition: number
}

type TrumpStore = {
  /**
   * Array of Trump images
   */
  trumps: Trump[]

  /**
   * The currently selected Trump image
   */
  trumpIndex: number
}

export enum ACTIONS {
  SET_TRUMP = 'SET_TRUMP',
}

export enum GETTERS {
  GET_CURRENT_TRUMP = 'GET_CURRENT_TRUMP',
}

export const useTrumpStore = defineStore('trump', {
  state: (): TrumpStore => ({
    trumps: [
      {
        name: 'Yelling',
        image: yelling,
        pointerPosition: 200,
      },
      {
        name: 'Smug',
        image: smug,
        pointerPosition: 170,
      },
      {
        name: 'Bald',
        image: bald,
        pointerPosition: 160,
      },
      {
        name: 'Comb-over',
        image: escapingHair,
        pointerPosition: 230,
      },
    ],
    trumpIndex: 0,
  }),
  actions: {
    [ACTIONS.SET_TRUMP](index: number) {
      this.trumpIndex = index
    },
  },
  getters: {
    [GETTERS.GET_CURRENT_TRUMP]:
      ({ trumps, trumpIndex }) =>
      () =>
        trumps[trumpIndex],
  },
})
