import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { id: movieId } = router.query;

  return <h2>{movieId} 영화 상세페이지</h2>;
}
