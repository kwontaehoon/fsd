"use client";

import { useFetchBoardListQuery } from "../model/useFetchBoardListQuery";
import { BoardCard } from "@/entities/board/ui/BoardCard";

const BoardList = () => {
  const { data: posts, isLoading, error } = useFetchBoardListQuery();

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>게시물 로딩 중...</p>;
  }

  if (error) {
    return (
      <p style={{ color: "red", textAlign: "center" }}>
        데이터를 불러오는 중 오류가 발생했습니다.
      </p>
    );
  }

  if (!posts || posts.length === 0) {
    return <p style={{ textAlign: "center" }}>등록된 게시물이 없습니다.</p>;
  }

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {posts.slice(0, 3).map((post) => (
        <BoardCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default BoardList;
