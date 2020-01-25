export default {
  title: "Social Link",
  name: "socialLink",
  type: "document",
  fields: [
    {
      title: "Social Media Provider",
      name: "name",
      description:
        "The name of the social media provider, e.g. Facebook or Instagram, email or e-mail also works.",
      type: "string",
    },
    {
      title: "Link to",
      name: "link",
      descrption: "The full link to your social media page or profile",
      type: "url",
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    },
    {
      title: "Link location",
      name: "location",
      type: "string",
      description:
        "Social media links are automatically displayed in either the page header, footer, or both locations",
      options: {
        list: [
          { title: "Header", value: "header" },
          { title: "Footer", value: "footer" },
          { title: "All", value: "all" },
        ], // <-- predefined values
      },
    },
  ],
}
