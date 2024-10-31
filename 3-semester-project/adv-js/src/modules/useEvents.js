import { ref, onMounted } from 'vue';
import { eventsCollection, eventsFirebaseCollectionRef, db } from "./firebase";
import { onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { clickedDate } from './clickedDate';

export const useEvents = () => {
    
    // variables stored in refs 
    const newEventTitle = ref('');
    const newEventTime = ref('');
    const newEventDate = ref('');

    const editingId = ref(null);

    //Step 2: list of events stored in a li in a ref
    const events = ref([]);


    //Step 3: create a function to retrieve a new event from the list
    onMounted(() => {
        onSnapshot(eventsCollection, (snapshot) => {
        events.value = snapshot.docs.map(doc => ({
            ...doc.data(), //spread operator
            id: doc.id
        })).sort((a, b) => {
                // Sort by time (assuming time is a string in 'HH:MM' 24-hour format)
                return a.time.localeCompare(b.time);
            });
        });
    });

    //Add Events

    const setClickedDate = (date) => {
        clickedDate.value = date;
    };

    const addEvent = async (date) => {
        if (newEventTitle.value.trim() === '' || newEventTime.value.trim() === '') 
        return;
    
        try {
            // Log selectedDate and other inputs for debugging
            console.log(`Adding event with title: ${newEventTitle.value}, time: ${newEventTime.value}, date: ${date}`);
    
            await addDoc(eventsCollection, {
                title: newEventTitle.value,
                time: newEventTime.value,
                date: date
            });
    
            // Reset fields after successful addition
            newEventTitle.value = '';
            newEventTime.value = '';
            clickedDate.value = '';
            console.log(`Event added successfully on ${date}`);
        } catch (error) {
            console.error("Error adding event:", error);
        }
    };
    
    //Step 5: create a function to delete a event from the list
    const deleteEvent = async (id) => {
        console.log("deleting event with id", id)
        await deleteDoc(doc(db, eventsFirebaseCollectionRef, id))
    }

    //Step 6: create a function to edit a event from the list
    const updateEvent = async (id, newEventTitle, newEventTime) => {
        console.log("editing an event");
        const eventDocRef = doc(db, eventsFirebaseCollectionRef, id);
        if (newEventTitle.trim() !== '' || newEventTime.trim() !== '') {
            await updateDoc(eventDocRef, {
              title: newEventTitle,
              time: newEventTime
            });
            console.log(`Updated event with id: ${id} to new title: ${newEventTitle}`);
        }
        else{
            return;
        }
        editingId.value = null; // Reset editingId to exit edit mode
    }

    const enterEditMode = (event) => {
        editingId.value = event.id; // Set the editing ID to the selected event
        newEventTitle.value = event.title; // Set the input value to the current title
        newEventTime.value = event.time;
    };

    return {
        events, 
        newEventTitle,
        newEventTime,
        newEventDate,
        clickedDate,
        setClickedDate,
        editingId,
        enterEditMode,
        addEvent,
        deleteEvent,
        updateEvent,

    }
}
