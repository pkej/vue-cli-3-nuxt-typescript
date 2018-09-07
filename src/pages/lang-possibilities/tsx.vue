<script lang="tsx">
import Vue, { CreateElement, VNode } from 'vue'

const VueExtendRender = Vue.extend({
  render(h: CreateElement): VNode {
    return <h1>Page component with lang="tsx"</h1>
  },
})

export default class TsxPossibility extends VueExtendRender {
  // DOES NOT WORK :(
  // layout: string = 'internal'
}
</script>
