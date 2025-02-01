import { defineStore } from 'pinia'

type RootStore = object

export enum ACTIONS {}

export const useRootStore = defineStore('root', {
  state: (): RootStore => ({}),
  actions: {},
})
