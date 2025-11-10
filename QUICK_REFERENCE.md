# 📋 RWE Wrestling - Quick Reference Card

**Print this out and keep it handy!**

---

## 🔗 Important URLs

### Your Live Website
```
https://your-project-name.vercel.app
```

### Sanity Studio (Content Manager)
```
https://your-studio-name.sanity.studio
```

### Admin Dashboards

| Service | URL | Purpose |
|---------|-----|---------|
| **Vercel** | https://vercel.com/dashboard | Website hosting |
| **Sanity** | https://sanity.io/manage | CMS management |
| **Supabase** | https://supabase.com/dashboard | Database & users |
| **Stripe** | https://dashboard.stripe.com | Payments & orders |
| **GitHub** | https://github.com | Code repository |

---

## 🎯 Common Tasks

### Adding a New Wrestler
1. Go to Sanity Studio
2. Click **Wrestler** → **+**
3. Fill in name, bio, photo
4. Click **Publish**

### Creating an Event
1. Go to Sanity Studio
2. Click **Event** → **+**
3. Add date, venue, poster
4. Add match card
5. Click **Publish**

### Uploading Media
1. Go to Sanity Studio
2. Click **Media** → **+**
3. Upload photo/video
4. Add description
5. Click **Publish**

### Adding Merchandise
1. Go to Sanity Studio
2. Click **Merchandise** → **+**
3. Upload product images
4. Set price and stock
5. Click **Publish**

### Posting News
1. Go to Sanity Studio
2. Click **News Post** → **+**
3. Write your article
4. Add cover image
5. Click **Publish**

---

## 🚨 Emergency Fixes

### Website is Down
1. Check Vercel dashboard for errors
2. Look at recent deployments
3. Roll back if needed

### Content Not Showing
1. Make sure you clicked **Publish** in Sanity
2. Wait 30 seconds and refresh
3. Check CORS settings in Sanity

### Payment Issues
1. Check Stripe dashboard
2. Verify test/live mode
3. Check webhook configuration

---

## 📞 Support Contacts

### Technical Issues
- **Vercel Support**: https://vercel.com/support
- **Sanity Support**: https://www.sanity.io/help
- **Supabase Support**: https://supabase.com/support
- **Stripe Support**: https://support.stripe.com

### Documentation
- **Deployment Guide**: `DEPLOYMENT_GUIDE.md`
- **Owner Guide**: `OWNER_GUIDE.md`
- **Setup Guide**: `SETUP_GUIDE.md`

---

## 🔑 Environment Variables

Keep these safe and never share publicly!

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

---

## ✅ Pre-Event Checklist

**1 Week Before:**
- [ ] Create event in Sanity
- [ ] Upload event poster
- [ ] Add match card
- [ ] Set ticket link
- [ ] Mark as "Featured"

**Day Before:**
- [ ] Verify event details
- [ ] Test ticket link
- [ ] Create fan poll
- [ ] Post teaser on social media

**Day Of:**
- [ ] Change event status to "Live Now"
- [ ] Monitor live chat
- [ ] Post updates

**After Event:**
- [ ] Change status to "Completed"
- [ ] Upload photos/videos
- [ ] Post results article
- [ ] Thank fans on social media

---

## 📊 Weekly Content Schedule

### Monday
- Post weekend event results
- Upload match highlights

### Wednesday
- Feature wrestler spotlight
- Create fan poll

### Friday
- Announce upcoming events
- Post behind-the-scenes content

### Sunday
- Event day (if scheduled)
- Live updates and chat

---

## 💡 Pro Tips

### Content Best Practices
- ✅ Use high-quality images (at least 1200px wide)
- ✅ Write engaging descriptions
- ✅ Tag wrestlers in media
- ✅ Link events to media
- ✅ Keep merchandise inventory updated

### SEO Tips
- ✅ Use descriptive titles
- ✅ Fill in all fields
- ✅ Add alt text to images
- ✅ Use keywords naturally
- ✅ Update content regularly

### Fan Engagement
- ✅ Respond to chat messages
- ✅ Create weekly polls
- ✅ Share fan photos
- ✅ Post regularly
- ✅ Tease upcoming storylines

---

## 🎯 Monthly Goals

### Content
- [ ] 4+ news posts
- [ ] 2+ wrestler spotlights
- [ ] 4+ media uploads
- [ ] 2+ fan polls

### Engagement
- [ ] Respond to all messages
- [ ] Share fan content
- [ ] Update social media
- [ ] Monitor analytics

### Business
- [ ] Review merchandise sales
- [ ] Update inventory
- [ ] Plan next event
- [ ] Check website performance

---

## 🔄 Update Workflow

### Making Changes
1. Log into Sanity Studio
2. Find content to edit
3. Make changes
4. Click **Publish**
5. Changes go live in ~30 seconds

### Adding New Content
1. Click content type (Wrestler, Event, etc.)
2. Click **+** button
3. Fill in all fields
4. Upload images
5. Click **Publish**

### Removing Content
1. Open the content
2. Click **Unpublish** (to hide)
3. OR click **...** → **Delete** (to remove permanently)

---

## 📱 Mobile Quick Actions

### From Your Phone
- ✅ Post event results
- ✅ Upload photos
- ✅ Create news posts
- ✅ Update wrestler status
- ✅ Moderate chat

### Sanity Mobile App
- Download from App Store or Google Play
- Log in with your Sanity account
- Manage content on the go

---

## 🎉 Success Metrics

### Track These Weekly
- Website visitors
- New user signups
- Merchandise sales
- Event ticket sales
- Social media engagement
- Chat activity

### Where to Find Them
- **Website Traffic**: Vercel Analytics
- **User Activity**: Supabase Dashboard
- **Sales**: Stripe Dashboard
- **Content Performance**: Sanity Insights

---

## 🆘 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Can't log into Sanity | Reset password at sanity.io |
| Image won't upload | Check file size (max 10MB) |
| Changes not showing | Wait 30 sec, clear browser cache |
| Stripe not working | Check test vs live mode |
| Website error | Check Vercel deployment logs |

---

## 📞 Emergency Contacts

**Website Developer**: [Your contact info]

**Hosting (Vercel)**: support@vercel.com

**CMS (Sanity)**: support@sanity.io

**Database (Supabase)**: support@supabase.com

**Payments (Stripe)**: support@stripe.com

---

**Keep this guide handy for quick reference! 📌**

**Questions? Check the full guides:**
- `DEPLOYMENT_GUIDE.md`
- `OWNER_GUIDE.md`
- `SETUP_GUIDE.md`

