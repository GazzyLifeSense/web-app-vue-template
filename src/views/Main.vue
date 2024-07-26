<script setup lang="ts">
import { ref } from 'vue'
import { Button, Select, SelectOption } from 'ant-design-vue';
import { useUserStore } from '@/store/user';
import { useI18n } from '@/hooks/useI18n.ts';
import { useConfigOptionStore } from '@/store/configOption.ts';
import { localeMap, changeLocale } from '@/locales/setupI18n'
const { t } = useI18n()
const configOptionStore = useConfigOptionStore()
defineProps<{ msg: string }>()

const count = ref(0)
const userStore = useUserStore()
const langKey = ref('')
</script>

<template>
  <div class="main-container">
    <h1>Welcome to {{ msg }}, {{ userStore.user._id }}!</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <span>
        Edit
        <code>views/Main.vue</code> to test HMR
      </span>
      <p>
        <h2>I18n Test: </h2>
        Sample Text: <Button>{{ t("common.loadingText") }} </Button><br/>
        Current UserSetting Language: <Button>({{ configOptionStore.language }})</Button>
        Switch: 
        <Select
          ref="select"
          v-model:value="langKey"
          style="width: 120px"
        >
          <SelectOption v-for="key of Object.keys(localeMap)" :value="key" :key="key" @click="changeLocale(localeMap[key])">{{ localeMap[key] }}</SelectOption>
        </Select>
      </p>
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
