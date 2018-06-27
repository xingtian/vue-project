<template>
    <div>
        <span style="font-size:1.5em;">
            <i class="fa togger-nav" :class="{'fa-bars':hasLeftNav,'fa-map':!hasLeftNav}" @click="toggleNav"></i> WebGIS 开发手册
        </span>
        <div class="top-nav" ref="top-nav">
            <a v-for="nav in navs" @click="go(nav)">
                <i v-if="nav.icon" :class="nav.icon"></i>
                <span> {{nav.name}}</span>
            </a>
        </div>
    </div>
</template>

<script>
    import { bussinessRouterMap } from "../router"
    export default {
        name: "app-header",
        data() {
            var navs = bussinessRouterMap.map(t => {
                var path = null,
                    name = t.name;
                if (t.children && t.children.length == 1) {
                    path = t.children[0].path;
                    name = t.children[0].name;
                }
                else path = t.path;
                return { name: name, path, icon: t.icon }
            });
            return { navs }
        },
        computed: {
            hasLeftNav() {
                return this.$store.getters.subNavs.length > 0;
            }
        },
        methods: {
            go(nav) {
                this.$store.commit("SET_NAV", nav.name);
                this.$router.push({ name: nav.name });
            },
            toggleNav() {
                if (!this.hasLeftNav) return;
                this.$store.commit("SET_NAV_COLLAPSE");
            }
        }
    }
</script>
<style>
    .togger-nav {
        margin-right: 12px;
        cursor: pointer;
        transition: all .5s;
    }

    .togger-nav:hover {
        color: #ccc;
    }

    .top-nav {
        float: right;
    }

    .top-nav a {
        cursor: pointer;
        display: inline-block;
        padding: 0 15px;
    }

    .top-nav a:hover,
    .top-nav a.active {
        background: #3387b8;
    }
</style>