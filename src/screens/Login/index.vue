<template>
  <div class="loginContainer">
    <div v-if="invalidCredentials" class="invalidCredentials">Invalid Credentials</div>
    <label>
      <input type="text" name="username" ref="username" v-model="username"/>
    </label>
    <label>
      <input type="password" name="password" ref="password" v-model="password"/>
    </label>
    <Button class="submitButton" text="Giriş Yap" @onButtonClick="onLogin"/>
  </div>
</template>

<script>
	import Button from '../../components/Button'
	import authService from "../../services/authService";

	export default {
		name: "Login",
    components: {
			Button
    },
		props: {

		},
		data() {
			return {
				invalidCredentials: false,
        username: "",
        password: ""
      };
		},
		methods: {
			onLogin: async function () {
				let payload = {
					username: this.username,
					password: this.password,
				};
				this.invalidCredentials = false;

				let res = await authService.login({payload});
				if(res.data.success){
					this.$emit("onLogin", res.data);
				}
				else{
					this.invalidCredentials = true;
					console.error("invalid credentials for login");
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
  .loginContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    margin: auto;
    & .invalidCredentials{
      width: 100%;
      color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
    }
    & label{
      width: 100%;
      height: 40px;
      & input{
        width: 100%;
        height: 40px;
      }
      &:not(:first-child){
        margin-top: 16px;
      }
    }
    & .submitButton{
      margin-top: 16px;
      margin-left: auto;
      width: 120px;
    }
  }
</style>

