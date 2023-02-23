import React, { createContext, useState } from 'react';
import { BlogPostContextType } from '../types/blogPostContextType';
import { BlogData } from '../types/blogPosts';

export const BlogPostContext = createContext({} as BlogPostContextType);

interface BlogProviderProps {
  children: JSX.Element;
}

export const BlogPostProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [data, setData] = useState<BlogData[] | null>(null);
  return (
    <BlogPostContext.Provider value={{ data, setData }}>
      {children}
    </BlogPostContext.Provider>
  );
};
