<script lang="ts">
  import Modal from "../Modal.svelte";

  export let data: IPreviewData;
  let showModal = false;
</script>

<div>
  <span>{data.message}</span>
  <button on:click={() => (showModal = true)}>
    Show profile information
  </button>
  <Modal bind:showModal>
    <h2>Profile information</h2>

    <h3>Person</h3>

    <!-- horizontal line -->

    {#each Object.keys(data.profile.person) as key}
      <strong>{key}:</strong>
      {data.profile.person[key]}
      <br />
    {/each}

    <h3>Company</h3>

    {#each Object.keys(data.profile.company) as key}
      <strong>{key}:</strong>
      {data.profile.company[key]}
      <br />
    {/each}
  </Modal>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 25%;

    background-color: var(--background-color);

    // margin: 1em;
    padding: 1em;
    border-radius: 0.5em;

    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

    // have newlines be breaks
    white-space: pre-wrap;

    margin: 0;
  }

  strong {
    text-transform: capitalize;
  }

  button {
    padding: 10px 20px;
    background-color: var(--primary);
    color: var(--background);
    font-weight: bold;
    width: 100%;
    padding: 1em 0;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
  }
</style>
