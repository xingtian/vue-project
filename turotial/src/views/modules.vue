<template>
    <div style="display: flex;width:100%;">
        <div style="width:50%;border-right: 1px solid #ccc;">
            <div style="display:flex;flex-wrap:wrap;justify-content: center">
                <div class="module-item hover-animation" v-for="item in baseModules" style="background: rgb(232, 235, 223);">
                    {{item}}
                </div>
            </div>
        </div>
        <div style="width:50%; ">
            <div style="display:flex;flex-wrap:wrap;justify-content: center">
                <div class="module-item hover-animation" v-for="item in bsModules" style="background: rgb(160, 155, 204);color:#fff;">
                    {{item}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modules",
        data() {
            return {
                baseModules: ["身份验证", "显示控制", "查询定位", "自定义标注", "空间分析", "拓扑分析"],
                bsModules: ["电网专题图", "气象专题图", "地理专题图", "UI控件", "应用服务"]
            };
        },
    }
</script>

<style scoped>
    .module-item {
        width: 200px;
        height: 80px;
        margin: 15px;
        text-align: center;
        line-height: 80px;
        font-size: 1.4em;
    }
</style>