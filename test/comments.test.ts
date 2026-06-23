import { describe, it, expect } from "vitest";
import { Fragment } from "preact";
import Comments from "../src/components/Comments";
import type { QuartzComponent, QuartzComponentProps } from "@quartz-community/types";

type CommentsOptions = Parameters<typeof Comments>[0];

const baseGiscusOpts: CommentsOptions = {
  provider: "giscus",
  options: {
    repo: "test/repo",
    repoId: "test-id",
    category: "Announcements",
    categoryId: "test-cat-id",
  },
};

const baseBeBlobOpts: CommentsOptions = {
  provider: "beblob",
  options: {
    clientId: "test-client-id",
    redirectUri: "https://example.com/",
    projectName: "test/repo",
    issueMappingStrategy: "pageTitle",
    theme: "light",
  },
};

function buildProps(
  overrides: Partial<QuartzComponentProps> & {
    frontmatter?: Record<string, unknown>;
    cfg?: Record<string, unknown>;
  } = {},
): QuartzComponentProps {
  const { frontmatter, cfg, ...rest } = overrides;
  return {
    ctx: {},
    externalResources: { css: [], js: [], additionalHead: [] },
    fileData: { frontmatter: frontmatter ?? {} } as QuartzComponentProps["fileData"],
    cfg: (cfg ?? {}) as QuartzComponentProps["cfg"],
    children: [],
    tree: null,
    allFiles: [],
    ...rest,
  };
}

function renderComments(
  opts: CommentsOptions,
  props: QuartzComponentProps,
): ReturnType<QuartzComponent> {
  const Component = Comments(opts);
  return Component(props);
}

function isFragmentOrEmpty(vnode: unknown): boolean {
  if (vnode == null || vnode === false) return true;
  if (typeof vnode !== "object") return false;
  const v = vnode as { type?: unknown };
  return v.type === Fragment;
}

function getDivProps(vnode: unknown): Record<string, unknown> | null {
  if (typeof vnode !== "object" || vnode == null) return null;
  const v = vnode as { type?: unknown; props?: Record<string, unknown> };
  if (v.type !== "div") return null;
  return v.props ?? null;
}

function getBeBlobScriptProps(vnode: unknown): Record<string, unknown> | null {
  if (typeof vnode !== "object" || vnode == null) return null;
  const v = vnode as { props?: { children?: unknown } };
  const children = v.props?.children;
  const childrenArray = Array.isArray(children) ? children : [children];
  for (const child of childrenArray) {
    if (typeof child !== "object" || child == null) continue;
    const childVNode = child as { type?: unknown; props?: Record<string, unknown> };
    if (childVNode.type === "script") {
      return childVNode.props ?? null;
    }
  }

  return null;
}

describe("Comments Plugin", () => {
  it("should export Comments component", () => {
    expect(Comments).toBeDefined();
  });

  it("should create a component with options", () => {
    const component = Comments(baseGiscusOpts);
    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
  });

  it("should create a BeBlob component with options", () => {
    const component = Comments(baseBeBlobOpts);
    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
  });
});

