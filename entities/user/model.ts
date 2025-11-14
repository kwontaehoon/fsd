// 유저 데이터 모델

export type UserProfile = {
  id: string;
  email: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
};

export type UpdateProfilePayload = Partial<
  Omit<UserProfile, "id" | "created_at" | "email">
>;

export type AuthStatus = "authenticated" | "unauthenticated" | "loading";
