<template>
  <button :class="buttonStyle" :disabled="disabled || loading"><slot></slot></button>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import './style/index.less'
import { buttonProps } from './button-type';
defineOptions({name:"mu-button"})

const props = defineProps(buttonProps)
const { type, size, disabled, round ,plain,text,loading} = toRefs(props)

const buttonStyle = computed(()=>{
  return [
    'mu-button',
    `mu-button--${type.value}`,
    `mu-button--${size.value}`,
    disabled.value ? "is-disabled" : "",
    round.value ? 'is-round' : '',
    plain.value ? 'is-plain' : '',
    text.value ? 'is-text' : '',
    loading.value ? 'is-loading' : ''
  ]
})
</script>