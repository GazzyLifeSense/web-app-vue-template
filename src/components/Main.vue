<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user';
defineProps<{ msg: string }>()

const count = ref(0)
const userStore = useUserStore()
</script>

<template>
  <div class="main-container">
    <h1>Welcome to {{ msg }}, {{ userStore.user._id }}!</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <span>
        Edit
        <code>components/Main.vue</code> to test HMR
      </span>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
      , the official Vue + Vite starter
    </p>
    <p>
      <img src="@/assets/vue.svg" alt="vue" />
      <img src="@/assets/vite.svg" alt="vite" />
      <img src="@/assets/pinia.svg" alt="pinia">
      <router-link to="NotFound">Friendly 404 Page</router-link></p>
  </div>
</template>

<style lang="less" scoped>
.main-container{
  padding: 2em;
}
img{
  width: 30px;
}
</style>
