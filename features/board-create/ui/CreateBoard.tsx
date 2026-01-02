"use client";

import { useCreateBoardMutation } from "../model/useCreateBoardMutation";

const CreateBoard = () => {
  const { mutate: createBoard } = useCreateBoardMutation();

  return (
    <div
      className="flex justify-end my-5"
      onClick={() =>
        createBoard({
          title: "1",
          subtitle: "1",
          description: "1",
          author: "1",
          total_cost: 1,
          user_id: 1,
        })
      }
    >
      <div 
        className="retro-button cursor-pointer flex items-center space-x-2 px-8 py-4 text-white transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #e94560 0%, #ff1493 100%)',
          border: '3px solid #00d9ff',
          fontFamily: "'Press Start 2P', cursive",
          fontSize: '0.7rem',
          boxShadow: '0 0 15px #e94560, inset 0 0 10px rgba(233, 69, 96, 0.3)',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
        }}
      >
        새 게시글 작성
      </div>
    </div>
  );
};

export default CreateBoard;
