import { createBoard } from "@/entities/board/api"
import { BoardCreate } from "@/entities/board/model"
import { useMutation } from "@tanstack/react-query"

// board 생성
export const useCreateBoardMutation = () => {
    const mutationOptions = {
      mutationFn: async (boardData: BoardCreate) => {
        const results = await createBoard(boardData)
        return results
      },
    }
    return useMutation(mutationOptions)
  }