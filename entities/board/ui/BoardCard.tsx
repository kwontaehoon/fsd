// 반복문을 돌리지않고, 데이터 배열에 대해 알지 못함. 오직 하나의 게시물 데이터만 다룸.
import DeleteBoard from "@/features/board-delete/ui/DeleteBoard";
import { BoardPost } from "../model";

interface BoardCardProps {
  post: BoardPost;
}

export function BoardCard({ post }: BoardCardProps) {
  return (
    <div className="retro-box p-6 mb-4 hover:scale-105 transition-all duration-300" style={{
      borderColor: '#00d9ff',
      borderWidth: '2px',
      borderStyle: 'solid'
    }}>
      <div className="text-2xl mb-3 retro-glow" style={{ 
        color: '#00ff41',
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '1rem',
        lineHeight: '1.5'
      }}>{post.title}</div>
      <p style={{ 
        fontSize: "1.2em", 
        color: "#00d9ff",
        fontFamily: "'VT323', monospace",
        marginBottom: '10px',
        textShadow: '0 0 5px #00d9ff'
      }}>
        작성자: {post.author} | 기간: {post.duration}
      </p>
      <div className="mt-4 flex items-center">
        <span className="flex-1 text-xl" style={{ 
          color: '#ffd700',
          fontFamily: "'VT323', monospace",
          textShadow: '0 0 10px #ffd700'
        }}>⭐ {post.rating}점</span>
        <DeleteBoard />
      </div>
    </div>
  );
}
