# 🚀 RWE Wrestling - Complete Deployment Guide

This guide will walk you through deploying your RWE Wrestling website **step-by-step**. No coding experience required!

---

## 📋 What You'll Need

Before starting, create free accounts on these services:

1. **GitHub** - https://github.com (for code hosting)
2. **Vercel** - https://vercel.com (for website hosting)
3. **Sanity.io** - https://sanity.io (for content management)
4. **Supabase** - https://supabase.com (for database & user accounts)
5. **Stripe** - https://stripe.com (optional, for merchandise sales)

**Total Cost: $0** (All services have generous free tiers!)

---

## Step 1: Set Up Sanity CMS (Content Management)

### 1.1 Create a Sanity Account
1. Go to https://sanity.io
2. Click "Get Started" and sign up with GitHub
3. Once logged in, click "Create New Project"
4. Name it: **RWE Wrestling**
5. Choose dataset: **Production**
6. Copy your **Project ID** (you'll need this later)

### 1.2 Get Your Sanity Credentials
1. In your Sanity dashboard, go to **Settings** → **API**
2. Under "Tokens", click **Add API Token**
3. Name it: `RWE Website`
4. Permissions: **Editor**
5. Click **Add Token** and copy it immediately (you won't see it again!)

### 1.3 Initialize Sanity in Your Project
Open your terminal/command prompt in the project folder and run:

```bash
npx sanity init --project-id YOUR_PROJECT_ID --dataset production
```

Replace `YOUR_PROJECT_ID` with the ID you copied earlier.

---

## Step 2: Set Up Supabase (Database & Authentication)

### 2.1 Create a Supabase Project
1. Go to https://supabase.com
2. Click "Start your project" and sign in with GitHub
3. Click "New Project"
4. Fill in:
   - **Name**: RWE Wrestling
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to Arkansas (e.g., East US)
5. Click "Create new project" (takes ~2 minutes)

### 2.2 Set Up the Database
1. In your Supabase dashboard, click **SQL Editor** (left sidebar)
2. Click **New Query**
3. Open the file `supabase/schema.sql` from your project
4. Copy ALL the contents
5. Paste into the Supabase SQL Editor
6. Click **Run** (bottom right)
7. You should see "Success. No rows returned"

### 2.3 Get Your Supabase Credentials
1. Go to **Settings** → **API** (left sidebar)
2. Copy these values (you'll need them):
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")
   - **service_role** key (under "Project API keys" - keep this secret!)

---

## Step 3: Set Up Stripe (Optional - For Merchandise)

### 3.1 Create a Stripe Account
1. Go to https://stripe.com
2. Click "Start now" and create an account
3. Complete the signup process

### 3.2 Get Your Stripe Keys
1. In your Stripe dashboard, click **Developers** (top right)
2. Click **API keys** (left sidebar)
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (click "Reveal test key", starts with `sk_test_`)
4. Copy both keys

**Note**: These are TEST keys. When you're ready to accept real payments, switch to LIVE mode.

---

## Step 4: Configure Environment Variables

### 4.1 Create Your .env File
1. In your project folder, find the file `.env.example`
2. Make a copy and rename it to `.env.local`
3. Open `.env.local` in a text editor
4. Fill in all the values you copied:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-api-token

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Stripe Configuration (Optional)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Save the file

---

## Step 5: Push Code to GitHub

### 5.1 Create a GitHub Repository
1. Go to https://github.com
2. Click the **+** icon (top right) → **New repository**
3. Name it: `rwe-wrestling`
4. Make it **Private** (recommended)
5. Click **Create repository**

### 5.2 Push Your Code
In your terminal/command prompt, run these commands:

```bash
git init
git add .
git commit -m "Initial commit - RWE Wrestling website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rwe-wrestling.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 6: Deploy to Vercel

### 6.1 Connect Vercel to GitHub
1. Go to https://vercel.com
2. Click "Sign Up" and choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub account

### 6.2 Import Your Project
1. Click **Add New** → **Project**
2. Find your `rwe-wrestling` repository
3. Click **Import**

### 6.3 Configure Environment Variables
1. Expand **Environment Variables**
2. Add each variable from your `.env.local` file:
   - Click **Add** for each one
   - Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - Value: (paste your value)
   - Repeat for ALL variables

### 6.4 Deploy!
1. Click **Deploy**
2. Wait 2-3 minutes for the build to complete
3. You'll see "Congratulations!" when it's done
4. Click **Visit** to see your live website!

### 6.5 Get Your Live URL
Your website is now live at: `https://your-project-name.vercel.app`

You can add a custom domain later (like `rwewrestling.com`) in Vercel settings.

---

## Step 7: Launch Sanity Studio

### 7.1 Start Sanity Studio Locally
In your terminal, run:

```bash
npm run sanity
```

This opens Sanity Studio at `http://localhost:3333`

### 7.2 Deploy Sanity Studio
To make Sanity Studio accessible online:

```bash
npm run sanity:deploy
```

Choose a studio hostname (e.g., `rwe-wrestling`)

Your studio will be at: `https://rwe-wrestling.sanity.studio`

---

## Step 8: Configure Sanity CORS

1. Go to https://sanity.io/manage
2. Select your **RWE Wrestling** project
3. Go to **Settings** → **API** → **CORS Origins**
4. Click **Add CORS Origin**
5. Add your Vercel URL: `https://your-project-name.vercel.app`
6. Check **Allow credentials**
7. Click **Save**

---

## 🎉 You're Live!

Your website is now deployed! Here's what you have:

✅ **Live Website**: `https://your-project-name.vercel.app`  
✅ **Content Management**: `https://rwe-wrestling.sanity.studio`  
✅ **Database**: Supabase dashboard  
✅ **Payments**: Stripe dashboard (if configured)

---

## 🔄 Making Updates

### Updating Content (No Code!)
1. Go to your Sanity Studio URL
2. Log in
3. Add/edit wrestlers, events, media, etc.
4. Changes appear on your website instantly!

### Updating Code
1. Make changes to your code locally
2. Run these commands:
```bash
git add .
git commit -m "Description of changes"
git push
```
3. Vercel automatically rebuilds and deploys!

---

## 🆘 Troubleshooting

### Website shows errors
- Check that all environment variables are set in Vercel
- Go to Vercel dashboard → Your Project → Settings → Environment Variables

### Sanity Studio won't load
- Make sure you added your Vercel URL to CORS origins in Sanity
- Check that your Sanity Project ID is correct

### Database not working
- Verify you ran the SQL schema in Supabase
- Check that Supabase URL and keys are correct in environment variables

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **Supabase Docs**: https://supabase.com/docs
- **Stripe Docs**: https://stripe.com/docs

---

## 🎯 Next Steps

1. Add your first wrestler in Sanity Studio
2. Create an upcoming event
3. Upload some media
4. Share your website with fans!

**Your website will automatically update as you add content!**

