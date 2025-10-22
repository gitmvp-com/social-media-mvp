# Social Media MVP

![React](https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB)
![TypeScript](https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4)

A simplified MVP version of a social media application focused on core post creation and feed display functionality.

## 🎯 MVP Features

This is a minimal viable product that demonstrates:

- ✅ **Create Posts**: Simple form to create posts with caption, tags, and location
- ✅ **View Feed**: Display all posts in a clean, scrollable feed
- ✅ **Like Posts**: Interactive like functionality on posts
- ✅ **Responsive Design**: Mobile-first responsive UI
- ✅ **Local Storage**: Posts persist in browser localStorage
- ✅ **No Authentication**: Runs immediately without backend setup

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/social-media-mvp.git
cd social-media-mvp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Tech Stack

- **React 18.2** - UI library
- **TypeScript 5.0** - Type safety
- **Vite 4.4** - Build tool and dev server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **React Router 6.16** - Client-side routing
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## 🏗️ Project Structure

```
social-media-mvp/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Shadcn-style base components
│   │   ├── PostCard.tsx  # Post display component
│   │   └── PostForm.tsx  # Post creation form
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Feed page
│   │   └── CreatePost.tsx # Post creation page
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── globals.css       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Key Differences from Full Version

### What's Included:
- ✅ Core UI components (Button, Input, Textarea, Label)
- ✅ Post creation and display
- ✅ Like functionality
- ✅ Responsive design with same color scheme
- ✅ Local state management

### What's Simplified:
- ❌ No authentication (no Appwrite backend)
- ❌ No file uploads (uses placeholder images from Picsum)
- ❌ No React Query (simple localStorage instead)
- ❌ No form validation (basic HTML validation only)
- ❌ No user profiles or saved posts
- ❌ No explore page or search

## 💡 Usage

### Creating a Post

1. Click the "Create Post" button on the home page
2. Fill in the caption (required)
3. Optionally add location and tags
4. Submit to see your post in the feed

### Viewing Posts

All posts appear on the home page feed. Each post shows:
- Creator information (with avatar)
- Post caption and tags
- Random placeholder image
- Like button and count
- Timestamp and location

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Configuration

The project uses the same configuration as the parent repository:
- Same Tailwind color scheme
- Same TypeScript settings
- Same Vite configuration
- Compatible component structure

## 📝 Notes

- Posts are stored in browser localStorage and will persist until cleared
- Images are generated from Picsum Photos API
- User avatars are generated from DiceBear API
- No server or database required

## 🚀 Next Steps

To expand this MVP into a full application, consider adding:

1. Backend integration (Appwrite, Firebase, or custom API)
2. User authentication and profiles
3. Real image upload functionality
4. Form validation with React Hook Form + Zod
5. Data fetching with React Query
6. Search and explore features
7. Comments on posts
8. User following system

## 📄 License

MIT License - feel free to use this project for learning or as a starting point for your own application.

## 🙏 Credits

This MVP is based on the [social_media_app](https://github.com/adrianhajdin/social_media_app) by Adrian Hajdin, simplified to focus on core features without backend dependencies.
