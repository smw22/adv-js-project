<script setup lang="js">
import { ref } from 'vue';
import { formVisibility } from '../modules/formVisibility';
const { loginFormVisible, hideLoginForm, showLoginForm } = formVisibility(); 

const email = ref('');
const password = ref('');

import { useUsers } from '../modules/useUsers'
const { user, login, logout } = useUsers();

const handleLogin = (event) => {
  event.preventDefault(); // Prevent form submission
  login(email.value, password.value);
};

</script>

<template>
    <div v-if="!user" @click="showLoginForm" class="login-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.23 7.23 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"/></svg>
    </div>

    <div v-if="user" class="logged-in-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="green" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"/></g></svg>
        <p>Admin</p>
        <button class="logout-button" @click="logout()">Logout</button>
    </div>

    <div class="formContainer" v-show="loginFormVisible">
        <div class="cross" @click="hideLoginForm">
            <span></span>
            <span></span>
        </div>
        <form @submit="handleLogin">
            
            <label for="event-title">Email</label>
            <input id="txtEmail" type="text" v-model="email" placeholder="Email"/>
        
            <label for="event-time">Password</label>
            <input type="password" name="" id="txtPassword" v-model="password" placeholder="Password"/>
                        
            <button type="submit">Login</button>

        </form>
    </div>
</template>

<style scoped>

.login-button{
    position: fixed;
    top: 5%;
    right: 5%;
}

.logged-in-button{
    position: fixed;
    top: 5%;
    right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logged-in-button p{
    font-weight: bold;
}

.logged-in-button button{
    margin-top: 10px;
}

svg{
    cursor: pointer;
}

.formContainer{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    display: block;
}

form{
    display: flex;
    flex-direction: column;
    background-color: rgb(127, 15, 255);
    padding: 25px;
    height: 50vh;
    width: 600px;
    align-items: center;
    justify-content: center;
    gap: 25px;
    border-radius: 25px;
}

.cross{
    position: fixed;
    cursor: pointer;
    width: 45px;
    height: 45px;
    top: 10%;
    left: 5%;
}

.cross > span{
    display: block;
    width: 45px;
    height: 4px;
    background-color: black;
    z-index: 1000;
}

.cross > span:first-child{
    transform:  translate(2px, 2px) rotate(45deg);
}

.cross > span:last-child{
    transform: rotate(135deg);
}

label{
    color: white;
    font-size: 20px;
}

input{
    font-size: 20px;
}

p{
    display: flex;
    flex-direction: column;
}

button{
    height: 35px;
    padding: 3px 10px;
}

.logout-button{
    background-color: var(--blue-color);
    border-radius: 5px;
    cursor: pointer;
}
</style>