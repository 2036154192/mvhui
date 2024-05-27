<template>
  <button class="mu-button" :class="buttonStyle"><slot></slot></button>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import './style/index.less'
defineOptions({name:"mu-button"})
type ButtonProps = {
  type:String,
  default:''
}
const buttonProps = defineProps<ButtonProps>()
const buttonStyle = computed(()=>{
  return {[`mu-button--${buttonProps.type}`]:buttonProps.type}
})
</script>