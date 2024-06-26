import { Metadata } from "next"
import {posts} from "#site/content"

export const metadata: Metadata = {
  title: 'Tags',
  description: "Topic I've writting about",
}

export default async function TagsPage() {
  const Tags = getAllTags(posts)
}
