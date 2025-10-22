export type IPost = {
  id: string;
  creator: {
    id: string;
    name: string;
    imageUrl: string;
  };
  caption: string;
  tags: string[];
  imageUrl: string;
  location?: string;
  createdAt: string;
  likes: string[];
};

export type INewPost = {
  caption: string;
  tags: string;
  location?: string;
};
