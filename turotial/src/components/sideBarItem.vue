<template>
    <el-submenu :index="nav.name">
        <template slot="title">
            <i v-if='nav.icon' class="nav-icon" :class="nav.icon"></i>
            <span>{{nav.name}}</span>
        </template>
        <template v-for="(item2,index2) in nav.children">
            <template v-if="item2.children&&item2.children.length>0">
                <sideBarItem :nav="item2"></sideBarItem>
            </template>
            <template v-else>
                <el-menu-item @click="go(item2)" :index="item2.name" :key="item2.name">
                    <i v-if='item2.icon' class="nav-icon" :class="item2.icon"></i>
                    <span>{{item2.name}}</span>
                </el-menu-item>
            </template>
        </template>
    </el-submenu>
</template>

<script>
    export const go = function (current) {
        this.$router.push({ name: current.name });
    }
    export default {
        name: "sideBarItem",
        props: {
            nav: Object
        },
        methods: { go }
    }
</script>