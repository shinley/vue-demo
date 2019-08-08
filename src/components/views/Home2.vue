<template>
    <div id="main">
        <div id="dHead">固定头部100px;</div>
        <div id="dBody">
            <div class="mycontent">
                <div class="sidebar">sidebar</div>
                <div class="content">
                    <div class="content-top"></div>
                    <div class="content-main">
                        头部<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>
                        内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>内容<br/>最后<br/>
                    </div>
                    <div class="content-bottom"></div>
                </div>
            </div>
        </div>
        <div id="dFoot">固定尾部100px</div>
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
        height: 100px;
        line-height: 100px;
        background: #690;
        width: 100%;
        position: absolute;
        z-index: 5;
        top: 0;
        text-align: center;
    }

    #dBody {
        background: #FC0;
        width: 100%;
        overflow: hidden;
        top: 100px;
        position: absolute;
        z-index: 10;
        bottom: 100px;
    }

    .mycontent {
        padding: 0px;
        height: 100%;
        display: flex;
    }

    .sidebar {
        flex: 0 0 200px;
        height: 100%;
        background: #BCE8F1;
    }

    .content {
        position: relative;
        flex: 1;
        height: 100%;
        background: #F0AD4E;
        z-index: 110;
    }

    #dFoot {
        height: 100px;
        line-height: 100px;
        background: #690;
        width: 100%;
        position: absolute;
        z-index: 200;
        bottom: 0;
        text-align: center;
    }
    .content-top{
        position: absolute;
        top:0px;
        width: 100%;
        height: 30px;
        background-color: aqua;
        z-index: 120;
    }
    .content-main{
        position: absolute;
        width: 100%;
        top: 30px;
        bottom: 30px;
        overflow: auto;
        z-index: 120;
    }
    .content-bottom{
        position: absolute;
        bottom:0px;
        width: 100%;
        height: 30px;
        background-color: aqua;
        z-index: 120;
    }
    .el-menu {
        border-right: 0px;
    }
</style>