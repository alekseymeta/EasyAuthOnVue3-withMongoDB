import router from "../router";
import * as Realm from "realm-web";
import {mongoConfig} from "../mongoConfig";
const auth = Realm.getApp(mongoConfig);


export const authMongo = {
    state: () => ({

    }),
    getters: {},
    mutations: {

    },
    actions:{
        async login({dispatch, commit}, {email, password}) {
            const credentials = Realm.Credentials.emailPassword(
                email,
                password
            );

            try {
                await auth.logIn(credentials)
            }
            catch (error) {
                throw error
            }

        },

        async logout({commit}) {
            await auth.currentUser.logOut();
            await commit('CLEAR_USERDATAINFO', '')
            await commit('SET_MSG', 'Вы вышли из системы')
            await router.push('/login?message=logout')
        },

        async register({commit, dispatch} , {email, password}) {

            try {
                await auth.emailPasswordAuth.registerUser(email, password);
                await auth.logIn(Realm.Credentials.emailPassword(email, password))

                const mongodb = auth.currentUser.mongoClient('mongodb-atlas')
                const collection =mongodb.db('db-data').collection('users')

                await collection.insertOne({
                    userId: auth.currentUser.id,
                    bill: "10000",
                    email: email,
                    name: email.split('@',1)[0]
                })

            }
            catch (e) {
                throw error
            }

        }
    }
}