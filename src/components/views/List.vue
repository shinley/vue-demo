<template>
    <div class="content">
        <div class="content-top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>流程管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="operation-menu">
            <el-button type="primary" size="mini" @click="dialogFormVisible = true">新增部署</el-button>
        </div>
        <div class="content-main">
            <el-table
                    ref="filterTable"
                    :data="tableData"
                    height="100%"
                    style="width: 100%">
                <el-table-column
                        align="center"
                        prop="id"
                        label="ID"
                />
                <el-table-column
                        align="center"
                        prop="name"
                        label="部署名称"
                />
                <el-table-column
                        align="center"
                        prop="category"
                        label="分类"
                />
                <el-table-column
                        align="center"
                        prop="deploymentTime"
                        label="部署日期"
                        sortable
                        column-key="date"
                        :formatter="formatDate"
                />
                <el-table-column
                        fixed="right"
                        align="center"
                        label="操作"
                        >
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="content-bottom">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :page-size="pageSize"
                    :total="total">
            </el-pagination>
        </div>
        <!--dialog-->
        <el-dialog title="收货地址" :modal-append-to-body='false' :visible.sync="dialogFormVisible" modal>
            <el-form :model="form" enctype="multipart/form-data" >
                <el-form-item label="部署名称" :label-width="formLabelWidth">
                    <el-input v-model="form.deployName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="部署文件" :label-width="formLabelWidth">
                    <input name="file" @change="getFile($event)" type="file"/>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="deploy">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {deployZip, getDeploymentList} from '../../api/api'
    import format from 'date-fns/format'
    // import Qs from 'qs';
    export default {
        data() {
            return {
                tableData: [],
                total: 0,
                pageIndex: 1,
                pageSize: 10,
                dialogFormVisible: false,
                form: {
                    deployName: '',
                    file: '',
                },
                formLabelWidth: '80px',
                formData: null,
            }
        },
        mounted() {
            this.findDeployment(this.pageIndex);
        },
        methods: {
            handleCurrentChange(pageIndex) {
                this.findDeployment(pageIndex);
            },
            findDeployment(pageIndex, keyword="") {
                getDeploymentList({pageIndex: pageIndex, pageSize: this.pageSize, keyword: keyword}).then(resp => {
                    let  data  = resp.data;
                    this.tableData = data.list;
                    this.total = data.total;
                });
            },
            deploy() {
                let param = new FormData();
                param.append('deploymentName', this.form.deployName);
                param.append('file', this.form.file);
                deployZip(param).then(resp=>{
                    if (resp.code == 200) {
                        // 关闭弹窗
                        this.dialogFormVisible = false;
                        // 通知
                        this.$message({
                            message: '添加成功!',
                            type: 'success'
                        });
                        // 刷新页面
                        this.findDeployment(this.pageIndex, this.keyword);
                    }
                });
            },
            getFile(event) {
                this.form.file = event.target.files[0];

            },
            formatDate(vrow, column, cellValue) {
                let d = format(cellValue, "yyyy-MM-dd hh:mm:ss");
                return d;
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
        /*padding-top:10px;*/
        /*padding-bottom:10px;*/
        text-align: center;
        overflow-y: scroll;
        /*background-color: #f2f2f2;*/
        z-index: 120;
    }
    .content-bottom{
        position: absolute;
        bottom:0px;
        width: 100%;
        height: $bottom-height;
        padding-top: $bottom-padding-top;
        /*background-color: #e6e6e6;*/
        background: linear-gradient(to bottom, #f2f2f2, #e6e6e6, #f2f2f2);
        text-align: center;
        z-index: 120;
    }
</style>