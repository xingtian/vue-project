import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

import { bussinessRouterMap } from '../router'


export default new Vuex.Store({
    state: {
        currentNav: null,
        navCollapse: false,
    },
    getters: {
        subNavs: state => {
            var nav = state.currentNav;
            if (!nav) return [];
            var item = bussinessRouterMap.filter(t => t.name == nav);
            if (item.length == 0) return [];
            return item[0].children || [];
        },
        isNavCollapse: state => state.navCollapse
    },
    mutations: {
        SET_NAV: (state, nav) => {
            state.currentNav = nav;
        },
        SET_NAV_COLLAPSE: state => {
            state.navCollapse = !state.navCollapse;
        }
    },
    actions: {

    },
})