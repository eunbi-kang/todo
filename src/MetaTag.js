import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTag = () => {
  return (
    <Helmet>
      <title>은비&#39;s To-do App</title>
      <meta
        name="description"
        content="Portfolio for world-renowned software
     engineer Eunbi"
      />
      <meta name="author" content="Eunbi" />
      <meta property="og:url" content="https://eunbi-kang.github.io/todo" />
      <meta property="og:title" content="은비의 투두앱" />
      <meta propery="og:image" content="https://eunbi-kang.github.io/images/og.webp" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:description"
        content="은비의 투두 리스트"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Eunbi's TodoApp" />
    </Helmet>
  );
};

export default MetaTag;
