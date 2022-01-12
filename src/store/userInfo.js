import { getDatabase, ref, onValue } from "firebase/database";


export const userInfo = {
    state: () => ({
        userDataInfo: {},
    }),
    getters: {},
    mutations: {
        SET_USERDATAINFO(state, userDataInfo) {
            state.userDataInfo = userDataInfo
        },
        CLEAR_USERDATAINFO(state) {
            state.userDataInfo = {}
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


        }
    }
}