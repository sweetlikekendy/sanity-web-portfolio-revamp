export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of blog.",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Will automatically be created from title. Slug is the route to your blog. Ex. https://www.example.com/blog/{slug-goes-here}",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageAlt",
      title: "Image Description (alt tag)",
      type: "string",
      description:
        "Describe your image so that screen readers can read the description.",
    },
    {
      name: "imageCreditUrl",
      title: "Image Credit Url",
      type: "string",
      description:
        "If you got your picture from websites such as https://unsplash.com please link the url here.",
    },
    {
      name: "imageCreditPhotographer",
      title: "Image Credit Photographer",
      type: "string",
      description:
        "If you got your picture from websites such as https://unsplash.com please put the photographer's full name here.",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
