import { updateNews, deleteNews } from '@/lib/news';
import { DUMMY_NEWS } from '@/data/dummy-news';

// GET news by ID
export async function GET(_, { params }) {
    const { id } = await params;
    const newsItem = getAllNews().find((item) => item.id === id);

    if (!newsItem) {
        return Response.json({ error: 'News not found' }, { status: 404 });
    }

    return Response.json(newsItem);
}

export async function PUT(request, { params }) {
  const body = await request.json();
  const { id } = await params;

  if (!body.title && !body.content && !body.slug) {
    return Response.json({ error: 'Nothing to update' }, { status: 400 });
  }

  updateNews(id, body);
  return Response.json({ message: `News ${params.id} updated` });
}

export async function DELETE(_, { params }) {
  const { id } = await params;

  deleteNews(id);
  return new Response(null, { status: 204 });
}