describe("Comments: frontmatter.comments override", () => {
  describe("Giscus provider", () => {
    it("renders the giscus div when frontmatter.comments is undefined", () => {
      const result = renderComments(baseGiscusOpts, buildProps({ frontmatter: {} }));
      const props = getDivProps(result);
      expect(props).not.toBeNull();
      expect(props?.["data-repo"]).toBe("test/repo");
    });

    it("renders the giscus div when frontmatter.comments is true", () => {
      const result = renderComments(
        baseGiscusOpts,
        buildProps({ frontmatter: { comments: true } }),
      );
      expect(getDivProps(result)).not.toBeNull();
    });

    it("renders the giscus div when frontmatter.comments is the string 'true'", () => {
      const result = renderComments(
        baseGiscusOpts,
        buildProps({ frontmatter: { comments: "true" } }),
      );
      expect(getDivProps(result)).not.toBeNull();
    });

    it("suppresses comments when frontmatter.comments is false", () => {
      const result = renderComments(
        baseGiscusOpts,
        buildProps({ frontmatter: { comments: false } }),
      );
      expect(isFragmentOrEmpty(result)).toBe(true);
      expect(getDivProps(result)).toBeNull();
    });

    it("suppresses comments when frontmatter.comments is the string 'false'", () => {
      const result = renderComments(
        baseGiscusOpts,
        buildProps({ frontmatter: { comments: "false" } }),
      );
      expect(isFragmentOrEmpty(result)).toBe(true);
      expect(getDivProps(result)).toBeNull();
    });

    it("renders the giscus div when frontmatter.comments is the number 0", () => {
      const result = renderComments(baseGiscusOpts, buildProps({ frontmatter: { comments: 0 } }));
      expect(getDivProps(result)).not.toBeNull();
    });

    it("renders the giscus div when frontmatter.comments is the empty string", () => {
      const result = renderComments(baseGiscusOpts, buildProps({ frontmatter: { comments: "" } }));
      expect(getDivProps(result)).not.toBeNull();
    });

    it("renders the giscus div when frontmatter.comments is null", () => {
      const result = renderComments(
        baseGiscusOpts,
        buildProps({ frontmatter: { comments: null } }),
      );
      expect(getDivProps(result)).not.toBeNull();
    });
  });

  describe("BeBlob provider", () => {
    it("renders the beblob div when frontmatter.comments is undefined", () => {
      const result = renderComments(baseBeBlobOpts, buildProps({ frontmatter: {} }));
      const props = getDivProps(result);
      expect(props).not.toBeNull();
      expect(props?.["data-client-id"]).toBe("test-client-id");
    });

    it("renders the beblob div when frontmatter.comments is true", () => {
      const result = renderComments(
        baseBeBlobOpts,
        buildProps({ frontmatter: { comments: true } }),
      );
      expect(getDivProps(result)).not.toBeNull();
    });

    it("suppresses comments when frontmatter.comments is false", () => {
      const result = renderComments(
        baseBeBlobOpts,
        buildProps({ frontmatter: { comments: false } }),
      );
      expect(isFragmentOrEmpty(result)).toBe(true);
      expect(getDivProps(result)).toBeNull();
    });

    it("suppresses comments when frontmatter.comments is the string 'false'", () => {
      const result = renderComments(
        baseBeBlobOpts,
        buildProps({ frontmatter: { comments: "false" } }),
      );
      expect(isFragmentOrEmpty(result)).toBe(true);
      expect(getDivProps(result)).toBeNull();
    });
  });
});

