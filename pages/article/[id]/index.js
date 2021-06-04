import { useRouter } from "next/router";
import Link from "next/link";
const article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <div>
      aaa {article.title}
      <Link href="/">Home</Link>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export default article;
