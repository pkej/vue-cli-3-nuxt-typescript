<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in possibilities"
        :key="index"
      >
        <nuxt-link :to="locationObjFor(item)">{{ item }}</nuxt-link>
      </li>
      <slot />
    </ul>
  </div>
</template>

<script>
const scaffold = name => ({
  path: `/lang-possibilities/${name}`,
})

export default {
  layout: 'internal',
  computed: {
    possibilities() {
      const possibilities = ['default', 'ts', 'tsx']

      return [...possibilities]
    },
  },
  methods: {
    locationObjFor(possibility) {
      return Object.assign({}, scaffold(possibility))
    },
  },
}
</script>
