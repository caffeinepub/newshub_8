import { useQuery } from "@tanstack/react-query";
import type { Article } from "../backend.d";
import { useActor } from "./useActor";

export function useAllArticles() {
  const { actor, isFetching } = useActor();
  return useQuery<Article[]>({
    queryKey: ["articles", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFeaturedArticles() {
  const { actor, isFetching } = useActor();
  return useQuery<Article[]>({
    queryKey: ["articles", "featured"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFeaturedArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTrendingArticles() {
  const { actor, isFetching } = useActor();
  return useQuery<Article[]>({
    queryKey: ["articles", "trending"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTrendingArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useEditorPicks() {
  const { actor, isFetching } = useActor();
  return useQuery<Article[]>({
    queryKey: ["articles", "editorPicks"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEditorPicks();
    },
    enabled: !!actor && !isFetching,
  });
}
