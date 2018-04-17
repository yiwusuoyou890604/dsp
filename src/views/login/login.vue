<template>
    <div>
      <label for="user">账号</label><input type="text" id='user' v-model='username'>
      <label for="pwd">密码</label><input type="password" id='pwd' v-model='password'>
      <button @click='logins'>登录</button>
    </div>
</template>
<script>
import {login} from '../../untils/request.js'
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        logins(){
            login(this.username,this.password,'1').then(res=>{
                if(res.success==1){
                    this.$store.dispatch('login',this.username)
                    localStorage.setItem('token',JSON.stringify(res.token))
                    // location.href='http://localhost:8081/#/newAdvertisement'
                    // console.log(that)
                    // this.$router.push('/newAdvertisement')
                }
            })
        }
    }
};
</script>
<style>

</style>
