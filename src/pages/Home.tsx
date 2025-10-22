import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { IPost } from '@/types';
import { PlusSquare } from 'lucide-react';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    // Load posts from localStorage
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div className="home-container">
      <div className="home-posts">
        <div className="flex-between w-full max-w-screen-sm mb-8">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          <Link to="/create-post">
            <Button className="shad-button_primary">
              <PlusSquare className="w-5 h-5" />
              <span className="hidden sm:inline">Create Post</span>
            </Button>
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="flex flex-col items-center gap-4 mt-10">
            <p className="text-light-4">No posts yet. Create your first post!</p>
            <Link to="/create-post">
              <Button className="shad-button_primary">
                <PlusSquare className="w-5 h-5" />
                Create Post
              </Button>
            </Link>
          </div>
        ) : (
          <ul className="flex flex-col flex-1 gap-9 w-full">
            {posts.map((post: IPost) => (
              <li key={post.id} className="flex justify-center w-full">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
