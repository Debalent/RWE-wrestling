import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'wrestler',
  title: 'Wrestler',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Wrestler Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nickname',
      title: 'Nickname / Ring Name',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      placeholder: 'e.g., 6\'2"',
    }),
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'string',
      placeholder: 'e.g., 220 lbs',
    }),
    defineField({
      name: 'hometown',
      title: 'Hometown',
      type: 'string',
    }),
    defineField({
      name: 'finisher',
      title: 'Finishing Move',
      type: 'string',
    }),
    defineField({
      name: 'championships',
      title: 'Championships Won',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'tiktok', title: 'TikTok', type: 'url' },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Injured', value: 'injured' },
          { title: 'Inactive', value: 'inactive' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Wrestler',
      type: 'boolean',
      description: 'Show this wrestler on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'nickname',
      media: 'profileImage',
    },
  },
})

