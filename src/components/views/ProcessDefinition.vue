<template>
    <div class="content">
        <div class="content-top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>流程管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="operation-menu">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="keyword" size="mini" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search" size="mini" icon="el-icon-search">搜索</el-button>
                </el-form-item>
            </el-form>
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
                        prop="key"
                        label="KEY"
                />
                <el-table-column
                        align="center"
                        prop="deploymentId"
                        label="部署ID"
                />
                <el-table-column
                        align="center"
                        prop="name"
                        label="部署名称"
                />
                <el-table-column
                        align="center"
                        prop="version"
                        label="版本"
                        sortable
                />
                <el-table-column
                        fixed="right"
                        label="流程图"
                        align="center"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="showProcessDefinitionImg(scope.row)" type="text" size="small">查看流程图</el-button>
                    </template>
                </el-table-column>
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
        <el-dialog title="流程图" :modal-append-to-body='false'
                   center
                   :visible.sync="dialogFormVisible" modal>
            <el-image
                    style="margin: 0 auto;"
                    :src="url"
                    :fit="fit"></el-image>
        </el-dialog>
    </div>
</template>

<script>
    import {getProcessDefinitionList, removeProcessDefinition} from '../../api/api'
    import format from 'date-fns/format'
    import config from '../../config/app.config'
    export default {
        data() {
            return {
                tableData: [],
                total: 0,
                pageIndex: 1,
                pageSize: 10,
                keyword: '',
                dialogFormVisible: false,
                form: {
                    deployName: '',
                    file: '',
                },
                formLabelWidth: '80px',
                formData: null,
                fit: 'contain',
                url: ''
            }
        },
        mounted() {
            this.findProcessDefinition(this.pageIndex);
        },
        methods: {
            handleCurrentChange(pageIndex) {
                this.findProcessDefinition(pageIndex);
            },
            deploy() {

            },
            showProcessDefinitionImg(row) {
                this.dialogFormVisible = true;
                this.url= config.baseURL + 'activiti/prodefinition/viewpic?deploymentId=' + row.deploymentId + "&imageName=" + row.diagramResourceName
            },
            handleDelete(index, row) {
                let deploymentId = row.deploymentId;
                removeProcessDefinition({deploymentId: deploymentId}).then(resp => {
                    let {code, data} = resp;
                    if (code == 200 && data) {
                        this.notice("删除成功!")
                        this.findProcessDefinition(this.pageIndex);
                    } else {
                        this.notice("删除失败！", 'error')
                    }
                });

            },
            search() {
                this.findProcessDefinition(this.pageIndex, this.keyword);
            },
            formatDate(vrow, column, cellValue) {
                let d = format(cellValue, "yyyy-MM-dd hh:mm:ss");
                return d;
            },
            notice(text, type='success') {
                this.$message({
                    message: text,
                    type: type
                });
            },
            findProcessDefinition(pageIndex, keyword="") {
                getProcessDefinitionList({pageIndex: pageIndex, pageSize: this.pageSize, keyword: keyword}).then(resp => {
                    let  data  = resp.data;
                    this.tableData = data.list;
                    this.total = data.total;
                });
            },
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