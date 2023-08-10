import {
  createClient as _createClient,
  type ClientConfig,
} from "@sanity/client";
import { makeSafeQueryRunner, q, type Selection } from "groqd";

const authorSelection = {
  name: q.string().min(1),
  email: q.string().min(1),
} satisfies Selection;

const postSelection = {
  title: q.string().min(1),
  body: q.array(q.contentBlock()),
  publishedAt: q.date(),
  slug: q.slug("slug"),
  author: q("author").filter().deref().grab(authorSelection),
} satisfies Selection;

const fileSelection = {
  description: q.string().min(1),
  publishedAt: q.date(),
  url: ["file.asset->url", q.string().min(1)],
} satisfies Selection;

type Params = Record<string, number | string>;

export function createClient({ projectId, dataset, ...rest }: ClientConfig) {
  const client = _createClient({
    projectId,
    dataset,
    ...rest,
  });

  const runQuery = makeSafeQueryRunner((query: string, params: Params = {}) =>
    client.fetch(query, params),
  );

  async function getPosts() {
    return runQuery(
      q("*", { isArray: true })
        .filter("_type == 'post' && defined(slug.current)")
        .grab(postSelection)
        .order("_createdAt desc"),
    );
  }

  async function getPost(slug: string) {
    return runQuery(
      q("*")
        .filter(
          "_type == 'post' && defined(slug.current) && slug.current == $slug",
        )
        .grab(postSelection)
        .slice(0),
      { slug },
    );
  }

  async function getFiles(limit?: number) {
    const query = q("*")
      .filterByType("record")
      .grab(fileSelection)
      .order("publishedAt desc");

    if (typeof limit === "number") {
      query.slice(0, limit);
    }

    return runQuery(query);
  }

  return {
    posts: { getAll: getPosts, getOne: getPost },
    files: {
      getAll: () => getFiles(),
      getLimited: (limit: number) => getFiles(limit),
    },
  };
}
