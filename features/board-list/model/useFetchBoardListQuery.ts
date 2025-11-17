import { useQuery } from "@tanstack/react-query";
import { fetchBoardList } from "@/entities/board/api";
import { BOARD_LIST_QUERY_KEY } from ".";

// board 목록
export function useFetchBoardListQuery() {
  const queryOptions = useQuery({
    queryKey: BOARD_LIST_QUERY_KEY.fetchBoardList,
    queryFn: fetchBoardList,
    // staleTime: 5 * 60 * 1000,
  });

  return queryOptions;
}