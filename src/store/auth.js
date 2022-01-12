import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const auth = {
  state: () => ({

  }),
  getters: {},
  mutations: {

  },
  actions:{
    async login({dispatch, commit}, {email, password}) {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user.email;
          })
          .catch((error) => {
            throw error
          });
    },

    async logout({commit}) {
      const auth = getAuth();
      await auth.signOut()
        commit('CLEAR_USERDATAINFO', '')
    },

    async register({commit, dispatch} , {email, password}) {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
            const db = getDatabase();
            const uid = await dispatch('getUid')
            await set(ref(db, 'users/' + uid + '/info'), {
                bill: 10000,
                email: email,
                name: email.split('@',1)[0]
            });
        })
        .catch((error) => {
          throw error
        });
    },

      getUid() {
        const user = getAuth().currentUser
          return user ? user.uid : null
      }
  }
}
