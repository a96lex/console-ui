<script lang="ts">
  export let data: IPreviewData;
</script>

<div>
  <h1>Preview</h1>
  <p>Here is a preview of your data:</p>
  <pre>{data.message}</pre>
</div>
