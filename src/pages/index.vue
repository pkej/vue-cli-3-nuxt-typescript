<template>
  <section class="container">
    <mobx-test/>
      <div>
        <h1 v-text="title"/>
        <v-ts-file/>
        <v-tsx-file/>
        <v-ts-lang/>
        <v-tsx-lang/>
        <ul>
          <li><nuxt-link to="/file-ts">File with .ts extension</nuxt-link></li>
          <li><nuxt-link to="/file-tsx">File with .tsx extension</nuxt-link></li>
          <li><nuxt-link to="/lang-ts">Page with lang="ts"</nuxt-link></li>
          <li><nuxt-link to="/lang-tsx">Page with lang="tsx"</nuxt-link></li>
        </ul>
        <v-reverse/>
      </div>
  </section>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import vReverse from "../components/reverse.vue";
import vTsFile from "../components/ts-file";
import vTsLang from "../components/ts-lang.vue";
import vTsxFile from "../components/tsx-file";
import vTsxLang from "../components/tsx-lang.vue";
import MobxTest from "~/components/mobxtest/MobxTest.vue";

@Component({
  components: {
    vReverse,
    vTsFile,
    vTsLang,
    vTsxFile,
    vTsxLang,
    MobxTest
  }
})
export default class extends Vue {}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