describe("Comments: data attribute wiring", () => {
  describe("Giscus provider", () => {
    it("propagates required giscus options", () => {
      const result = renderComments(baseGiscusOpts, buildProps());
      const props = getDivProps(result);
      expect(props).not.toBeNull();
      expect(props?.["data-repo"]).toBe("test/repo");
      expect(props?.["data-repo-id"]).toBe("test-id");
      expect(props?.["data-category"]).toBe("Announcements");
      expect(props?.["data-category-id"]).toBe("test-cat-id");
    });

    it("applies default values when optional options are omitted", () => {
      const result = renderComments(baseGiscusOpts, buildProps());
      const props = getDivProps(result);
      expect(props?.["data-mapping"]).toBe("url");
      expect(props?.["data-strict"]).toBe("1");
      expect(props?.["data-reactions-enabled"]).toBe("1");
      expect(props?.["data-input-position"]).toBe("bottom");
      expect(props?.["data-light-theme"]).toBe("light");
      expect(props?.["data-dark-theme"]).toBe("dark");
      expect(props?.["data-lang"]).toBe("en");
    });

    it("respects user-provided optional values", () => {
      const opts: CommentsOptions = {
        provider: "giscus",
        options: {
          ...baseGiscusOpts.options,
          mapping: "pathname",
          strict: false,
          reactionsEnabled: false,
          inputPosition: "top",
          lightTheme: "catppuccin_latte",
          darkTheme: "catppuccin_mocha",
          lang: "nl",
        },
      };
      const result = renderComments(opts, buildProps());
      const props = getDivProps(result);
      expect(props?.["data-mapping"]).toBe("pathname");
      expect(props?.["data-strict"]).toBe("0");
      expect(props?.["data-reactions-enabled"]).toBe("0");
      expect(props?.["data-input-position"]).toBe("top");
      expect(props?.["data-light-theme"]).toBe("catppuccin_latte");
      expect(props?.["data-dark-theme"]).toBe("catppuccin_mocha");
      expect(props?.["data-lang"]).toBe("nl");
    });

    it("uses cfg.baseUrl to build the default themeUrl", () => {
      const result = renderComments(
        baseGiscusOpts,
        buildProps({ cfg: { baseUrl: "example.test" } }),
      );
      const props = getDivProps(result);
      expect(props?.["data-theme-url"]).toBe("https://example.test/static/giscus");
    });

    it("falls back when cfg.baseUrl is missing", () => {
      const result = renderComments(baseGiscusOpts, buildProps({ cfg: {} }));
      const props = getDivProps(result);
      expect(props?.["data-theme-url"]).toBe("https://example.com/static/giscus");
    });

    it("honours an explicit themeUrl override", () => {
      const opts: CommentsOptions = {
        provider: "giscus",
        options: { ...baseGiscusOpts.options, themeUrl: "https://cdn.test/theme" },
      };
      const result = renderComments(opts, buildProps({ cfg: { baseUrl: "example.test" } }));
      const props = getDivProps(result);
      expect(props?.["data-theme-url"]).toBe("https://cdn.test/theme");
    });
  });

  describe("BeBlob provider", () => {
    it("propagates required beblob options", () => {
      const result = renderComments(baseBeBlobOpts, buildProps());
      const props = getDivProps(result);
      expect(props).not.toBeNull();
      expect(props?.["data-client-id"]).toBe("test-client-id");
      expect(props?.["data-redirect-uri"]).toBe("https://example.com/");
      expect(props?.["data-project-name"]).toBe("test/repo");
      expect(props?.id).toBe("beblob_thread");
      expect(props?.class).toContain("beblob");
    });

    it("applies default values when optional options are omitted", () => {
      const result = renderComments(baseBeBlobOpts, buildProps());
      const props = getDivProps(result);
      expect(props?.["data-issue-mapping-strategy"]).toBe("pageTitle");
      expect(props?.["data-theme"]).toBe("light");
      expect(props?.["data-lang"]).toBe("en");
      expect(props?.["data-gitlab-url"]).toBe("https://gitlab.com");
    });

    it("respects user-provided optional values", () => {
      const opts: CommentsOptions = {
        provider: "beblob",
        options: {
          ...baseBeBlobOpts.options,
          issueMappingStrategy: "url",
          theme: "dark",
          lang: "de",
          gitlabUrl: "https://gitlab.example.com",
        },
      };
      const result = renderComments(opts, buildProps());
      const props = getDivProps(result);
      expect(props?.["data-issue-mapping-strategy"]).toBe("url");
      expect(props?.["data-theme"]).toBe("dark");
      expect(props?.["data-lang"]).toBe("de");
      expect(props?.["data-gitlab-url"]).toBe("https://gitlab.example.com");
    });

    it("renders canonical beblob script attributes", () => {
      const result = renderComments(baseBeBlobOpts, buildProps());
      const scriptProps = getBeBlobScriptProps(result);

      expect(scriptProps).not.toBeNull();
      expect(scriptProps?.id).toBe("beblob-script");
      expect(scriptProps?.src).toBe("https://unpkg.com/beblob@2.1.0/dist/beblob.js");
      expect(scriptProps?.["data-dev-mode"]).toBe("false");
      expect(scriptProps?.["data-beblob-version"]).toBe("2.1.0");
      expect(scriptProps?.["data-project-name"]).toBe("repo");
    });

    it("uses repo segment for script project name when namespace is provided", () => {
      const opts: CommentsOptions = {
        provider: "beblob",
        options: {
          ...baseBeBlobOpts.options,
          projectName: "group/subgroup/my-project",
        },
      };

      const result = renderComments(opts, buildProps());
      const divProps = getDivProps(result);
      const scriptProps = getBeBlobScriptProps(result);

      expect(divProps?.["data-project-name"]).toBe("group/subgroup/my-project");
      expect(scriptProps?.["data-project-name"]).toBe("my-project");
    });

    it("includes noscript fallback", () => {
      const result = renderComments(baseBeBlobOpts, buildProps());
      const v = result as { type?: string; props?: { children?: unknown } };
      expect(v.type).toBe("div");
      expect(v.props?.children).toBeDefined();
    });
  });
});
