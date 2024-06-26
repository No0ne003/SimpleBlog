import Link from "next/link";
import { slug } from "github-slugger";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return <Link href={`/tags/${slug(tag)}`}>{tag}</Link>;
}
