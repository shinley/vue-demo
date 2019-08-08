<template>
    <div id="main">
        <div id="dHead">固定头部100px;</div>
        <div id="dBody">
            <div class="mycontent">
                <div class="sidebar">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div id="dFoot">固定尾部100px</div>
    </div>
</template>

<script>
    export default {
        name: "Home2"
    }
</script>

<style scoped>
    #main {
        height: 100%;
        margin: 0;
        padding: 0
    }

    #dHead {
        height: 80px;
        line-height: 80px;
        background: #690;
        width: 100%;
        position: absolute;
        z-index: 5;
        top: 0;
        text-align: center;
    }

    #dBody {
        /*background: #FC0;*/
        width: 100%;
        overflow: auto;
        top: 80px;
        position: absolute;
        z-index: 10;
        bottom: 50px;
    }

    .mycontent {
        padding: 0px;
        height: 100%;
        display: flex;
    }

    .sidebar {
        flex: 0 0 200px;
        height: 100%;
        border-right: 1px #e6e6e6 solid;
        /*background: #BCE8F1;*/
    }

    .content {
        flex: 1;
        height: 100%;
        /*background: #F0AD4E;*/
        z-index: 110;
    }

    #dFoot {
        height: 50px;
        line-height: 50px;
        background: #690;
        width: 100%;
        position: absolute;
        z-index: 200;
        bottom: 0;
        text-align: center;
    }
    .el-menu {
        border-right: 0px;
    }
</style>