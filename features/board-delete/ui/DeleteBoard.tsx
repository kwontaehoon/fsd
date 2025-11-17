"use client";

import { useDeleteBoardMutation } from "../model/useDeleteBoardMutation";

const DeleteBoard = () => {
  const { mutate: deleteBoard } = useDeleteBoardMutation();
  return (
    <div
      className="border px-2 py-1 rounded-md text-sm cursor-pointer"
      onClick={() => deleteBoard(1)}
    >
      삭제할거임
    </div>
  );
};

export default DeleteBoard;
