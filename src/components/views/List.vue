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
                        prop="name"
                        label="部署名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="deploymentTime"
                        label="部署日期"
                        sortable
                        width="180"
                        column-key="date"
                >
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        :formatter="formatter">
                </el-table-column>
                <el-table-column
                        prop="tag"
                        label="标签"
                        width="100"
                        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                                disable-transitions>{{scope.row.tag}}</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="content-bottom">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {getDeploymentList} from '../../api/api'
    export default {
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            getDeploymentList().then(resp => {
                let  data  = resp.data;
                this.tableData = data;
            });
        },
        methods: {
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            formatter(row) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
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