import { defineStore } from 'pinia'

type RootStore = {}

export enum ACTIONS {}

export const useRootStore = defineStore('root', {
  state: (): RootStore => ({}),
  actions: {},
})
