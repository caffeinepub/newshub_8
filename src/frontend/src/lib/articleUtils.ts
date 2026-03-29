export const CATEGORY_IMAGES: Record<string, string> = {
  World: "photo-1504711434969-e33886168f5c",
  Politics: "photo-1504711434969-e33886168f5c",
  Tech: "photo-1518770660439-4636190af475",
  Technology: "photo-1518770660439-4636190af475",
  Sports: "photo-1541534741688-6078c6bfb5c5",
  Business: "photo-1611974789855-9c2a0a7236a3",
  Finance: "photo-1611974789855-9c2a0a7236a3",
  Entertainment: "photo-1489599849927-2ee91cede3ba",
  Science: "photo-1451187580459-43490279c0fa",
  Opinion: "photo-1455390582262-044cdead277a",
};

export function getArticleImage(imageUrl: string, category: string): string {
  if (imageUrl?.startsWith("http")) return imageUrl;
  const photoId =
    CATEGORY_IMAGES[category] ?? "photo-1504711434969-e33886168f5c";
  return `https://images.unsplash.com/${photoId}?w=600&auto=format&fit=crop`;
}

export function getSmallArticleImage(
  imageUrl: string,
  category: string,
): string {
  if (imageUrl?.startsWith("http")) return imageUrl;
  const photoId =
    CATEGORY_IMAGES[category] ?? "photo-1504711434969-e33886168f5c";
  return `https://images.unsplash.com/${photoId}?w=120&auto=format&fit=crop`;
}

export function timeAgo(publishedAt: string): string {
  try {
    const date = new Date(publishedAt);
    const diff = Date.now() - date.getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  } catch {
    return publishedAt;
  }
}
