<template>
    <div id="main">
        <div id="dHead">固定头部60px;</div>
        <div id="dBody">
            <div class="mycontent">
                <div class="sidebar">
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
                        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                            <el-submenu :index="index+''" v-if="!item.leaf">
                                <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                        </template>
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
                        内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容内容<br/>内容结尾<br/>
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
        <div id="dFoot">
            <!--固定尾部30px-->
        </div>
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
        height: 60px;
        line-height: 60px;
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
        top: 60px;
        position: absolute;
        z-index: 10;
        bottom: 0px;  /*对应foot的高度*/
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
        height: 0px;
        line-height: 0px;
        width: 100%;
        position: absolute;
        z-index: 200;
        bottom: 0;
        text-align: center;
        color: #888;
        background-color: #d9d9d9;
    }
    .content-top{
        position: absolute;
        top:0px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        /*background-color: #f2f2f2;*/
        background: linear-gradient(to bottom, #ffffff, #e6e6e6, #ffffff);
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
        background-color: #f2f2f2;
        z-index: 120;
    }
    .content-bottom{
        position: absolute;
        bottom:0px;
        width: 100%;
        height: 32px;
        background-color: #e6e6e6;
        /*background: linear-gradient(to bottom, #e6e6e6, #d9d9d9, #e6e6e6);*/
        text-align: center;
        z-index: 120;
    }
    .el-menu {
        border-right: 0px;
        background-color: #f2f2f2;
    }

    .el-pagination .el-pager li{
        background-color: #ffffff;
    }
    .el-breadcrumb {
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        left:10px;
    }
</style>