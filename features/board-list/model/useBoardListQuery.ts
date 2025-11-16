'use client'; 

import { useQuery } from '@tanstack/react-query';
import { fetchBoardList } from '@/entities/board/api'; // 엔티티 API 함수 임포트

export const BOARD_LIST_QUERY_KEY = ['board', 'list'];

export function useBoardListQuery() {
  const queryResult = useQuery({
    queryKey: BOARD_LIST_QUERY_KEY,
    queryFn: fetchBoardList, 
    // staleTime: 5 * 60 * 1000,
  });
  
  return queryResult;
}