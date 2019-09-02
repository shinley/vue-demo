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
                    title="预估结果"
                    :visible.sync="drawer"
                    :direction="direction"
                    modal
                    append-to-body="false"
                    modal-append-to-body="false"
                    :before-close="handleClose">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="最高价:" align="left">
                        {{prediction.highestPrice}}
                    </el-form-item>
                    <el-form-item label="次高价:" align="left">
                        {{prediction.secondHighPrice}}
                    </el-form-item>
                    <el-form-item label="次低价:" align="left">
                        {{prediction.secondLowPrice}}
                    </el-form-item>
                    <el-form-item label="最低价:" align="left">
                        {{prediction.lowestPrice}}
                    </el-form-item>

                </el-form>
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
                    highestPrice: '',
                    secondHighPrice: '',
                    secondLowPrice: '',
                    lowestPrice: ''
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
                    let {code, data}= resp;
                    console.log(code)
                    console.log(code==200)
                    console.log(code===200)
                    if (code == 200)  {
                        this.prediction = data;
                        this.drawer = true;
                    }
                    console.log("帛屉")
                    console.log(this.prediction)
                });
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
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