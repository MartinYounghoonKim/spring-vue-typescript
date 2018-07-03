import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { TodoState } from '../types/Todo';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import { state } from './states';

Vue.use(Vuex);

const store: StoreOptions<TodoState> ={
    state,
    getters,
    mutations,
    actions
};

export default new Vuex.Store(store);