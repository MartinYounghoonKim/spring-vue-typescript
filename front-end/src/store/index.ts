import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import {RootState} from "../types/RootState";
import { TodoStoreModule } from "./todo";
import {ButtonStoreModule} from "./button";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    todoStore: TodoStoreModule,
    buttonStore: ButtonStoreModule,
  }
};

export default new Vuex.Store(store);
