import { QuartzComponent } from '@quartz-community/types';

type GiscusOptions = {
    repo: `${string}/${string}`;
    repoId: string;
    category: string;
    categoryId: string;
    themeUrl?: string;
    lightTheme?: string;
    darkTheme?: string;
    mapping?: "url" | "title" | "og:title" | "specific" | "number" | "pathname";
    strict?: boolean;
    reactionsEnabled?: boolean;
    inputPosition?: "top" | "bottom";
    lang?: string;
};
type BeBlobOptions = {
    clientId: string;
    redirectUri: string;
    projectName: string;
    issueMappingStrategy?: "url" | "pageTitle" | "issueId";
    issueId?: string;
    theme?: "light" | "dark" | "white" | "classic";
    lang?: string;
    gitlabUrl?: string;
};
type CommentsOptions = {
    provider: "giscus";
    options: GiscusOptions;
} | {
    provider: "beblob";
    options: BeBlobOptions;
};
declare const _default: (opts: CommentsOptions) => QuartzComponent;

export { _default as Comments, type CommentsOptions };
