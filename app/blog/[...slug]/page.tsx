import { posts } from "#site/content"
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["parmas"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find(post => post.slugAsParams === slug)

  return post;
}

export async function generateStaticParams(): Promise<PostPageProps["parmas"][]> {
  return posts.map(post => ({slug: post.slugAsParams.split("/")}))
}

export default async function PostPage({ params }: PostPageProps) {
  return (
    <article className="container py-6 prose dark:prose-invert max-2-3xl mx-auto">
      <h1 className="mb-2"></h1>
    </article>
  );
}
