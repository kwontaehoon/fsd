// src/features/board-list/ui/BoardListFeature.tsx (Server Component)

import { fetchBoardList } from "@/entities/board/api";
import { BoardPost } from "@/entities/board/model";
import { BoardCard } from "@/entities/board/ui/BoardCard";

export async function BoardListFeature() {
  let posts: BoardPost[];

  try {
    posts = await fetchBoardList();
  } catch (e) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>
        게시물 목록을 불러올 수 없습니다.
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        등록된 게시물이 없습니다.
      </div>
    );
  }

  return (
    <div
      className="board-list-container"
      style={{ display: "grid", gap: "20px" }}
    >
      {posts.map((post) => (
        <BoardCard key={post.id} post={post} />
      ))}
    </div>
  );
}
