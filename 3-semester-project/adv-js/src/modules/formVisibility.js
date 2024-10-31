import { ref } from 'vue';

// import { useEvents } from './useEvents';
const clickedDate = ref('');

const eventFormVisible = ref(false);
const loginFormVisible = ref(false);

export function formVisibility() {

    const showEventForm = (date) => {
        clickedDate.value = date; 
        eventFormVisible.value = true;
    };

    const hideEventForm = () => {
        eventFormVisible.value = false;
    };

    const showLoginForm = () => {
        loginFormVisible.value = true;
    };

    const hideLoginForm = () => {
        loginFormVisible.value = false;
    };

    return {
        eventFormVisible,
        loginFormVisible,
        showEventForm,
        hideEventForm,
        showLoginForm,
        hideLoginForm,

    };
}
