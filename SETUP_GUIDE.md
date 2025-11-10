# ⚡ Quick Setup Guide for Developers

This guide is for developers who want to run the project locally or contribute to development.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd rwe-wrestling
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your credentials (see below for how to get them).

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Sanity Studio

In a separate terminal:

```bash
npm run sanity
```

Open [http://localhost:3333](http://localhost:3333) to access Sanity Studio.

---

## 🔑 Getting API Credentials

### Sanity.io

1. Create account at https://sanity.io
2. Create a new project
3. Get your Project ID from the dashboard
4. Create an API token with Editor permissions
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-token
   ```

### Supabase

1. Create account at https://supabase.com
2. Create a new project
3. Run the SQL schema from `supabase/schema.sql` in the SQL Editor
4. Get credentials from Settings → API
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

### Stripe (Optional)

1. Create account at https://stripe.com
2. Get test API keys from Developers → API keys
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

---

## 📁 Project Structure

```
rwe-wrestling/
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── admin/         # Admin dashboard pages
│   ├── events/        # Event pages
│   ├── wrestlers/     # Wrestler profile pages
│   └── ...
├── components/        # React components
├── lib/              # Utility functions
│   ├── sanity.ts     # Sanity client & queries
│   ├── supabase.ts   # Supabase client & helpers
│   └── stripe.ts     # Stripe integration
├── sanity/           # Sanity CMS configuration
│   └── schemas/      # Content schemas
├── supabase/         # Supabase configuration
│   └── schema.sql    # Database schema
├── public/           # Static assets
└── styles/           # CSS styles
```

---

## 🛠️ Available Scripts

```bash
npm run dev          # Start Next.js dev server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run sanity       # Start Sanity Studio (port 3333)
npm run sanity:deploy # Deploy Sanity Studio
```

---

## 🗄️ Database Schema

The Supabase database includes:

- **profiles** - User profiles (fans, wrestlers, admins)
- **chat_messages** - Real-time chat messages
- **poll_votes** - Fan poll voting
- **fantasy_teams** - Fantasy wrestling teams
- **loyalty_points** - Fan loyalty program
- **orders** - Merchandise orders

See `supabase/schema.sql` for full schema.

---

## 📝 Content Schemas

Sanity CMS manages:

- **Wrestlers** - Profiles, stats, bios
- **Events** - Shows, dates, venues, match cards
- **Media** - Photos, videos, promos
- **Merchandise** - Products, prices, inventory
- **News Posts** - Articles, announcements
- **Polls** - Fan voting

See `sanity/schemas/` for schema definitions.

---

## 🔐 Authentication

User authentication is handled by Supabase Auth:

- Email/password signup
- Social logins (configurable)
- Role-based access (fan, wrestler, admin)
- Protected routes

---

## 💳 E-commerce

Stripe integration for merchandise:

- Product catalog from Sanity
- Checkout sessions
- Order tracking in Supabase
- Webhook handling for payment events

---

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Dark mode** support
- **RWE brand colors** defined in `tailwind.config.js`
- Responsive design for mobile/tablet/desktop

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

---

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linter
npm run lint
```

---

## 📚 Key Dependencies

- **next** - React framework
- **react** - UI library
- **@sanity/client** - Sanity CMS client
- **@supabase/supabase-js** - Supabase client
- **@stripe/stripe-js** - Stripe integration
- **tailwindcss** - CSS framework
- **typescript** - Type safety

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Sanity Issues

```bash
# Reinstall Sanity CLI
npm install -g @sanity/cli
sanity init --reconfigure
```

### Supabase Connection Issues

- Verify environment variables are correct
- Check Supabase project is running
- Ensure database schema is applied

---

## 📖 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 📞 Support

For issues or questions:
- Check existing documentation
- Review error messages carefully
- Search GitHub issues
- Create a new issue with details

---

## 🎯 Roadmap

Future enhancements:
- [ ] Mobile app (React Native)
- [ ] Live streaming integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] PWA features
- [ ] Email notifications
- [ ] SMS alerts for events

---

**Happy coding! 🚀**

