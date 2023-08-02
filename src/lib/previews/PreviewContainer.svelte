<script>
  import { previewData } from "../../stores/UserData";
  import Preview from "./Preview.svelte";
</script>

<section class="preview-container">
  {#each $previewData as data}
    <Preview {data} />
  {/each}
</section>

<style lang="scss">
  .preview-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
