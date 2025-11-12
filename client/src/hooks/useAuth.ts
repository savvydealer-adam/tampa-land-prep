import { useQuery } from "@tanstack/react-query";

interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  profileImageUrl: string | null;
}

export function useAuth() {
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ["/api/auth/user"],
    retry: false,
  });

  const isAdmin = user?.email?.toLowerCase().endsWith("@savvydealer.com") ?? false;

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    isAdmin,
  };
}
