"use client";

import { useDeleteBoardMutation } from "../model/useDeleteBoardMutation";

const DeleteBoard = () => {
  const { mutate: deleteBoard } = useDeleteBoardMutation();
  return (
    <div
      className="retro-button cursor-pointer px-4 py-2 text-sm transition-all duration-300"
      style={{
        border: '2px solid #e94560',
        background: 'rgba(233, 69, 96, 0.2)',
        fontFamily: "'VT323', monospace",
        fontSize: '1.2rem',
        color: '#e94560',
        textShadow: '0 0 10px #e94560',
        boxShadow: '0 0 10px rgba(233, 69, 96, 0.5)'
      }}
      onClick={() => deleteBoard(1)}
    >
      삭제할거임
    </div>
  );
};

export default DeleteBoard;
