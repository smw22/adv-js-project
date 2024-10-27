import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase';

import { ref } from 'vue';

export const useUsers = () => {
  const user = ref(null);

  const login = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredentials.user);
    } 
    catch (error) {
        console.log(error.message)
    }
  }
  
  const logout = async () => {
    try {
      await signOut(auth)
    }
    catch (error) {
        console.log(error.message)
    }
  }

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  })


  return {
    user,
    login,
    logout
  }
}