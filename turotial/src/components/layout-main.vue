<template>
    <el-container class="layout-container">
        <el-header class="layout-header">
            <appHeader />
        </el-header>
        <el-main class="layout-main">
            <router-view />
        </el-main>
    </el-container>
</template>

<script>
    import appHeader from "./header"
    export default {
        name: "Layout-main",
        components: { appHeader }
    }
</script>