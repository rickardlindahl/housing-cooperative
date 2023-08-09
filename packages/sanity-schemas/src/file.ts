import { defineField, defineType } from "sanity";

export default defineType({
  name: "record",
  title: "File",
  type: "document",
  fields: [
    defineField({
      name: "file",
      title: "File",
      type: "file",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
});
