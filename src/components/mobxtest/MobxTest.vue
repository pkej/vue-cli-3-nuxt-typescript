<template>
    <section>
        <p v-text="state.age"></p>
        <p v-text="state.computedAge"></p>
        <p v-for="user in state.users" :key="user.name">{{user.name}}</p>
        <button v-on:click="state.setAge()">increase age</button>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import { Observer } from "mobx-vue";
import MobxTestModel from './MobxTestModel'

@Observer
@Component
export default class MobxTest extends Vue {
  state = new MobxTestModel();
  mounted() {
    this.state.fetchUsers();
  }
}
</script>
