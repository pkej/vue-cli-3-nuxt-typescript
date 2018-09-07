<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

@Component
export default class InternalLayout extends Vue {
  render(h: CreateElement): VNode {
    return (
      <div className="container">
        <h1>Internal.tsx layout</h1>
        <nuxt />
        <nuxt-link to="/">Back</nuxt-link>
      </div>
    )
  }
}
</script>
