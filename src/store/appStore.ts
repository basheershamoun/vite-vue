import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
export const useAppStore = defineStore("AppStore",
    {
        state: () => {
            return {
                counter: useLocalStorage("counter", 0),
                darkMode: useLocalStorage("darkMode", false),
            };
        },
        getters: {
            doubleCount: (state) => state.counter,
            isDark: (state) => state.darkMode,
        },

        actions: {
            toggleTheme() {
                this.darkMode = !this.darkMode;
                this.setThemeClass();



            },
            setThemeClass() {
                let ht = document.getElementsByTagName('html')[0];


                if (this.darkMode) {
                    ht.classList.add('dark');
                }else{
                    ht.classList.remove("dark");
                }
            },

            inc() {
                this.counter++;
            },
        },
    });
