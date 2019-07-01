<template>
  <div class="login__content">
    <form @submit.prevent="register" class="form">
      <div class="form__container">
        <h2 class="form__title">Crie sua conta</h2>
        <input type="email" class="input__login" required v-model="email" placeholder="E-maill">
        <input required type="password" v-model="password" class="input__login" placeholder="Senha">
        <button @click="signUp" class="btn">Cadastrar</button>
        <p class="description__create">
          Fazer login
          <router-link to="/login">Login</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line semi
import firebase from 'firebase';
export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('home')
          },
          err => {
            alert('Aconteceu algo inesperado. ' + err.message)
          }
        )
    }
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.login__content {
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.form {
  background-image: -webkit-linear-gradient(top, #7579ff, #b224ef);
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
}

.form__title {
  color: #fff;
  display: block;
  font-family: Poppins-Medium;
  font-size: 30px;
  padding: 27px 0 34px;
  text-align: center;
  text-transform: uppercase;
}

.input__login {
  display: block;
  margin-top: 25px;
  padding: 15px;
  width: 300px;
  border-radius: 10px;
}

.btn {
  background: white;
  border-radius: 25px;
  color: #555;
  display: flex;
  font-family: Poppins-Medium;
  font-size: 16px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  margin: 0 auto;
  min-width: 200px;
  margin-top: 50px;
  cursor: pointer;
}

.description__create {
  margin-top: 20px;
  color: white;
}

@media screen and (max-width: 600px) {
  .form {
    width: 350px;
  }
}
</style>
