<template>
    <div>
        <h4>这是专题图：演示递归组件</h4>
        <tree :num="60"></tree>
    </div>
</template>

<script> 
    import tree from "./map"
    export default {
        components: { tree }
    }
</script>