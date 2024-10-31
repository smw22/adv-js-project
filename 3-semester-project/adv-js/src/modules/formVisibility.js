import { ref } from 'vue';
import { clickedDate } from './clickedDate';

const eventFormVisible = ref(false);
const loginFormVisible = ref(false);

export function formVisibility() {

    const showEventForm = (date) => {
        console.log("Date received in showEventForm:", date);
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
