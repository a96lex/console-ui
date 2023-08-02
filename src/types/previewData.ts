interface IPreviewData {
  profile: {
    person: {
      name: string;
      title: string;
      seniority: string;
      departments: string;
    };
    company: {
      name: string;
      description: string;
      location: string;
    };
  };
  message: string;
}
