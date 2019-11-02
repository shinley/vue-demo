<template>
    <div class="header">
        <el-dropdown split-button type="primary" @command="handleCommand">
            {{currentUser}}
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import { requestLogout } from '@/api/api';
    export default {
        name: "Header",
        data() {
            return {
                currentUser:"zhangsan"
            }
        },
        methods: {
            handleCommand (command) {
                if (command == 'logout') {
                    requestLogout().then(resp => {
                        let { message, code, data } = resp;
                        if (code !== 200 || !data) {
                            this.$message({
                                message: '退出失败!',
                                type: 'error'
                            });
                        } else {
                            sessionStorage.removeItem('user');
                            this.$router.push({ path: '/login' });
                        }
                    });
                }

            }
        }
    }
</script>

<style scoped>
    .header {
        position: absolute;
        right: 30px;
    }
</style>