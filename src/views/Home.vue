<template>
  <div class="home">
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post">
        <p>
          <strong>{{post.title}}</strong>
        </p>
        <p>{{post.body}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li :key="error" v-for="error of errors">{{error.message}}</li>
    </ul>
    <button @click="sair" class="btn">Sair</button>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line semi
import firebase from 'firebase';
// eslint-disable-next-line semi

// eslint-disable-next-line semi
import axios from 'axios';

export default {
  name: 'home',

  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created () {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    sair () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login')
        })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
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

ul {
  list-style-type: none;
}

p {
  padding: 10px;
}
.home {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  max-width: 960px;
}
</style>
