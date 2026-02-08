import type { User } from "@clerk/nextjs/server";

export interface UsersListProps {
  users: {
    data: User[];
    totalCount: number;
  };
}
