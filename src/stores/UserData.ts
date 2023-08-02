import { type Writable, writable } from "svelte/store";

export const previewLoading: Writable<boolean> = writable(false);

const testData = {
  profile: {
    person: {
      name: "alex",
      title: "alex",
      seniority: "alex",
      departments: "alex",
    },
    company: {
      name: "alex",
      description: "alex",
      location: "alex",
    },
  },
  message: `hello alex
i am alex

i sell some cookies do u want? If bulk, get discount!!

[Object Object]`,
};

export const previewData: Writable<IPreviewData[]> = writable(
  Array(3).fill(testData)
);
