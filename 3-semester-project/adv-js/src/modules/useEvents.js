import { ref, onMounted } from 'vue';
import { eventsCollection, eventsFirebaseCollectionRef, db } from "./firebase";
import { onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

import { getDecemberDates } from '../modules/datesOfDecember'
const decemberDates = getDecemberDates();

export const useEvents = () => {
    
    // //Step 1: new event title and time and stored in a ref
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
            // title: doc.data().title,
        }))
        })
    });
    
    //Step 4: create a function to add a new event to the list
    const addEvent = async () => {
        if (newEventTitle.value.trim() == '' || newEventTime.value.trim() == '') 
        return; //checks if input is empty, then returns(stop function)
    
        await addDoc(eventsCollection, {
        title: newEventTitle.value,
        time: newEventTime.value,
        date: newEventDate.value = '2024-12-' + decemberDates.dates,
        })
    
        newEventTitle.value = '';
        newEventTime.value = '';
        newEventDate.value = '';
        console.log('added event');
    }
    
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
        editingId,
        enterEditMode,
        addEvent,
        deleteEvent,
        updateEvent,

    }
}
