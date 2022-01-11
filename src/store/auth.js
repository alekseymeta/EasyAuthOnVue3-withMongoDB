import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const auth = {
  state: () => ({
    email: ''
  }),
  getters: {},
  mutations: {
    SET_EMAIL(state, email) {
      state.email = email
    },
  },
  actions:{
    async login({dispatch, commit}, {email, password}) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user.email;
            commit('SET_EMAIL', user )
          })
          .catch((error) => {
            throw error
          });
    },

    async logout() {
      const auth = getAuth();
      await auth.signOut()
    },

    async register({commit} , {email, password}) {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          const db = getDatabase();
          set(ref(db, 'users/' + ''), {
            email: email
          });
          commit('SET_EMAIL', email )
        })
        .catch((error) => {
          throw error
        });
    }
  }
}
