import PostForm from '@/components/PostForm';
import { INewPost } from '@/types';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleCreatePost = (postData: INewPost) => {
    // Get existing posts
    const storedPosts = localStorage.getItem('posts');
    const posts = storedPosts ? JSON.parse(storedPosts) : [];

    // Create new post with mock data
    const newPost = {
      id: Date.now().toString(),
      creator: {
        id: 'user-1',
        name: 'John Doe',
        imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      },
      caption: postData.caption,
      tags: postData.tags ? postData.tags.split(',').map((tag) => tag.trim()) : [],
      imageUrl: `https://picsum.photos/seed/${Date.now()}/800/600`,
      location: postData.location,
      createdAt: new Date().toISOString(),
      likes: [],
    };

    // Save to localStorage
    posts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <button onClick={() => navigate('/')} className="hover:opacity-70">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="h3-bold md:h2-bold text-left w-full">Create Post</h2>
        </div>

        <PostForm onSubmit={handleCreatePost} />
      </div>
    </div>
  );
};

export default CreatePost;
