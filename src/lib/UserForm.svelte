<script lang="ts">
  interface IField {
    type:
      | "input"
      | "date"
      | "textarea"
      | "select"
      | "checkbox"
      | "radio"
      | "file"
      | "autocomplete";
    name: string;
    value?: any;
    label: string;
    description?: string;
    messages?: any;
    extra?: any;
    validation?: any;
    required?: boolean;
    maxLen?: number;
  }

  let fields: IField[] = [
    {
      type: "textarea",
      value: "",
      name: "senderIdentityDescription",
      required: true,
      label: "Sender's description",
      description: "Here is some info",
      maxLen: 200,
    },
    {
      type: "textarea",
      value: "",
      name: "senderCompanyDescription",
      required: true,
      label: "Sender's company description",
      description: "Here is some info",
      maxLen: 200,
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

  const onSubmit = ({ target }: Event) => {
    const data = new FormData(target as HTMLFormElement);

    for (const [key, value] of data.entries()) {
      if (value.length > fields.find((field) => field.name === key)?.maxLen) {
        console.log("error");
        return;
      }
    }
    console.log("values:", data);
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  {#each fields as field}
    <div style="position: relative;">
      <label for={field.name}>{field.label}</label>
      <textarea
        name={field.name}
        id={field.name}
        bind:value={field.value}
        class="formArea"
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
  <button type="submit">Preview</button>
</form>

<style lang="scss">
  form {
    width: 100vw;
    max-width: 50rem;
    // center
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: antiquewhite;
  }
  .formArea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    width: 100%;
    resize: none;
    position: relative;
    margin-bottom: 1rem;
  }

  .charCounter {
    position: absolute;
    bottom: -1.1rem;
    right: -2rem;
    font-size: 0.8rem;
  }

  .error {
    color: red;
  }

  button {
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    width: 90%;
  }
</style>
