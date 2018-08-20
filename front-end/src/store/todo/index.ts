import Vue from 'vue';
import Vuex, {Module} from 'vuex';
import { TodoState } from '../../types/Todo';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { state } from './states';
import {RootState} from "../../types/RootState";

Vue.use(Vuex);

export const TodoStoreModule : Module<TodoState, RootState> = {
    state,
    getters,
    mutations,
    actions
};

