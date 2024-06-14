interface PostPageProps {
  params: {
    slug: string[];
  };
}

export default async function PostPage({ params }: PostPageProps) {
  return (
    <article className="container py-6 prose dark:prose-invert max-2-3xl mx-auto"></article>
  );
}
