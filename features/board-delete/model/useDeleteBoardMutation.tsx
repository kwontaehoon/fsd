import { deleteBoard } from "@/entities/board/api";
import { useMutation } from "@tanstack/react-query";

// board 삭제
export const useDeleteBoardMutation = () => {
  const mutationOptions = {
    mutationFn: async (boardId: number) => {
      const results = await deleteBoard(boardId);
      return results;
    },
  };
  return useMutation(mutationOptions);
};
