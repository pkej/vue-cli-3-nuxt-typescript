<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class TypeScriptPossibility extends Vue {
  // DOES NOT WORK :(
  // layout: string = 'internal'

  render(h: CreateElement): VNode {
    return h('h1', 'Page component with lang="ts"')
  }
}
</script>
