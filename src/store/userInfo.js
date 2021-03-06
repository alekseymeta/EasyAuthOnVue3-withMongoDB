import * as Realm from "realm-web";
const auth = Realm.getApp(process.env.VUE_APP_MONGO_ID);


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
        async fetchInfo({commit}) {

            await auth.currentUser.refreshCustomData();

            const data = await auth.currentUser.customData

            commit('SET_USERDATAINFO', data)

            // const arr = {
            //     'creationTime': getAuth().currentUser.metadata.creationTime,
            //     'lastSignInTime': getAuth().currentUser.metadata.lastSignInTime,
            // }
            //
            // console.log(arr)
            //
            // await commit("APPEND_USERDATAINFO", arr)


        }
    }
}