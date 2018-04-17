<template>
    <div id="app">
        <div class="left">
            <div class="newguanggao">
                <span class='add'>+</span>
                <router-link to='/newAdvertisement'>新建广告</router-link>
            </div>
            <div class="nav">
                <el-container style="height: 500px">
                    <el-aside width="240px" style="background-color: rgb(2,32,80)">
                        <el-menu :default-openeds="['1']">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <router-link to='/home' >首页概览</router-link>
                                    
                                </template>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-edit-outline"></i>广告管理</template>
                                <el-menu-item-group>
                                    <el-menu-item index="2-1"><router-link to='/plan' >广告计划</router-link></el-menu-item>
                                    <el-menu-item index="2-2"><router-link to='/unit' >广告单元</router-link></el-menu-item>
                                    <el-menu-item index="2-3"><router-link to='/origin' >广告创意</router-link></el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title">
                                    <i class="el-icon-sort"></i>
                                    <router-link to='/datac' >数据中心</router-link>
                                </template>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <router-link to='/tool' >工具箱</router-link>
                                </template>
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                </el-container>
            </div>
        </div>
        <div class="right">
            <div class='headers'>
                <span class='sp'>
                    <i class='iconfont icon-liebiao'></i>
                </span>
                <div class='money'>
                    <i class='iconfont icon-wodehongbao'></i>
                </div>
                <div class='tishi'>
                    <i class='iconfont icon-tishi'></i>
                </div>
                <div class="msg">
                    <p class='names'>
                        {{F5}}
                    </p>
                    <p class='nameid'>
                        账户ID:<span>123</span>
                    </p>
                </div>
            </div>
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
  name: "App",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
      data:''
    };
  },
  computed:{
      F5(){
              return this.$store.state.data  
      }
  }
};
</script>
<style lang='less'>
* {
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
  .left {
    width: 240px;
    height: 100%;
    background: #022050;
    .newguanggao {
      width: 240px;
      height: 54px;
      line-height: 54px;
      margin-top: 97px;
      background: #095add;
      color: #fff;
      padding-left: 24px;
      margin-bottom: 32px;
      .add {
        font-size: 20px;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .right {
    flex: 1;
    .headers{
        width:100%;
        height:64px;
        border-bottom:1px solid #ccc;
        position: relative;
        .sp{
            position:absolute;
            top:10px;
            left:0;
            display:block;
            width:38px;
            height:42px;
            line-height:42px;
            border:1px solid #ccc;
            border-radius: 0 5px 5px 0;
            text-align: center;
            color:#595959
        }
        .money,.tishi{
            width:58px;
            height:64px;
            text-align: center;
            float:left;
            i{
                font-size:26px;
                text-align: center;
                line-height:64px;
            }
        }
        .money{
            margin-left:78.67%;
        }
        .msg{
            padding:10px 0 0 5px;
            .nameid{
                font-size:14px;
            }
        }
    }
  }
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-submenu__title {
  background: #022050;
  color: #888;
  a {
    text-decoration: none;
    color: #999;
  }
}
.el-menu {
  background: #022050;
  .el-menu-item-group {
    ul {
      .el-menu-item {
        a {
          color: #bbb;
          text-decoration: none;
        }
      }
    }
  }
}
.el-aside {
  color: #ccc;
}
</style>
