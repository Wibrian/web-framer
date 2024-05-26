import { defineNestedType, defineDocumentType, makeSource } from "contentlayer/source-files";

const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "The title of the category",
      required: true,
    },
  },
}));

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The featured image of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
      description: "The author of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the projects",
      required: true,
    },
    location: {
      type: "string",
      description: "The location of the projects",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the projects",
      required: true,
    },
    image: {
      type: "string",
      description: "The featured image of the projects",
      required: true,
    },
    client: {
      type: "string",
      description: "The client of the projects",
      required: true,
    },
    role: {
      type: "string",
      description: "The role of the projects",
      required: true,
    },
    year: {
      type: "string",
      description: "The year of the projects",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
});
