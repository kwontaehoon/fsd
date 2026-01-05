import BoardList from "@/features/board-list/ui/BoardList";
import CreateBoard from "@/features/board-create/ui/CreateBoard";
import DeleteBoard from "@/features/board-delete/ui/DeleteBoard";
import Header from '@/widgets/header'

const page = async () => {
  return (
    <div style={{ position: 'relative' }}>
      <div 
        style={{ 
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '0.6rem',
          color: '#ff1493',
          textShadow: '0 0 10px #ff1493',
          opacity: 0.7,
          zIndex: 10
        }}
      >
        dev
      </div>
      <Header />
      <main>
        <CreateBoard />
        <BoardList />
      </main>

      {/* 💡 기능 컴포넌트(Feature)만 배치 */}
    </div>
  );
};

export default page;
