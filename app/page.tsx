import { fetchBoardList } from '@/entities/board/api';
import { BoardListFeature } from '@/features/board-list/ui/BoardList';

const page = async() => {
 
  console.log(await fetchBoardList())

  return (
    <div>
      <h1>전체 여행 기록</h1>
      <p style={{ marginBottom: '30px' }}>사용자들이 공유한 다양한 여행 게시물을 확인해보세요.</p>
      
      {/* 💡 기능 컴포넌트(Feature)만 배치 */}
      <BoardListFeature />
    </div>
  )
}

export default page