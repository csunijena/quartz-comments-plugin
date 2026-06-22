import type { QuartzComponent, QuartzComponentProps } from "@quartz-community/types";
import { classNames } from "../util/lang";
// @ts-expect-error - inline script imported as string by esbuild loader
import script from "./scripts/comments.inline";

type RequiredOptsConstructor<Options> = (opts: Options) => QuartzComponent;

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

export type CommentsOptions =
  | {
      provider: "giscus";
      options: GiscusOptions;
    }
  | {
      provider: "beblob";
      options: BeBlobOptions;
    };

function boolToStringBool(b: boolean): string {
  return b ? "1" : "0";
}

export default ((opts: CommentsOptions) => {
  const Comments: QuartzComponent = ({ displayClass, fileData, cfg }: QuartzComponentProps) => {
    const commentsOverride = fileData.frontmatter?.comments;
    if (commentsOverride === false || commentsOverride === "false") {
      return <></>;
    }

    if (opts.provider === "giscus") {
      return (
        <div
          class={classNames(displayClass, "giscus")}
          data-repo={opts.options.repo}
          data-repo-id={opts.options.repoId}
          data-category={opts.options.category}
          data-category-id={opts.options.categoryId}
          data-mapping={opts.options.mapping ?? "url"}
          data-strict={boolToStringBool(opts.options.strict ?? true)}
          data-reactions-enabled={boolToStringBool(opts.options.reactionsEnabled ?? true)}
          data-input-position={opts.options.inputPosition ?? "bottom"}
          data-light-theme={opts.options.lightTheme ?? "light"}
          data-dark-theme={opts.options.darkTheme ?? "dark"}
          data-theme-url={
            opts.options.themeUrl ?? `https://${cfg.baseUrl ?? "example.com"}/static/giscus`
          }
          data-lang={opts.options.lang ?? "en"}
        ></div>
      );
    } else if (opts.provider === "beblob") {
      return (
        <div
          class={classNames(displayClass, "beblob")}
          id="beblob_thread"
          data-client-id={opts.options.clientId}
          data-redirect-uri={opts.options.redirectUri}
          data-project-name={opts.options.projectName}
          data-issue-mapping-strategy={opts.options.issueMappingStrategy ?? "pageTitle"}
          data-theme={opts.options.theme ?? "light"}
          data-lang={opts.options.lang ?? "en"}
          data-gitlab-url={opts.options.gitlabUrl ?? "https://gitlab.com"}
        >
          <noscript>Please enable JavaScript to view comments.</noscript>
          <script
            id="beblob-script"
            src="https://unpkg.com/beblob@2.1.0/dist/beblob.js"
            data-client-id={opts.options.clientId}
            data-redirect-uri={opts.options.redirectUri}
            data-project-name={opts.options.projectName}
            data-issue-mapping-strategy={opts.options.issueMappingStrategy ?? "pageTitle"}
            data-theme={opts.options.theme ?? "light"}
            data-lang={opts.options.lang ?? "en"}
            data-gitlab-url={opts.options.gitlabUrl ?? "https://gitlab.com"}
            data-beblob-version="2.1.0"
            defer
          />
        </div>
      );
    }
  };

  Comments.afterDOMLoaded = script;

  return Comments;
}) satisfies RequiredOptsConstructor<CommentsOptions>;
