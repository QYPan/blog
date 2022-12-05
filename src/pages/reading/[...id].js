import { getAllPostFiles } from "../../utils/posts";
import { ArticleLayout } from "../../components/ArticleLayout";

export function getStaticProps({ params }) {
  console.log("params.id: ", params.id);
  return {
    props: {
      postData: "aaaaaaa",
    },
  };
}

export function getStaticPaths() {
  const postFiles = getAllPostFiles();
  const paths = postFiles.map((postFile) => {
    return {
      params: {
        id: postFile,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return <ArticleLayout articleData={postData}></ArticleLayout>;
}
