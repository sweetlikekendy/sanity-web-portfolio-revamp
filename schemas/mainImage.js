export default {
  name: "mainImage",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "imageCreditUrl",
      title: "Image Credit Url",
      type: "string",
      description:
        "If you got your picture from websites such as https://unsplash.com please link the url here.",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "imageCreditPhotographer",
      title: "Image Credit Photographer",
      type: "string",
      description:
        "If you got your picture from websites such as https://unsplash.com please put the photographer's full name here.",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "asset.originalFilename",
    },
  },
};
