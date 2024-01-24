import ArticleSections from "./components/ArticleSection/ArticleSections";
import { FeaturedOnArticles } from "./components/FeaturedArticles/FeaturedOnArticles";
import HeroArticles from "./components/HeroArticles/HeroArticles";

export default function Home() {
  return (
    <main className="xl:container mx-auto">
      <HeroArticles />
      <FeaturedOnArticles />
      <ArticleSections />
    </main>
  );
}
