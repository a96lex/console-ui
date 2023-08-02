<script lang="ts">
  export let data: IPreviewData;
</script>

<div>
  <span>{data.message}</span>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 25%;

    background-color: var(--background-color);

    // margin: 1em;
    padding: 1em;
    border-radius: 0.5em;

    box-shadow: 0 0 1rem -0.4rem var(--primary);

    // have newlines be breaks
    white-space: pre-wrap;

    margin: 0;
  }
</style>
