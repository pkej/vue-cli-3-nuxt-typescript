<template>
    <section>
        <p v-text="state.age"></p>
        <p v-text="state.computedAge"></p>
        <p v-for="user in state.users" :key="user.name">{{user.name}}</p>
        <button @click="state.setAge()">increase age</button>
    </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Observer } from "mobx-vue";
import MobxTestModel from '~/components/mobxtest/MobxTestModel'

@Observer
@Component
export default class MobxTest extends Vue {
  state = new MobxTestModel();
  mounted() {
    this.state.fetchUsers();
  }
}
</script>
