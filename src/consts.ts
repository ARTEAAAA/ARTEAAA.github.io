export const SITE_TITLE = "AR 的博客";
export const SITE_DESCRIPTION = "技术、日常，以及值得记下来的小事。";
export const withBase = (path = "") =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
