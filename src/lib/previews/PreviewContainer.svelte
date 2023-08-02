<script>
  import { previewData } from "../../stores/UserData";
  import Preview from "./Preview.svelte";
</script>

{#each $previewData as data}
  <Preview {data} />
{/each}
