/* eslint-disable semi */
<template>
  <div class="login__content">
    <form @submit.prevent="register" class="form">
      <div class="form__container">
        <h2 class="form__title">Fazer o login</h2>
        <input type="email" class="input__login" required v-model="email" placeholder="E-mail">
        <input required type="password" v-model="password" class="input__login" placeholder="Senha">
        <button @click="login" class="btn">Entrar</button>
        <p class="description__create">
          Criar conta
          <router-link to="/signup">Aqui</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line semi
import firebase from 'firebase';
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('home')
            // eslint-disable-next-line no-undef
            alert(`Welcome, ${{ email }}`)
          },
          // eslint-disable-next-line handle-callback-err
          err => {
            alert('Não foi possivel realizar login. ')
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
  margin: 10px;
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
