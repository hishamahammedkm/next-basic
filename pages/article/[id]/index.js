import { useRouter } from "next/router";
import { server } from "../../config";
import Link from "next/link";
import Meta from "../../../components/Meta";
import { articles } from "../../../data";
const article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <div>
        <Meta title={article.title} description={article.excerpt} />
      aaa {article.title}
      <Link href="/">Home</Link>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${server}api/articles/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPath = async () => {
  const res = await fetch(
    `${server}api/articles`
  );
  const articles = await res.json();
  const ids = articles.map(article=>article.id)
  const paths = ids.map(id=>({params:{id:id.toString()}}))
  return {
      paths,
      fallback:false

  }
};

export default article;
