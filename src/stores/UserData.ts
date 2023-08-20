import { type Writable, writable } from "svelte/store";

export const previewLoading: Writable<boolean> = writable(false);

const testData = [
  {
    profile: {
      person: {
        name: "Pedro Garcia",
        title: "Expansion Director",
        seniority: "Director",
        departments: "Operations, Sales",
      },
      company: {
        name: "Banco ABC",
        description:
          "Helps Rural Savings Banks to achieve a relevant market position and benefit from the synergies and competitive advantages of the association.",
        location: "Community of Madrid",
      },
    },
    message:
      "Dear Mr. Garcia,\n\nI hope this message finds you well. I recently came across your profile and noticed your impressive role as Expansion Director at Banco ABC, a company that has been doing commendable work in helping Rural Savings Banks achieve a significant market position.\n\nAs an experienced software engineer, I specialize in creating tailored websites and architecture designs that can significantly enhance the digital presence of organizations like yours. My expertise could be instrumental in driving your expansion goals by providing user-friendly platforms for your clients, thereby increasing customer satisfaction and sales.\n\nWould it be possible to schedule a call next week to discuss how my skills could align with Banco ABC's objectives? I'm confident that we can explore strategies to further strengthen Banco ABC's digital footprint in the Community of Madrid and beyond.\n\nLooking forward to hearing from you.\n\nBest regards,\nAlex",
  },
  {
    profile: {
      person: {
        name: "Hans Schmitt",
        title: "Co-Founder & CEO",
        seniority: "Founder",
        departments: "C-Suite",
      },
      company: {
        name: "PennyNow",
        description:
          "Create pension documents digitally in just a few minutes and store them in your digital vault.",
        location: "Berlin",
      },
    },
    message:
      "Dear Mr. Schmitt,\n\nI hope this message finds you well. I recently came across PennyNow and was impressed by your innovative approach to digitizing pension documents.\n\nAs a seasoned software engineer, I specialize in optimizing digital infrastructures for companies like yours. My expertise lies in website development and architecture design, which could be instrumental in enhancing the user experience and efficiency of your platform.\n\nGiven your role as CEO, I understand the importance of reliable and efficient systems for PennyNow. Would you be interested in discussing how we could potentially streamline your digital processes further?\n\nLooking forward to hearing from you.\n\nBest,\nAlex",
  },
  {
    profile: {
      person: {
        name: "Joe Schmoe",
        title: "Brand Manager",
        seniority: "Manager",
        departments: "Marketing",
      },
      company: {
        name: "Schmoe Automotive",
        description:
          "Automotive Frames | Automotive enthusiast: get to know our company and all our brands | Book an appointment in our network of official workshops and check exclusive promotions.",
        location: "London",
      },
    },
    message:
      "Dear Mr. Schmoe,\n\nI hope this message finds you well. I recently came across your impressive profile on LinkedIn and noticed your pivotal role as Brand Manager at Schmoe Automotive.\n\nAs a seasoned software engineer, I specialize in creating dynamic websites and designing robust architecture that can significantly enhance brand visibility and customer engagement. Given the exciting work Schmoe Automotive is doing in the automotive industry, I believe there's an opportunity to further elevate your digital presence.\n\nWould you be open to discussing how we could potentially collaborate to create a more immersive online experience for your customers? This could ultimately drive more traffic to your workshops and promote exclusive offers more effectively.\n\nLooking forward to hearing from you.\n\nBest,\nAlex",
  },
];

export const previewData: Writable<IPreviewData[]> = writable(
  // testData
  []
);
