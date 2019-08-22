<template>
    <div class="content">
        <div class="content-top">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>流程管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
       <div class="button-list">

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
                                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="content-bottom">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @prev-click="prevClick"
                    @next-click="nextClick"
                    :page-size="pageSize"
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {getDeploymentList} from '../../api/api'
    import format from 'date-fns/format'
    export default {
        data() {
            return {
                tableData: [],
                total: 0,
                pageIndex: 1,
                pageSize: 10,
            }
        },
        mounted() {
            this.findDeployment(this.pageIndex);
        },
        methods: {
            prevClick(pageIndex) {
                if (pageIndex > 1) {
                    pageIndex--;
                } else {
                    return;
                }
                this.findDeployment(pageIndex);
            },
            nextClick(pageIndex) {
                let pageCount = (this.total + this.pageSize - 1)/this.pageSize;
                if (pageIndex >= pageCount) {
                    return;
                } else {
                    pageIndex--;
                }

                this.findDeployment(pageIndex);
            },
            findDeployment(pageIndex, keyword="") {
                getDeploymentList({pageIndex: pageIndex, pageSize: this.pageSize, keyword: keyword}).then(resp => {
                    let  data  = resp.data;
                    this.tableData = data.list;
                    this.total = data.total;
                });
            },
            formatDate(vrow, column, cellValue) {
                let d = format(cellValue, "yyyy-MM-dd hh:mm:ss");
                return d;
            }
        }
    }
</script>
<style lang="scss">
    $content-top-height: 40px;
    $bottom-height:35px;
    $bottom-padding-top:5px;
    .content-top{
        position: absolute;
        top:0px;
        width: 100%;
        height: $content-top-height;
        line-height: $content-top-height;
        background: linear-gradient(to bottom, #f2f2f2, #e6e6e6, #f2f2f2);
        z-index: 120;
    }
    .content-main{
        position: absolute;
        width: calc(100% - 10px); /* 流下10px 给pading-left */
        top: $content-top-height;
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
    .el-breadcrumb {
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        left:10px;
    }
</style>