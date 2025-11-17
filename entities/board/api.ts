"use client";

import { supabase } from "@/shared/api/supabase-client";
import { BoardPost, BoardCreate } from "./model";

// board 목록
export const fetchBoardList = async (): Promise<BoardPost[]> => {
  const { data, error } = await supabase.from("boards").select();

  if (error) {
    console.error("Error fetchBoardList:", error);
    throw new Error("게시물 목록을 불러오는 데 실패했습니다.");
  }

  return (data || []) as BoardPost[];
};

// board 생성
export const createBoard = async (
  boardData: BoardCreate
): Promise<{ id: number }[] | null> => {
  const { data: createBoardFlag, error } = await supabase
    .from("boards")
    .insert(boardData)
    .select("id");

  if (error) {
    console.error("Error createBoard:", error);
    throw new Error("게시물 생성을 실패했습니다.");
  }

  return createBoardFlag;
};

// board 필터링
export const filteringBoard = async (
  filtering: BoardPost
): Promise<BoardPost | null> => {
  const { data: filteringBoardData, error } = await supabase
    .from("boards")
    .insert(filtering);

  if (error) {
    console.error("Error filteringBoard:", error);
    throw new Error("게시물 필터를 실패했습니다.");
  }

  return filteringBoardData;
};

// board 삭제
export const deleteBoard = async (
  boardId: number
): Promise<BoardPost[] | null> => {
  const { data: DeleteBoard, error } = await supabase
    .from("boards")
    .delete()
    .eq("board_id", boardId);

  if (error) {
    console.error("Error deleteBoard:", error);
    throw new Error("게시물 삭제를 실패했습니다.");
  }

  return DeleteBoard;
};