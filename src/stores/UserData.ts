import { type Writable, writable } from "svelte/store";

export const previewLoading: Writable<boolean> = writable(false);
