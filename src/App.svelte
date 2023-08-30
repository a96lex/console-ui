<script lang="ts">
  import SortlistBadge from "./lib/SortlistBadge.svelte";
  import UserForm from "./lib/UserForm.svelte";
  import PreviewContainer from "./lib/previews/PreviewContainer.svelte";
</script>

<main>
  <UserForm />
  <PreviewContainer />
  <SortlistBadge />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 0;
  }
</style>
