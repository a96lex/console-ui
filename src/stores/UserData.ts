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
  message: `My man,

I heard that Schmoe Automotive is doing some impressive work in the automotive industry, particularly with your brand promotions.

My name is Alex and I represent a company that specializes in providing unique solutions to businesses like yours. We have helped numerous brands increase their market presence and profitability by offering bulk purchases at discounted rates.

Given your role as Brand Manager, I thought you might be interested in exploring how our services can further enhance Schmoe Automotive's brand visibility and customer engagement. 

Could we schedule a call next week to discuss how we can help boost your brand's performance?`,
};

export const previewData: Writable<IPreviewData[]> = writable(
  //   Array(5).fill(testData)
  []
);
