import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaunrant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "numbere",
      title: "Enter a rating from (1-5)",
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"),
    },{
      name: "type",
      type: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "category"}]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{type: "category", to: [{type: "dishes"}] }]
    },



  ],
})
