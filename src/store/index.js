import { createStore } from 'vuex'
import {getData} from "./getData";
import {auth} from "./auth";
import {alertMsg} from "./alertMsg";


export default createStore({
  modules: {
    getData: getData, auth: auth, alertMsg: alertMsg
  }
})
