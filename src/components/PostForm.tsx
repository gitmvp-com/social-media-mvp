import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { INewPost } from '@/types';

type PostFormProps = {
  onSubmit: (post: INewPost) => void;
};

const PostForm = ({ onSubmit }: PostFormProps) => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      caption,
      location,
      tags,
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-9 w-full max-w-5xl">
      <div className="flex flex-col gap-2">
        <Label htmlFor="caption">Caption</Label>
        <Textarea
          id="caption"
          placeholder="Write your caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
          className="shad-textarea"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="location">Add Location</Label>
        <Input
          id="location"
          type="text"
          placeholder="New York, USA"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="shad-input"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="tags">Add Tags (separated by comma " , ")</Label>
        <Input
          id="tags"
          type="text"
          placeholder="Travel, Photography, Nature"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="shad-input"
        />
      </div>

      <div className="flex gap-4 items-center justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate('/')}
        >
          Cancel
        </Button>
        <Button type="submit" className="shad-button_primary">
          Create Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
