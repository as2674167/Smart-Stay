<div align="center">

# 🏠 Smart-Stay

### A full-stack Airbnb-inspired vacation rental platform





</div>

***

## 📌 About

**Smart-Stay** is a full-stack web application inspired by Airbnb. Users can browse, create, edit, and delete property listings, upload images, leave reviews, and manage authentication — all in one platform. Built with the MEN stack (MongoDB, Express, Node.js) and EJS templating.

***

## ✨ Features

- 🔐 **User Authentication** — Register, login, logout using Passport.js (Local Strategy)
- 🏡 **Listings** — Create, Read, Update, Delete (CRUD) vacation rental listings
- 🖼️ **Image Upload** — Upload listing photos via Cloudinary + Multer
- ⭐ **Reviews** — Authenticated users can post and delete reviews on listings
- 🔒 **Authorization** — Only listing/review owners can edit or delete their content
- 💾 **Session Persistence** — MongoDB-backed sessions using `connect-mongo`
- ✅ **Validation** — Server-side schema validation using Joi
- ⚡ **Flash Messages** — Success and error feedback on every action
- 📱 **Responsive UI** — Bootstrap-based responsive design

***

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js v22 |
| Framework | Express.js v5 |
| Database | MongoDB Atlas + Mongoose |
| Templating | EJS + ejs-mate (layouts) |
| Authentication | Passport.js + passport-local-mongoose |
| Image Storage | Cloudinary + Multer |
| Session Store | connect-mongo |
| Validation | Joi |
| Deployment | Render |

***

## 📁 Project Structure

```
Smart-Stay/
├── app.js                  # Main server entry point
├── middleware.js            # Custom middleware (auth, validation, etc.)
├── schema.js                # Joi validation schemas
├── cloudConfig.js           # Cloudinary configuration
├── controllers/
│   ├── listing.js           # Listing route handlers
│   ├── review.js            # Review route handlers
│   └── user.js              # User auth handlers
├── models/
│   ├── listing.js           # Listing schema
│   ├── review.js            # Review schema
│   └── users.js             # User schema (passport-local-mongoose)
├── routes/
│   ├── listing.js           # /listings routes
│   ├── review.js            # /listings/:id/reviews routes
│   └── user.js              # /register, /login, /logout routes
├── views/
│   ├── layouts/             # EJS layout templates
│   ├── listings/            # Listing pages (index, show, new, edit)
│   └── users/               # Login & register pages
├── public/                  # Static assets (CSS, JS, images)
├── init/
│   ├── data.js              # Sample seed data
│   └── index.js             # Database seeding script
└── utils/
    └── ExpressError.js      # Custom error class
```

***

## ⚙️ Getting Started (Local Setup)

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/as2674167/Smart-Stay.git
cd Smart-Stay
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file in root

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Seed the database (optional)

```bash
cd init
node index.js
```

### 5. Run the server

```bash
npm start
```

App will run at: `http://localhost:8080/listings`

***

## 🌍 Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session secret key |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |
| `PORT` | Server port (auto-set by Render) |
| `NODE_ENV` | Set to `production` on deployment |
| `RENDER_EXTERNAL_URL` | Your Render app URL (for self-ping) |

***

## 🚀 Deployment (Render)

1. Push code to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Connect your `as2674167/Smart-Stay` GitHub repo
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `npm start`
6. Add all environment variables from the table above
7. Deploy!

> **Cold Start Prevention:** The app auto-pings itself every 14 minutes via the `/health` endpoint to keep the Render free-tier server warm.


## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

***

## 📄 License

This project is licensed under the **ISC License**.

***

<div align="center">
Made with ❤️ by <a href="https://github.com/as2674167">as2674167</a>
</div>
