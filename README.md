# 💥 RWE Wrestling Official Site

Welcome to the digital arena of **RWE Wrestling**—where raw, unfiltered energy from Northeast Arkansas goes national. This is a **complete, production-ready** wrestling promotion website with professional content management, e-commerce, and fan engagement features.

---

## 🎯 Project Goals
- Put RWE on the map for fans across the country
- Let owners update matches, media, merch and more—**zero coding required**
- Deliver a fast, mobile-friendly experience packed with engagement tools
- Provide a scalable, professional platform that can grow with the promotion

---

## ✨ What's New - Elite Features

This website now includes:

✅ **Headless CMS (Sanity.io)** - Visual content management, no coding needed
✅ **Modern Backend (Supabase)** - Database, authentication, real-time features
✅ **E-commerce (Stripe)** - Professional merchandise and ticket sales
✅ **Video Streaming Ready** - Integrated support for YouTube, Vimeo, and more
✅ **Real-time Chat** - Live fan interaction during events
✅ **Fan Engagement** - Polls, fantasy leagues, loyalty points
✅ **Mobile Responsive** - Perfect on phones, tablets, and desktops
✅ **SEO Optimized** - Built to rank well in search engines
✅ **One-Click Deployment** - Deploy to Vercel in minutes

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

## 📚 Documentation

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment instructions for non-developers
- **[OWNER_GUIDE.md](./OWNER_GUIDE.md)** - How to manage content without coding
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Developer setup and contribution guide

---

## 🚀 Quick Start

### For Owners (Non-Technical)

1. **Read the guides**:
   - Start with `DEPLOYMENT_GUIDE.md` to get your site live
   - Then read `OWNER_GUIDE.md` to learn content management

2. **Access Sanity Studio**:
   - Go to your studio URL (e.g., `https://rwe-wrestling.sanity.studio`)
   - Start adding wrestlers, events, and media!

### For Developers

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

3. **Run development server**:
```bash
npm run dev
```

4. **Run Sanity Studio** (in another terminal):
```bash
npm run sanity
```

5. Open:
   - Website: http://localhost:3000
   - Sanity Studio: http://localhost:3333

---

## 💰 Cost Breakdown

All services have generous FREE tiers:

| Service | Free Tier | Cost When Scaling |
|---------|-----------|-------------------|
| **Vercel** | Unlimited bandwidth | Free for hobby projects |
| **Sanity.io** | 3 users, unlimited docs | $99/mo for more users |
| **Supabase** | 500MB DB, 1GB storage | $25/mo for 8GB DB |
| **Stripe** | Free (2.9% + 30¢ per sale) | Same rate |

**Total startup cost: $0** ✅

---

## 🎯 What Makes This Elite

### For the Owner
- ✅ **No coding required** - Manage everything visually
- ✅ **Mobile-friendly admin** - Update from your phone
- ✅ **Instant updates** - Changes go live immediately
- ✅ **Professional features** - Compete with major promotions

### For Fans
- ✅ **Fast loading** - Optimized performance
- ✅ **Mobile responsive** - Perfect on any device
- ✅ **Real-time features** - Live chat and updates
- ✅ **Easy navigation** - Find what they want quickly

### For the Promotion
- ✅ **Scalable** - Grows with your success
- ✅ **SEO optimized** - Ranks well in Google
- ✅ **Analytics ready** - Track visitor behavior
- ✅ **Revenue generation** - Sell merch and tickets online

---

## 🔧 Available Scripts

```bash
npm run dev          # Start Next.js dev server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run sanity       # Start Sanity Studio (port 3333)
npm run sanity:deploy # Deploy Sanity Studio online
```

---

## 📁 Key Files & Folders

```
rwe-wrestling/
├── pages/              # Website pages
├── components/         # Reusable UI components
├── lib/               # Utility functions
│   ├── sanity.ts      # Sanity CMS client
│   ├── supabase.ts    # Database client
│   └── stripe.ts      # Payment integration
├── sanity/            # CMS configuration
│   └── schemas/       # Content types
├── supabase/          # Database schema
├── DEPLOYMENT_GUIDE.md # How to deploy
├── OWNER_GUIDE.md     # How to manage content
└── SETUP_GUIDE.md     # Developer guide
```

---

## 🎁 This is a Gift

This website was built by a wrestling fan to help RWE Wrestling grow. It's completely free and includes:

- ✅ Professional-grade infrastructure
- ✅ Easy content management
- ✅ E-commerce capabilities
- ✅ Fan engagement features
- ✅ Comprehensive documentation
- ✅ Ongoing support through guides

**Let's help RWE go national! 💪🔥**

---

## 🆘 Support & Resources

- **Deployment Issues**: See `DEPLOYMENT_GUIDE.md`
- **Content Management**: See `OWNER_GUIDE.md`
- **Development**: See `SETUP_GUIDE.md`
- **Vercel Docs**: https://vercel.com/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **Supabase Docs**: https://supabase.com/docs

---

## 📄 License

This project is provided as-is for RWE Wrestling. Use it, modify it, and make it your own!

