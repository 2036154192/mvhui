<template>
  <div :class="buttonGroupClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from '@vue/runtime-core'
import {buttonGroupProps} from './buttonGroup-type'
import './style/index.less'
defineOptions({name:'mu-button-group'})
const props = defineProps(buttonGroupProps)
const { direction } = toRefs(props)
const buttonGroupClass = computed(()=> [
  'mu-button-group',
  `mu-button-group--${direction.value}`,
])

</script>