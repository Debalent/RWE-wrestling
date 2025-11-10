import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Venue Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'posterImage',
      title: 'Event Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'ticketLink',
      title: 'Ticket Purchase Link',
      type: 'url',
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Ticket Price',
      type: 'string',
      placeholder: 'e.g., $15 - $25',
    }),
    defineField({
      name: 'matches',
      title: 'Match Card',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'matchType', title: 'Match Type', type: 'string', placeholder: 'e.g., Singles, Tag Team, Championship' },
            { name: 'participants', title: 'Participants', type: 'string', placeholder: 'e.g., John Doe vs Jane Smith' },
            { name: 'description', title: 'Match Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Live Now', value: 'live' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'upcoming',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Show this event prominently on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eventDate',
      media: 'posterImage',
    },
    prepare({ title, subtitle, media }) {
      const date = subtitle ? new Date(subtitle).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: date,
        media,
      }
    },
  },
})

