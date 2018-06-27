<template>
    <el-container class="layout-container">
        <el-header class="layout-header">
            <appHeader />
        </el-header>
        <el-container>
            <el-aside class="layout-aside" :class="{collapse:isNavCollapse}">
                <sideBar />
            </el-aside>
            <el-container>
                <el-header class="layout-breadcrumb">
                    <breadcrumb :paths="paths" />
                </el-header>
                <el-main class="layout-main">
                    <transition name="fade">
                        <router-view />
                    </transition>
                </el-main>
                <el-footer class="layout-footer">
                    <appFooter />
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    import sideBar from './sideBar'
    import appHeader from "./header"
    import appFooter from "./footer"
    import breadcrumb from "./breadcrumb"

    export default {
        name: "Layout-LR",
        computed: {
            paths() {
                return this.$route.matched;
            },
            isNavCollapse() {
                return this.$store.getters.isNavCollapse;
            }
        },
        components: { sideBar, appHeader, appFooter, breadcrumb }
    }
</script>