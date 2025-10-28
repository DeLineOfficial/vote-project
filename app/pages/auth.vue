<script setup lang="ts">
    const username = ref<string>();
    const password = ref<string>();

    const APIURL = useAPI();
    const authStore = useAuthStore();

    async function login() {
        try {
            const data = $fetch<LoginResponse>(APIURL + '/auth/login', {
                method: 'POST',
                body: {
                    email: username.value,
                    password: password.value
                }
            })
            authStore.setToken((await data).token);
            navigateTo('/')
        } catch ( error ) {
            console.error(error)
        }
    }
</script>

<template>
    <div class="auth">
        <h3 class="auth__title">Вход на платформу</h3>

        <form class="login-form">
            <InputField v-model="username" placeholder="Email">
                <template #icon>
                    <Icon name="icon:mail"/>
                </template>
            </InputField>
            <InputField  v-model="password" type="password" placeholder="Пароль">
                <template #icon>
                    <Icon name="icon:key"/>
                </template>
            </InputField>

            <ActionButton @click="login()">
                Войти в аккаунт
            </ActionButton>
        </form>
    </div>
</template>

<style scoped>
    .auth {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        flex: 1 1 auto;

        &__title {
            font-size: 16px;
            margin-bottom: 26px;
        }

        & .login-form {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 18px;
            max-width: 301px;
        }
    }
</style>