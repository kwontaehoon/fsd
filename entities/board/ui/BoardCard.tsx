import { BoardPost } from '../model'; 

interface BoardCardProps {
  post: BoardPost;
}

export function BoardCard({ post }: BoardCardProps) {
  
  return (
    <div style={{ padding: '15px', borderLeft: '5px solid #0070f3' }}>
      <h3>{post.title}</h3>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        작성자: {post.author} | 기간: {post.duration}
      </p>
      <div style={{ marginTop: '10px' }}>
        <span style={{ marginLeft: '15px' }}>⭐ {post.rating}점</span>
      </div>
    </div>
  );
}