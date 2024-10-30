import { ref } from 'vue';

export const selectedDate = ref(null); 

const eventFormVisible = ref(false);
const loginFormVisible = ref(false);

export function formVisibility() {

    const showEventForm = (date) => {
        selectedDate.value = date;
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
