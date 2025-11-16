import { createClient } from "@/shared/api/supabase-server-client";
import { BoardPost } from "./model";

export const fetchBoardList = async (): Promise<BoardPost[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("boards").select();

  if (error) {
    console.error("Error fetching board list:", error);
    throw new Error("게시물 목록을 불러오는 데 실패했습니다.");
  }

  return (data || []) as BoardPost[];
};
