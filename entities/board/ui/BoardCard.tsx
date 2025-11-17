// 반복문을 돌리지않고, 데이터 배열에 대해 알지 못함. 오직 하나의 게시물 데이터만 다룸.
import DeleteBoard from "@/features/board-delete/ui/DeleteBoard";
import { BoardPost } from "../model";

interface BoardCardProps {
  post: BoardPost;
}

export function BoardCard({ post }: BoardCardProps) {
  return (
    <div className="rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="text-xl text-gray-900 mb-2">{post.title}</div>
      <p style={{ fontSize: "0.9em", color: "#666" }}>
        작성자: {post.author} | 기간: {post.duration}
      </p>
      <div className="mt-4 flex">
        <span className="flex-1">⭐ {post.rating}점</span>
        <DeleteBoard />
      </div>
    </div>
  );
}
