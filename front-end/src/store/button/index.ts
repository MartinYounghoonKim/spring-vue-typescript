import Vue from 'vue';
import Vuex, {Module, StoreOptions} from 'vuex';

import mutations from './mutations';
import actions from './actions';
import { state } from './states';
import {RootState} from "../../types/RootState";
import {ButtonState} from "../../types/Button";

Vue.use(Vuex);


export const ButtonStoreModule: Module<ButtonState, RootState> ={
    state,
    mutations,
    actions
};

