<script lang="ts">
  import UserForm from "./lib/UserForm.svelte";
  import PreviewContainer from "./lib/previews/PreviewContainer.svelte";
</script>

<main>
  <UserForm />
  <PreviewContainer />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }
</style>
