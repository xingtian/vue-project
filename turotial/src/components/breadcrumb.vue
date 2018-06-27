<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in paths" :key="item.name">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "breadcrumb",
        props: {
            paths: {
                type: Array,
                required: true
            }
        }
    }  
</script>