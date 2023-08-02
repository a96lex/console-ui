<script lang="ts">
  import { previewData, previewLoading } from "../stores/UserData";

  let fields: IField[] = [
    {
      type: "textarea",
      value: "",
      name: "senderIdentityDescription",
      required: true,
      label: "Sender's description",
      description: "Here is some info",
      maxLen: 600,
    },
    {
      type: "textarea",
      value: "",
      name: "senderCompanyDescription",
      required: true,
      label: "Sender's company description",
      description: "Here is some info",
      maxLen: 2000,
    },
    {
      type: "textarea",
      value: "",
      name: "extraProductDetails",
      label: "Extra product details (optional)",
      description: "Here is some info",
    },
    {
      type: "textarea",
      value: "",
      name: "successMetrics",
      label: "Success metrics (optional)",
      description: "Here is some info",
    },
    {
      type: "textarea",
      value: "",
      name: "language",
      label: "Language",
      description: "Here is some info",
    },
  ];

  const onSubmit = async ({ target }: Event) => {
    const data = new FormData(target as HTMLFormElement);

    for (const [key, value] of data.entries()) {
      if (value.length > fields.find((field) => field.name === key)?.maxLen) {
        console.log("error");
        return;
      }
    }
    console.log("values:", data);

    const json_data = JSON.stringify(Object.fromEntries(data.entries()));

    console.log(json_data);

    try {
      $previewLoading = true;
      const res = await fetch(
        "https://96dez9u6r8.execute-api.eu-west-1.amazonaws.com/staging/preview",
        {
          method: "POST",
          body: json_data,
        }
      );

      $previewData = (await res.json()) as IPreviewData[];
    } catch (error) {
      console.log(error);
    } finally {
      $previewLoading = false;
    }
  };
</script>

<section class="form">
  <form on:submit|preventDefault={onSubmit}>
    {#each fields as field}
      <div class="textareaWrapper">
        <label for={field.name}>{field.label}</label>
        <textarea
          name={field.name}
          id={field.name}
          bind:value={field.value}
          required={field.required}
        />

        {#if field.maxLen}
          <span
            class="charCounter"
            class:error={field.value.length > field.maxLen}
          >
            {field.value.length}/{field.maxLen}
          </span>
        {/if}
      </div>
    {/each}
    <button type="submit">
      {#if $previewLoading}
        Loading...
      {:else}
        Preview
      {/if}
    </button>
  </form>
</section>

<style lang="scss">
  .form {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    width: 100%;

    max-width: 50vw;
  }

  .textareaWrapper {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  textarea {
    font-family: inherit;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    resize: none;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  }

  .charCounter {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 5px;
  }

  .error {
    color: red;
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
