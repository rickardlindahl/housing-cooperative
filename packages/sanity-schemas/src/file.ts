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
      validation: (rule) => rule.required(),
      // @ts-ignore
      codegen: { required: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
      // @ts-ignore
      codegen: { required: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
      // @ts-ignore
      codegen: { required: true },
    }),
  ],
});
