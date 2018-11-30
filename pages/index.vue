<template>
  <div>
    <h1 v-text="title" />
    <input v-model="input" />
    <pre v-text="reversed" />
    <p v-text="ui.left.getToggle.name" />
    <p v-text="gamer.getParameters" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { reverseString } from '~/core/utils';
import { Orientation, UiStore } from '~/components/ui/ui';
import pkg from '~/package.json';
import {Gamerno} from '~/components/gamerno/gamer';
@Component
export default class extends Vue {

  public gamer = new Gamerno();
  public ui = new UiStore();
  public input = 'TypeScript';

  public data() {
    return {
      title: pkg.title, description: pkg.description,
    };
  }
  get reversed(): string {
    return reverseString(this.input);
  }
}
</script>
