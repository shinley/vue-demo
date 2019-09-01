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
                <el-form-item label="股票代码">
                    <el-input v-model="form.name" align="left"></el-input>
                </el-form-item>
                <el-form-item label="股票名称">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="最高价">

                </el-form-item>
                <el-form-item label="次高价">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="次低价">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="最低价">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="预测日期">
                    2019-08-31
                </el-form-item>
            </el-form>
        </div>
        <div class="content-bottom">
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
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