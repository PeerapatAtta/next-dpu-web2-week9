import { DUMMY_NEWS } from "@/data/dummy-news";
import { notFound } from "next/navigation";
import Link from 'next/link';

export default function NewsContentPage({ params }) {
    const slug = params.slug;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

    if (!newsItem) notFound(); // If the news item is not found, show a 404 page

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${slug}/image`}>
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}