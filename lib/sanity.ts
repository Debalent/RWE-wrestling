import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster reads
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Common queries
export const queries = {
  // Get all wrestlers
  allWrestlers: `*[_type == "wrestler"] | order(name asc) {
    _id,
    name,
    slug,
    nickname,
    profileImage,
    bio,
    height,
    weight,
    hometown,
    finisher,
    championships,
    socialMedia,
    status,
    featured
  }`,

  // Get featured wrestlers
  featuredWrestlers: `*[_type == "wrestler" && featured == true] | order(name asc) {
    _id,
    name,
    slug,
    nickname,
    profileImage,
    bio,
    status
  }`,

  // Get single wrestler by slug
  wrestlerBySlug: (slug: string) => `*[_type == "wrestler" && slug.current == "${slug}"][0] {
    _id,
    name,
    slug,
    nickname,
    profileImage,
    bio,
    height,
    weight,
    hometown,
    finisher,
    championships,
    socialMedia,
    status
  }`,

  // Get all events
  allEvents: `*[_type == "event"] | order(eventDate desc) {
    _id,
    title,
    slug,
    eventDate,
    venue,
    address,
    city,
    state,
    posterImage,
    description,
    ticketLink,
    ticketPrice,
    matches,
    status,
    featured
  }`,

  // Get upcoming events
  upcomingEvents: `*[_type == "event" && eventDate > now() && status == "upcoming"] | order(eventDate asc) {
    _id,
    title,
    slug,
    eventDate,
    venue,
    city,
    state,
    posterImage,
    ticketLink,
    ticketPrice,
    featured
  }`,

  // Get event by slug
  eventBySlug: (slug: string) => `*[_type == "event" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    eventDate,
    venue,
    address,
    city,
    state,
    posterImage,
    description,
    ticketLink,
    ticketPrice,
    matches,
    status
  }`,

  // Get all media
  allMedia: `*[_type == "media"] | order(uploadDate desc) {
    _id,
    title,
    slug,
    mediaType,
    image,
    videoUrl,
    description,
    uploadDate,
    featured
  }`,

  // Get featured media
  featuredMedia: `*[_type == "media" && featured == true] | order(uploadDate desc) [0...6] {
    _id,
    title,
    slug,
    mediaType,
    image,
    videoUrl,
    description
  }`,

  // Get all merchandise
  allMerchandise: `*[_type == "merchandise" && available == true] | order(name asc) {
    _id,
    name,
    slug,
    images,
    description,
    price,
    category,
    sizes,
    stock,
    featured
  }`,

  // Get merchandise by slug
  merchandiseBySlug: (slug: string) => `*[_type == "merchandise" && slug.current == "${slug}"][0] {
    _id,
    name,
    slug,
    images,
    description,
    price,
    category,
    sizes,
    stock,
    stripeProductId,
    stripePriceId,
    available
  }`,

  // Get all news posts
  allNewsPosts: `*[_type == "newsPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    author,
    category,
    featured
  }`,

  // Get featured news
  featuredNews: `*[_type == "newsPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    category
  }`,

  // Get news post by slug
  newsPostBySlug: (slug: string) => `*[_type == "newsPost" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    content,
    publishedAt,
    author,
    category
  }`,

  // Get active polls
  activePolls: `*[_type == "poll" && active == true] | order(startDate desc) {
    _id,
    question,
    slug,
    options,
    startDate,
    endDate
  }`,
}

