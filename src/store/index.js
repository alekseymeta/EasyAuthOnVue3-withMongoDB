import { createStore } from 'vuex'
import {getData} from "./getData";
import {auth} from "./auth";
import {alertMsg} from "./alertMsg";
import {userInfo} from "./userInfo";


export default createStore({
  modules: {
    getData: getData, auth: auth, alertMsg: alertMsg, userInfo: userInfo
  }
})
