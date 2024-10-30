<script setup lang="js">
import { formVisibility } from '../modules/formVisibility';
const { showEventForm } = formVisibility(); 

import { useEvents } from '../modules/useEvents';
const { events, newEventTitle, newEventTime, newEventDate, editingId, enterEditMode, deleteEvent, updateEvent} = useEvents();

import { useUsers } from '../modules/useUsers'
const { user } = useUsers();

import { getDecemberDates } from '../modules/datesOfDecember'
const { dates } = getDecemberDates();

</script>

<template>
    <div class="container">
        <h1>December 2024</h1>
        <div class="calendar">
            <div class="day-names">
                <div class="sunday">SUN</div>
                <div class="monday">MON</div>
                <div class="tuesday">TUS</div>
                <div class="wednesday">WED</div>
                <div class="thursday">THU</div>
                <div class="friday">FRI</div>
                <div class="saturday">SAT</div>
            </div>
            <div class="days">

                <ul class="days-list">
                    <li v-for="date in dates" :key="date">

                        <div id="day"> 
                            <span>{{ new Date(date).getDate() }}</span> 
                            <span v-if="user" class="add-event-button" @click="showEventForm(date)">+</span> <br>

                            <ul v-if="user" class="event-list">
                                <li v-for="event in events.filter(event => event.date === date)" :key="event.id" class="event-element">
                                    <div v-if="editingId === event.id">
                                        <input v-model="newEventTitle" placeholder="New title"/>
                                        <input v-model="newEventTime" placeholder="New time"/>
                                        <button @click="updateEvent(event.id, newEventTitle, newEventTime)">Save</button>
                                        <button @click="editingId = null">Cancel</button>
                                    </div>
                                    <div id="event-container" v-else>
                                        <div>
                                        {{ event.title }} at {{ event.time }} 
                                        </div>
                                        <div class="event-buttons">
                                            <button @click="enterEditMode(event)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/></svg>
                                            </button>
                                            <button @click="deleteEvent(event.id)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#f92f60" d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0z"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>

</template>

<style scoped>

.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    font-size: 4rem;
    margin-bottom: 25px;
}

.event-list{
    padding-top: 20px;

}

.event-element{
    background-color: var(--blue-color);
    padding: 2px 4px;
    border-radius: 5px;
    list-style-type: none;
    display: flex;
} 

.add-event-button{
    cursor: pointer;
    background-color: rgb(241, 40, 40);
    padding: 5px 10px;
    border-radius: 25%;
    float: right;
}

#event-container{
    display: flex;
}

.event-buttons{
    margin-left: 10px;
}

button{
    cursor: pointer;
}

.day-names{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px
}

.day-names > div{
    padding: 20px 30px;
    border: 1px solid #000;
    /* width: 75px; */
}

.days{
    display: grid;
    gap: 2px
}

.days-list{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
}

.days ul li{
    list-style-type: none;
}

#day {
    border: 1px solid #000;
    padding: 20px;
    min-height: 75px;
    height: fit-content;
    transition: all 0.15s;
}

#day:hover{
    border: 5px solid var(--blue-color); 
}


/* .row{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px
}

.row > div{
    border: 1px solid #000;
    padding: 20px;
    min-height: 75px;
    height: fit-content;
    transition: all 0.15s;
}

.row > div:hover{
    border: 5px solid var(--blue-color);
}

.off-day{
    background-color: rgb(202, 202, 202);
} */

</style>