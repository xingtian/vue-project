<template>
    <div style="display:flex;justify-content:center;">
        <div>
            <h3>
                初始化代码:<router-view style='display: inline;font-weight: 100'></router-view>
            </h3>
            <img class="demo-item hover-animation" src="static/img/init.png">
        </div>
        <div>
            <h3>结果:</h3>
            <img class="demo-item hover-animation" src="static/img/init-result.png">
        </div>
    </div>
</template>
<script>
    export default {
        name: "init"
    }
</script>
<style>
</style>