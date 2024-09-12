import { useSearchParams } from "react-router-dom";

export function useURLParams() {
  const [searchParams, setSearchParams] = useSearchParams();
}
