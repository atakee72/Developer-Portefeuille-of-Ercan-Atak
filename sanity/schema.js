import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import { author } from "./schemas/author";
import { testimonials } from "./schemas/testimonials";

export const schema = {
  types: [post, author, category, blockContent, testimonials],
};
