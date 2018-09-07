<template>
  <div>
    <input
      v-model="input"
      @change="onInputChanged"
    >
    <pre v-text="reversed"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Provide } from 'nuxt-property-decorator'
import { reverseString } from '../core/utils'

@Component
export default class extends Vue {
  @Provide('input') input: string = 'Typescript'
  @Provide('reversed') reversed: string = reverseString('Typescript')

  @Watch('input', { immediate: true })
  onInputChanged(val: string, oldVal: string) {
    // Does not work. Abandonned.
    console.log('onInputChanged', val)
    const reversed = reverseString(val)
    this.reversed = 'computed: ' + reversed
  }
}
</script>
