import { defineStore } from 'pinia';
import piniaStore from '@/store/index';

export const useAppStore = defineStore(
  'app',
  {
    state: () => ({
      title: 'Vue3 Boilerplate',
      h1: 'Vue3 + Vite + Pinia',
      theme: '',
    }),
    getters: {},
    actions: {
      updateSettings(partial) {
        this.$patch(partial);
      },

      // Change theme color
      toggleTheme(dark) {
        if (dark) {
          this.theme = 'dark';
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          this.theme = 'cupcake';
          document.documentElement.setAttribute('data-theme', 'light');
        }
      },
    },
    persist: {
      key: 'theme',
      storage: localStorage,
      paths: ['theme'],
    },
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}