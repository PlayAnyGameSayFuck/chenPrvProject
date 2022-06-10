<template>
  <div class="login">
    <table class="table">
            <thead>
                <tr class="login_way">
                    <td colspan="4">账号密码登陆</td>
                </tr>
                <tr>
                    <td colspan="4"><hr/></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="4">
                        <input type="text" v-model="username" placeholder="账号" />
                    </td>
                <tr>
                    <td colspan="4">
                        <input type="text" v-model="password" placeholder="密码" />
                    </td>
                </tr>
                <tr>
                    <td colspan="4"><hr/></td>
                </tr>
                <tr>
                    <td colspan="4"><button class="loginBtn" @click="login()">登陆</button></td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data(){
    return {
        username: '',
        password: '',
        usernameLength: 0,
        passwordLength: 0,
        acount: '',
        pwd: '',
        token: '',
        // lh$mqlezGimMmt:![a\/f1`UmXdm1j{5
    }
  },
  created(){
  },
  methods: {
      login(){
          if(this.acount === ''){
              layer.msg('请填写账号！', {icon:2, time:1500});
              return ;
          }
          if(this.pwd === ''){
              layer.msg('请填写密码！', {icon:2, time:1500});
              return ;
          }
          let uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
          if(!uPattern.test(this.acount)){
              layer.msg('账号长度必须在 4-16 位，必须为字母数字下划线或减号！');
              return ;
          }
          let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
          if(!pPattern.test(this.pwd)){
              layer.msg('密码强度不够， 密码长度必须在 6-64 位，且至少包含1个大写字母，1个小写字母，1个数字，1个特殊符号');
              return ;
          }
          this.$http({
            method: 'post',
            url: '/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "acount": this.acount,
                "password": this.pwd,
            }),
          }).then(function(response){
            sessionStorage.setItem('token', response.data.obj.token);
            layer.msg("登陆成功！", {icon:1, time: 1500});
          }).catch(function(error){
            layer.msg("服务器异常了--" + error, {icon:2, time:1500});
          })
      }
  },
  mounted(){
  },
  watch: {
      username(newVal){
          if(this.usernameLength<this.username.length){
              // 添加内容
              this.acount += newVal.substring(this.usernameLength, this.username.length);
          }
          if(this.usernameLength>this.username.length){
              // 删除内容
              this.acount = this.acount.substring(0, this.username.length);
          }
          this.usernameLength = this.username.length;          
          this.acount = this.username.replace(/ /g,'');
      },
      password(newVal){
          if(this.passwordLength<this.password.length){
              // 添加内容
              this.pwd += newVal.substring(this.passwordLength, this.password.length);
          }
          if(this.passwordLength>this.password.length){
              // 删除内容
              this.pwd = this.pwd.substring(0, this.password.length);
          }
          this.passwordLength = this.password.length;
          this.password = '';
          for(var i=0;i<this.passwordLength;i++){   
              this.password += '*';
          }
      }
  }
}
</script>

<style scoped="scoped">
* {
  user-select: none;
}
.login {
    background-color: white;
    color: black;
    width: 100%;
    height: 100%;
    border: 1px solid #efefef;
    box-shadow: 1px 1px 1px #efefef;
    padding-top: 25px;
    display: block;
    background: #fff;
    color: #666;
    font-size: 12px;
}
.login_way {
    font-size: 16px;
    color: #000;
    margin-top: 0;
    margin-bottom: 15px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-family: "Microsoft Yahei","微软雅黑",Arial,STHeiti;
    border: 1px solid #efefef;
}
table {
    border: 0px;
    text-align: center;
    width: 100%;
}
table td {
    width: 120px;
    padding-top: 8px;
}
.radio {
    cursor: pointer;
}
tbody input {
    width: 80%;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    position: relative;
    z-index: 17;
    display: block;
    padding: 10px 8px;
    line-height: 20px;
    border: 1px solid #dedede;
    color: #666;
    transition: .3s;
    font-family: Tahoma,Helvetica,"Microsoft Yahei","微软雅黑",Arial,STHeiti;
    margin-left: 10%;
}
.loginBtn {
    font-size: 14px;
    font-weight: 800;
    border: 0;
    color: #fff;
    cursor: pointer;
    width: 302px;
    height: 40px;
    line-height: 40px;
    background: #2e82ff;
    border-radius: 2px;
    -webkit-appearance: none;
    box-sizing: content-box;
    margin-top: 20px;
    padding: 0;
    list-style: none;
    text-align: center;
    font-family: Arial,"宋体";
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-rendering: auto;
    -webkit-rtl-ordering: logical;
}
</style>