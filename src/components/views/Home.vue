<template>
    <div id="main">
        <div id="dHead">
            <Header></Header>
        </div>
        <div id="dBody">
            <div class="mycontent">
                <div class="sidebar">
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
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
                   <router-view></router-view>
                    <!--登录对话框-->
                    <el-dialog title="重新登录" :modal="true" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
                        <el-form :model="form">
                            <el-form-item label="活动名称" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域" :label-width="formLabelWidth">
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
        <div id="dFoot">
            <!--固定尾部30px-->
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    export default {
        name: "Home",
        components: {Header},
        data() {
            return {
                dialogFormVisible: true,
                formLabelWidth: '120px',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    $head-height: 60px;
    #main {
        height: 100%;
        margin: 0;
        padding: 0;

        #dHead {
            height: $head-height;
            line-height: $head-height;
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
            top: $head-height;
            position: absolute;
            z-index: 10;
            bottom: 0px;  /*对应foot的高度*/

            .mycontent {
                padding: 0px;
                height: 100%;
                display: flex;

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
            }
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
</style>