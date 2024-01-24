import React from "react";
import PopularArticles from "../Sidebar/PopularArticles";
import LatestArticles from "../LatestArticles/LatestArticles";
import ArticlesHeading from "../Shared/ArticlesHeading";

const ArticleSections = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <ArticlesHeading title="Latest Articles Published" />
        <LatestArticles />
      </div>
      <div>
        <div className="popular-articles-container sticky top-8">
          <ArticlesHeading title="Popular Articles" />
          <PopularArticles />
        </div>
      </div>
    </div>
  );
};

export default ArticleSections;
