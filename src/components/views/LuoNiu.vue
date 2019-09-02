<template>

    <div class="content">
        <div class="content-top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>流程管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="operation-menu">

        </div>
        <div class="content-main">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="股票代码" align="left">

                </el-form-item>
                <el-form-item label="股票名称" align="left">

                </el-form-item>
                <el-form-item label="最高价" align="left">

                </el-form-item>
                <el-form-item label="次高价" align="left">

                </el-form-item>
                <el-form-item label="次低价" align="left">

                </el-form-item>
                <el-form-item label="最低价" align="left">

                </el-form-item>
                <el-form-item label="预测日期" align="left">
                    2019-08-31
                </el-form-item>
            </el-form>
        </div>
        <div class="content-bottom">
        </div>

    </div>
</template>

<script>
    import {preditionLuoNiu} from '../../api/api'
    export default {
        data() {
            return {
                code: '000735',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        mounted() {
            preditionLuoNiu({code: this.code}).then(resp=>{
                let data = resp.data;
                console.log(data);
            });
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style lang="scss" scoped>
    $content-top-height: 40px;
    $bottom-height:35px;
    $bottom-padding-top:5px;
    $operation-menu-height:40px;
    .content-top{
        position: absolute;
        top:0px;
        width: 100%;
        height: $content-top-height;
        line-height: $content-top-height;
        background: linear-gradient(to bottom, #f2f2f2, #e6e6e6, #f2f2f2);
        z-index: 120;
    }
    .operation-menu {
        position: absolute;
        top: $content-top-height;
        height: $operation-menu-height;
        line-height: $operation-menu-height;
        padding-left: 30px;
        width: 100%;

        /*background-color: #42b983;*/
        z-index: 120;
    }
    .content-main{
        position: absolute;
        width: calc(100% - 10px); /* 流下10px 给pading-left */
        top: $content-top-height + $operation-menu-height;
        bottom: $bottom-height + $bottom-padding-top;
        text-align: center;
        overflow-y: scroll;
        z-index: 120;
    }
    .content-bottom{
        position: absolute;
        bottom:0px;
        width: 100%;
        height: $bottom-height;
        padding-top: $bottom-padding-top;
        background: linear-gradient(to bottom, #f2f2f2, #e6e6e6, #f2f2f2);
        text-align: center;
        z-index: 120;
    }
    .el-breadcrumb {
        font-size: 14px;
        line-height:  $content-top-height;
        padding-left: 10px;
    }
</style>