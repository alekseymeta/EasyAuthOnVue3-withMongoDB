import { createStore } from 'vuex'
import {getData} from "./getData";
import {authMongo} from "./authMongo";
import {alertMsg} from "./alertMsg";
import {userInfo} from "./userInfo";


export default createStore({
  modules: {
    getData: getData, authMongo: authMongo, alertMsg: alertMsg, userInfo: userInfo
  }
})
