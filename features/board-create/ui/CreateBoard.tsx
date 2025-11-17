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
      <div className="cursor-pointer flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
        새 게시글 작성
      </div>
    </div>
  );
};

export default CreateBoard;
