<script lang="ts" setup>
import { getChallengens } from './getChallengen';

  const { fileAry } = getChallengens()
</script>

<template>
  <div id="nav">
      <router-link to="/"> 首页 </router-link> |
      <router-link v-for="path in fileAry" :key="path" :to="`/${path}`">
        {{path}}
      </router-link>
  </div>
  <router-view />
</template>