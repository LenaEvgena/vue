import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    },
  },
};
