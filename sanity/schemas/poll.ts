import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'poll',
  title: 'Poll',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Poll Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Poll Options',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(2).max(10),
    }),
    defineField({
      name: 'eventReference',
      title: 'Related Event',
      type: 'reference',
      to: [{ type: 'event' }],
      description: 'Optional: Link this poll to a specific event',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this poll currently active?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'active',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? 'Active' : 'Inactive',
      }
    },
  },
})

