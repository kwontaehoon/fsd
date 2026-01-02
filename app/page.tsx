import BoardList from "@/features/board-list/ui/BoardList";
import CreateBoard from "@/features/board-create/ui/CreateBoard";
import DeleteBoard from "@/features/board-delete/ui/DeleteBoard";
import Header from '@/widgets/header'

const page = async () => {
  return (
    <div>
      <div>dev</div>
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
