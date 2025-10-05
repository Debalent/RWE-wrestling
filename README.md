# 💥 RWE Wrestling Official Site

Welcome to the digital arena of **RWE Wrestling**—where raw, unfiltered energy from Northeast Arkansas goes national. This site is built to showcase talent, fuel fan passion, and give owners full control of every beat.

---

## 🎯 Project Goals
- Put RWE on the map for fans across the country  
- Let owners update matches, media, merch and more—zero coding required  
- Deliver a fast, mobile-friendly experience packed with engagement tools  

---

## 🚀 Key Features

### 👥 User & Wrestler Profiles  
- Fan, wrestler & owner accounts with bios, photos & social links  
- Owners create or edit wrestler pages on the fly  

### 💬 Real-Time Chat & Messaging  
- Public chat rooms for shows, private DMs between fans & wrestlers  
- Live chat synced with video streams  

### 📤 Media Uploads & On-Demand Library  
- Drag-and-drop for photos, audio promos & match videos  
- Archive of past matches, highlights and backstage clips  

### 🗓️ Event Management & Maps  
- Owners add/edit show dates, venues and ticket links  
- Interactive venue maps and “Add to calendar” buttons  

### 🛍️ Merch & Ticket Store  
- Built-in shop powered by Stripe or Snipcart  
- Order tracking, email confirmations and flash-sale timers  

### 📊 Polls, Predictions & Fantasy Leagues  
- Pre-match polls with real-time results  
- Draft your fantasy roster and climb leaderboards  

### 🏆 Gamification & Rewards  
- Loyalty points, badges and “Fan of the Week” spotlights  
- Leaderboards for top contributors and fantasy champs  

### 📱 Social-First Content  
- Auto-generated highlight reels (TikTok, Reels)  
- Live social feeds to showcase fan posts and #RWE moments  

### 📣 Push Notifications & Campaigns  
- Web-push and SMS alerts for show announcements, merch drops  
- Drip-campaign emails teasing storylines and exclusive content  

### 🎤 Podcast & Backstage Blog  
- Embed weekly audio episodes with transcripts  
- Blog posts for training tips, wrestler Q&As and sneak-peeks  

### 🌐 AR/VR Filters & Virtual Experiences  
- Branded Snapchat/Instagram filters  
- 360° ring tours and virtual meet-and-greets  

### ♿ Accessibility & Community Wellness  
- Closed captions on videos, text-to-speech recaps  
- “Fan Spotlight” interviews to celebrate community voices  

---

## 🛠️ Tech Stack (Suggested)
- **Frontend:** Next.js + Tailwind CSS  
- **Auth & Users:** Clerk or Firebase Auth  
- **Database & Real-Time:** Supabase or Firebase  
- **Media & Uploads:** Cloudinary or Firebase Storage  
- **Chat & Realtime:** Socket.io or Supabase Realtime  
- **E-commerce:** Stripe or Snipcart  
- **Maps & Calendar:** Google Maps API + simple “Add to calendar” links

---

## 📁 Project Structure (Example)
/public
  /wrestlers           # Wrestler profile images and media assets
  /logo                # RWE logo and branding images

/pages
  /admin               # Owner/admin dashboard and management pages
    index.tsx          # Admin dashboard home page
    wrestlers.tsx      # Manage wrestler profiles (CRUD interface)
    events.tsx         # Manage upcoming events
    media.tsx          # Media upload and archive management
    merch.tsx          # Merchandise store management
  
  /events
    upcoming.tsx       # Public upcoming events listing with maps & tickets
    [slug].tsx         # Dynamic event detail pages
  
  /wrestlers
    [slug].tsx         # Dynamic wrestler profile pages
  
  podcast.tsx          # Podcast episodes and backstage blog overview
  notifications.tsx    # Notifications and campaigns management
  rwe-homepage.tsx     # Main homepage with site overview and links
  navbar.tsx           # Site-wide navigation bar component

/components            # Reusable UI components (e.g., Navbar, EventCard, WrestlerCard)

/styles                # Tailwind CSS customizations and global styles

/utils                 # Utility functions and helpers (e.g., date formatting)

.env                   # Environment variables (API keys, Stripe secrets, etc.)

package.json           # Project metadata and dependency declarations
next.config.js         # Next.js configuration file
README.md              # Project overview, setup, and usage instructions

---

## Quick start

1. Install dependencies (Node.js LTS recommended):

```powershell
npm install
npm run dev
```

2. Open http://localhost:3000

Build for production:

```powershell
npm run build
```

CI

A GitHub Actions workflow is included in `.github/workflows/ci.yml` to run `npm ci` and `npm run build` on push and pull-request events.

Assets

Place production images under `public/images/` and update paths in pages or components if needed.

