import { useQuery } from "@tanstack/react-query";
import { getHome } from "@/core/actions/home";

export default function useHomeQuery(params?: any) {
  const { data, isLoading, isError, error, ...rest } = useQuery({
    queryKey: ["home", params],
    queryFn: getHome,
  });

  return { data, isLoading, isError, error, ...rest };
}
