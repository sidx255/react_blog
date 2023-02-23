import { BlogData } from '../types/blogPosts';
import { Dispatch, SetStateAction } from 'react';


// blogpost context type
export interface BlogPostContextType {
    data: BlogData[] | null;
    setData: Dispatch<SetStateAction<BlogData[] | null>>;
}