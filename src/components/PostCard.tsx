import { IPost } from '@/types';
import { multiFormatDateString } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { useState } from 'react';

type PostCardProps = {
  post: IPost;
};

const PostCard = ({ post }: PostCardProps) => {
  const [likes, setLikes] = useState<string[]>(post.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes.filter((id) => id !== 'current-user'));
      setHasLiked(false);
    } else {
      setLikes([...likes, 'current-user']);
      setHasLiked(true);
    }
  };

  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <img
            src={post.creator.imageUrl}
            alt="creator"
            className="w-12 lg:h-12 rounded-full"
          />
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular">
                {multiFormatDateString(post.createdAt)}
              </p>
              {post.location && (
                <>
                  •
                  <p className="subtle-semibold lg:small-regular">
                    {post.location}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="small-medium lg:base-medium py-5">
        <p>{post.caption}</p>
        {post.tags.length > 0 && (
          <ul className="flex gap-1 mt-2">
            {post.tags.map((tag: string, index: number) => (
              <li key={`${tag}${index}`} className="text-light-3 small-regular">
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      <img
        src={post.imageUrl}
        alt="post image"
        className="post-card_img"
      />

      <div className="flex-between mt-5">
        <div className="flex gap-2">
          <button onClick={handleLike} className="flex gap-2 items-center">
            <Heart
              className={`w-5 h-5 ${hasLiked ? 'fill-red text-red' : ''}`}
            />
            <p className="small-medium lg:base-medium">{likes.length}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
