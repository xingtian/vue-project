<template>
    <el-menu background-color="#343131" text-color="#fff" active-text-color="#ffd04b" :unique-opened="false" :default-openeds="openeds"
        :default-active="activeIndex" :collapse="isNavCollapse" style="border-right: none; ">
        <template v-for="(item1,index1) in routes">
            <template v-if="item1.children&&item1.children.length>0">
                <sideBarItem :nav="item1"></sideBarItem>
            </template>
            <template v-else>
                <el-menu-item :index="item1.name" @click='go(item1)'>
                    <i v-if='item1.icon' class="nav-icon" :class="item1.icon"></i>
                    <span>{{item1.name}}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script>
    import { mapGetters } from "vuex"
    import sideBarItem, { go } from "./sideBarItem"

    export default {
        name: "sidebar",
        data() {
            return {
                openeds: [],
                activeIndex: ""
            }
        },
        created: function () {
            this.activeIndex = this.$route.name;
            if (this.routes.length > 0) {
                var first = this.routes[0];
                if (first.children && first.children.length > 0) {
                    this.openeds.push("0");
                }
            }
        },
        computed: {
            ...mapGetters({ routes: "subNavs",isNavCollapse:"isNavCollapse" })
        },
        methods: { go },
        components: { sideBarItem }
    }
</script>

<style>
    .nav-icon {
        margin-right: 10px;
    }
</style>