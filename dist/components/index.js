// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/scripts/comments.inline.ts
var comments_inline_default = 'var u=a=>{let e=a.detail.theme,s=document.querySelector("iframe.giscus-frame");s&&s.contentWindow&&s.contentWindow.postMessage({giscus:{setConfig:{theme:o(d(e))}}},"https://giscus.app")},m=a=>{let e=a.detail.theme,s=document.querySelector(".beblob");if(!s)return;let t=e==="dark"?"dark":"light";s.setAttribute("data-theme",t);let n=document.getElementById("beblob-script");n&&n.setAttribute("data-theme",t)},d=a=>{if(a!=="dark"&&a!=="light")return a;let e=document.querySelector(".giscus");if(!e)return a;let s=e.dataset.darkTheme??"dark",t=e.dataset.lightTheme??"light";return a==="dark"?s:t},o=a=>{let e=document.querySelector(".giscus");return e?`${e.dataset.themeUrl??"https://giscus.app/themes"}/${a}.css`:`https://giscus.app/themes/${a}.css`},i=[],c=a=>{i.push(a)};if(typeof document<"u"){let a=()=>{i.forEach(t=>t()),i.length=0;let e=document.querySelector(".giscus"),s=document.querySelector(".beblob");if(e){let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-loading","lazy"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-repo",e.dataset.repo),t.setAttribute("data-repo-id",e.dataset.repoId),t.setAttribute("data-category",e.dataset.category),t.setAttribute("data-category-id",e.dataset.categoryId),t.setAttribute("data-mapping",e.dataset.mapping),t.setAttribute("data-strict",e.dataset.strict),t.setAttribute("data-reactions-enabled",e.dataset.reactionsEnabled),t.setAttribute("data-input-position",e.dataset.inputPosition),t.setAttribute("data-lang",e.dataset.lang);let n=document.documentElement.getAttribute("saved-theme");n&&t.setAttribute("data-theme",o(d(n))),e.appendChild(t);let r=u;document.addEventListener("themechange",r),c(()=>document.removeEventListener("themechange",r))}else if(s){let t=document.createElement("script");t.id="beblob-script",t.src="https://unpkg.com/beblob@2.1.0/dist/beblob.js",t.async=!0,t.defer=!0,t.setAttribute("data-client-id",s.dataset.clientId),t.setAttribute("data-redirect-uri",s.dataset.redirectUri),t.setAttribute("data-project-name",s.dataset.projectName),t.setAttribute("data-issue-mapping-strategy",s.dataset.issueMappingStrategy),t.setAttribute("data-theme",s.dataset.theme),t.setAttribute("data-lang",s.dataset.lang),t.setAttribute("data-gitlab-url",s.dataset.gitlabUrl),s.appendChild(t);let n=m;document.addEventListener("themechange",n),c(()=>document.removeEventListener("themechange",n))}};document.addEventListener("nav",a),document.addEventListener("render",a)}\n';
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
      return /* @__PURE__ */ u2(
        "div",
        {
          class: classNames(displayClass, "beblob"),
          id: "beblob_thread",
          "data-client-id": opts.options.clientId,
          "data-redirect-uri": opts.options.redirectUri,
          "data-project-name": opts.options.projectName,
          "data-issue-mapping-strategy": opts.options.issueMappingStrategy ?? "pageTitle",
          "data-theme": opts.options.theme ?? "light",
          "data-lang": opts.options.lang ?? "en",
          "data-gitlab-url": opts.options.gitlabUrl ?? "https://gitlab.com",
          children: [
            /* @__PURE__ */ u2("noscript", { children: "Please enable JavaScript to view comments." }),
            /* @__PURE__ */ u2(
              "script",
              {
                id: "beblob-script",
                src: "https://unpkg.com/beblob@2.1.0/dist/beblob.js",
                "data-client-id": opts.options.clientId,
                "data-redirect-uri": opts.options.redirectUri,
                "data-project-name": opts.options.projectName,
                "data-issue-mapping-strategy": opts.options.issueMappingStrategy ?? "pageTitle",
                "data-theme": opts.options.theme ?? "light",
                "data-lang": opts.options.lang ?? "en",
                "data-gitlab-url": opts.options.gitlabUrl ?? "https://gitlab.com",
                defer: true
              }
            )
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