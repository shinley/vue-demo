<template>
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
            <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
                <el-form-item label="开盘价">
                    <el-input size="mini" style="width: 100px;" v-model="form.openPrice"></el-input>
                </el-form-item>
                <el-form-item label="最高价">
                    <el-input size="mini" style="width: 100px;" v-model="form.heighPrice"></el-input>
                </el-form-item>
                <el-form-item label="最低">
                    <el-input size="mini" style="width: 100px;" v-model="form.lowPrice"></el-input>
                </el-form-item>
                <el-form-item label="收盘价">
                    <el-input size="mini" style="width: 100px;" v-model="form.closePrice"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="checkoutTest">预估</el-button>
                    <el-button @click.native.prevent>取消</el-button>
                </el-form-item>
            </el-form>

            <el-drawer
                    title="我是标题"
                    :visible.sync="drawer"
                    :direction="direction"
                    :before-close="handleClose">
                <span>我来啦!</span>
            </el-drawer>
        </div>
    </div>
</template>

<script>
    import {selfPrediction} from '../../api/api'
    export default {
        data() {
            return {
                drawer: false,
                direction: 'rtl',
                form: {
                    openPrice: '',
                    heighPrice: '',
                    lowPrice: '',
                    closePrice: ''
                },
                prediction: {

                }

            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            checkoutTest() {
                selfPrediction(this.form).then(resp => {
                    //NProgress.done();
                    let {code, data}= resp.data;
                    if (code == 200)  {
                        this.prediction = data;
                        this.drawer = true;
                    }
                    console.log(this.prediction)
                });
            }

        }
    }
</script>
<style>
    .content-top{
        position: absolute;
        top:0px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        /*background-color: #f2f2f2;*/
        background: linear-gradient(to bottom, #f2f2f2, #e6e6e6, #f2f2f2);
        z-index: 120;
    }
    .content-main{
        position: absolute;
        width: calc(100% - 10px); /* 流下10px 给pading-left */
        top: 40px;
        bottom: 40px;
        /*padding-top:10px;*/
        /*padding-bottom:10px;*/
        text-align: left;
        overflow-y: scroll;
        /*background-color: #f2f2f2;*/
        z-index: 120;
    }
    .content-bottom{
        position: absolute;
        bottom:0px;
        width: 100%;
        height: 35px;
        padding-top: 5px;
        /*background-color: #e6e6e6;*/
        background: linear-gradient(to bottom, #f2f2f2, #e6e6e6, #f2f2f2);
        text-align: center;
        z-index: 120;
    }
    .el-breadcrumb {
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        left:10px;
    }
</style>