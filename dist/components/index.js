// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/scripts/comments.inline.ts
var comments_inline_default = 'var u=n=>{let e=n.detail.theme,s=document.querySelector("iframe.giscus-frame");s&&s.contentWindow&&s.contentWindow.postMessage({giscus:{setConfig:{theme:d(c(e))}}},"https://giscus.app")},m=n=>{let e=n.detail.theme,s=document.querySelector(".beblob");if(!s)return;let t=e==="dark"?"dark":"light";s.setAttribute("data-theme",t)},c=n=>{if(n!=="dark"&&n!=="light")return n;let e=document.querySelector(".giscus");if(!e)return n;let s=e.dataset.darkTheme??"dark",t=e.dataset.lightTheme??"light";return n==="dark"?s:t},d=n=>{let e=document.querySelector(".giscus");return e?`${e.dataset.themeUrl??"https://giscus.app/themes"}/${n}.css`:`https://giscus.app/themes/${n}.css`},a=[],o=n=>{a.push(n)};if(typeof document<"u"){let n=()=>{a.forEach(t=>t()),a.length=0;let e=document.querySelector(".giscus"),s=document.querySelector(".beblob");if(e){let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-loading","lazy"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-repo",e.dataset.repo),t.setAttribute("data-repo-id",e.dataset.repoId),t.setAttribute("data-category",e.dataset.category),t.setAttribute("data-category-id",e.dataset.categoryId),t.setAttribute("data-mapping",e.dataset.mapping),t.setAttribute("data-strict",e.dataset.strict),t.setAttribute("data-reactions-enabled",e.dataset.reactionsEnabled),t.setAttribute("data-input-position",e.dataset.inputPosition),t.setAttribute("data-lang",e.dataset.lang);let i=document.documentElement.getAttribute("saved-theme");i&&t.setAttribute("data-theme",d(c(i))),e.appendChild(t);let r=u;document.addEventListener("themechange",r),o(()=>document.removeEventListener("themechange",r))}else if(s){let t=m;document.addEventListener("themechange",t),o(()=>document.removeEventListener("themechange",t))}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n(),document.addEventListener("nav",n),document.addEventListener("render",n)}\n';
var l;
function S(n2) {
  return n2.children;
}
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/Comments.tsx
function boolToStringBool(b2) {
  return b2 ? "1" : "0";
}
var Comments_default = ((opts) => {
  const Comments = ({ displayClass, fileData, cfg }) => {
    const commentsOverride = fileData.frontmatter?.comments;
    if (commentsOverride === false || commentsOverride === "false") {
      return /* @__PURE__ */ u2(S, {});
    }
    if (opts.provider === "giscus") {
      return /* @__PURE__ */ u2(
        "div",
        {
          class: classNames(displayClass, "giscus"),
          "data-repo": opts.options.repo,
          "data-repo-id": opts.options.repoId,
          "data-category": opts.options.category,
          "data-category-id": opts.options.categoryId,
          "data-mapping": opts.options.mapping ?? "url",
          "data-strict": boolToStringBool(opts.options.strict ?? true),
          "data-reactions-enabled": boolToStringBool(opts.options.reactionsEnabled ?? true),
          "data-input-position": opts.options.inputPosition ?? "bottom",
          "data-light-theme": opts.options.lightTheme ?? "light",
          "data-dark-theme": opts.options.darkTheme ?? "dark",
          "data-theme-url": opts.options.themeUrl ?? `https://${cfg.baseUrl ?? "example.com"}/static/giscus`,
          "data-lang": opts.options.lang ?? "en"
        }
      );
    } else if (opts.provider === "beblob") {
      const beblobVersion = "2.1.0";
      const clientId = opts.options.clientId.trim();
      const redirectUri = opts.options.redirectUri.trim();
      const projectName = opts.options.projectName.trim();
      const beblobProjectName = projectName.includes("/") ? projectName.split("/").filter(Boolean).pop() ?? projectName : projectName;
      const issueMappingStrategy = opts.options.issueMappingStrategy ?? "pageTitle";
      const issueId = opts.options.issueId?.trim();
      const theme = opts.options.theme ?? "light";
      const lang = opts.options.lang ?? "en";
      const gitlabUrl = (opts.options.gitlabUrl ?? "https://gitlab.com").trim().replace(/\/+$/, "");
      return /* @__PURE__ */ u2(
        "div",
        {
          class: classNames(displayClass, "beblob"),
          "data-client-id": clientId,
          "data-redirect-uri": redirectUri,
          "data-project-name": projectName,
          "data-issue-mapping-strategy": issueMappingStrategy,
          "data-issue-id": issueId,
          "data-theme": theme,
          "data-lang": lang,
          "data-gitlab-url": gitlabUrl,
          children: [
            /* @__PURE__ */ u2("h2", { id: "comments-heading", children: "Comments" }),
            /* @__PURE__ */ u2("hr", {}),
            /* @__PURE__ */ u2("div", { id: "beblob_thread", children: [
              /* @__PURE__ */ u2("noscript", { children: "Please enable JavaScript to view comments." }),
              /* @__PURE__ */ u2("style", { children: "#beblob_thread .comment-textarea-container{border-top:none;}" }),
              /* @__PURE__ */ u2(
                "script",
                {
                  id: "beblob-script",
                  src: `https://unpkg.com/beblob@${beblobVersion}/dist/beblob.js`,
                  "data-client-id": clientId,
                  "data-redirect-uri": redirectUri,
                  "data-project-name": beblobProjectName,
                  "data-issue-mapping-strategy": issueMappingStrategy,
                  "data-issue-id": issueId,
                  "data-dev-mode": "false",
                  "data-beblob-version": beblobVersion,
                  "data-theme": theme,
                  "data-lang": lang,
                  "data-gitlab-url": gitlabUrl,
                  defer: true
                }
              )
            ] })
          ]
        }
      );
    }
  };
  Comments.afterDOMLoaded = comments_inline_default;
  return Comments;
});

export { Comments_default as Comments };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map