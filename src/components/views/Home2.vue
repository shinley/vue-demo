<template>
    <div id="main">
        <div id="dHead">固定头部100px;</div>
        <div id="dBody">
            <div class="mycontent">
                <div class="sidebar">
                    <el-menu default-active="2" class="el-menu-vertical-demo">
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
                    <div class="content-top">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="content-main">
<!--                        <router-view></router-view>-->
                        内容开头<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>
                    </div>
                    <div class="content-bottom">
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="1000">
                        </el-pagination>
                    </div>
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
        background: #20a0ff;
        width: 100%;
        position: absolute;
        z-index: 5;
        top: 0;
        text-align: center;
    }

    #dBody {
        /*background: #FC0;*/
        width: 100%;
        overflow: hidden;
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
        background-color: #f2f2f2;
    }

    .content {
        position: relative;
        flex: 1;
        height: 100%;
        /*background: #F0AD4E;*/
        z-index: 110;
    }

    #dFoot {
        height: 50px;
        line-height: 50px;
        width: 100%;
        position: absolute;
        z-index: 200;
        bottom: 0;
        text-align: center;
        color: #888;
        background-color: #e6e6e6;
    }
    .content-top{
        position: absolute;
        top:0px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: #f2f2f2;
        z-index: 120;
    }
    .content-main{
        position: absolute;
        width: calc(100% - 10px); /* 流下10px 给pading-left */
        top: 30px;
        bottom: 30px;
        padding-top:10px;
        padding-bottom:10px;
        text-align: center;
        overflow: auto;
        z-index: 120;
    }
    .content-bottom{
        position: absolute;
        bottom:0px;
        width: 100%;
        height: 30px;
        background-color: #f2f2f2;
        text-align: center;
        z-index: 120;
    }
    .el-menu {
        border-right: 0px;
        background-color: #f2f2f2;
    }

    .el-pagination > * {
        background-color: #f2f2f2;
    }
    .el-breadcrumb {
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        left:10px;
    }
</style>