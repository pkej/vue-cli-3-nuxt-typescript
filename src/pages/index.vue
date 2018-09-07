<template>
  <section>
    <mobx-test/>
    <div>
      <h1 v-text="title"/>
      <v-ts-file/>
      <v-tsx-file/>
      <v-ts-lang/>
      <v-tsx-lang/>
      <div>
        <h1>Pages written using lang="..."</h1>
        <LangPossibilites>
          <li><nuxt-link to="/lang-possibilities">Go to <tt>/lang-possibilities</tt></nuxt-link></li>
        </LangPossibilites>
      </div>
      <ul/>
      <v-reverse/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import vReverse from '@/components/reverse.vue'
import vTsFile from '@/components/ts-file'
import vTsLang from '@/components/ts-lang.vue'
import vTsxFile from '@/components/tsx-file'
import vTsxLang from '@/components/tsx-lang.vue'
import MobxTest from '~/components/mobxtest/MobxTest.vue'
import LangPossibilites from '@/pages/lang-possibilities/index.vue'

@Component({
  components: {
    vReverse,
    vTsFile,
    vTsLang,
    vTsxFile,
    vTsxLang,
    MobxTest,
    LangPossibilites,
  },
})
export default class extends Vue {
  title: string = 'Hello world'
}
</script>
