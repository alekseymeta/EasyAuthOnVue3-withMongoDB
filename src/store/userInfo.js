import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";


export const userInfo = {
    state: () => ({
        userDataInfo: {},
        userDataInfoTime: {}
    }),
    getters: {},
    mutations: {
        SET_USERDATAINFO(state, userDataInfo) {
            state.userDataInfo = userDataInfo
        },
        CLEAR_USERDATAINFO(state) {
            state.userDataInfo = {}
        },
        APPEND_USERDATAINFO(state, arr) {
            state.userDataInfoTime = arr
        }
    },
    actions: {
        async fetchInfo({commit, dispatch}) {
            const uid = await dispatch('getUid')
            const db = await getDatabase();

            const userInfoRef = await ref(db,'users/'+uid+'/info')

            onValue(userInfoRef, (snapshot) => {
                const data = snapshot.val();
                commit('SET_USERDATAINFO', data)
            });

            const arr = {
                'creationTime': getAuth().currentUser.metadata.creationTime,
                'lastSignInTime': getAuth().currentUser.metadata.lastSignInTime,
            }

            console.log(arr)

            await commit("APPEND_USERDATAINFO", arr)


        }
    }
}