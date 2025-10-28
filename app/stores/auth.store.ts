

export const useAuthStore = defineStore('auth', () => {
        const token = ref<string | undefined>()
        const user = ref<User | undefined>();

        function setToken(key: string, value: User) {
            token.value = key;
            user.value = value;
        }

        function clearToken() {
            user.value = undefined;
            token.value = undefined;
        }

        return { token, clearToken, setToken, user }
}, {
    persist: true,
}) 