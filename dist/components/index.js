// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/scripts/comments.inline.ts
var comments_inline_default = 'var u=s=>{let e=s.detail.theme,a=document.querySelector("iframe.giscus-frame");a&&a.contentWindow&&a.contentWindow.postMessage({giscus:{setConfig:{theme:o(c(e))}}},"https://giscus.app")},m=s=>{let e=s.detail.theme,a=document.querySelector(".beblob");if(!a)return;let t=e==="dark"?"dark":"light";a.setAttribute("data-theme",t);let n=document.getElementById("beblob-script");n&&n.setAttribute("data-theme",t)},c=s=>{if(s!=="dark"&&s!=="light")return s;let e=document.querySelector(".giscus");if(!e)return s;let a=e.dataset.darkTheme??"dark",t=e.dataset.lightTheme??"light";return s==="dark"?a:t},o=s=>{let e=document.querySelector(".giscus");return e?`${e.dataset.themeUrl??"https://giscus.app/themes"}/${s}.css`:`https://giscus.app/themes/${s}.css`},i=[],d=s=>{i.push(s)};if(typeof document<"u"){let s=()=>{i.forEach(t=>t()),i.length=0;let e=document.querySelector(".giscus"),a=document.querySelector(".beblob");if(e){let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-loading","lazy"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-repo",e.dataset.repo),t.setAttribute("data-repo-id",e.dataset.repoId),t.setAttribute("data-category",e.dataset.category),t.setAttribute("data-category-id",e.dataset.categoryId),t.setAttribute("data-mapping",e.dataset.mapping),t.setAttribute("data-strict",e.dataset.strict),t.setAttribute("data-reactions-enabled",e.dataset.reactionsEnabled),t.setAttribute("data-input-position",e.dataset.inputPosition),t.setAttribute("data-lang",e.dataset.lang);let n=document.documentElement.getAttribute("saved-theme");n&&t.setAttribute("data-theme",o(c(n))),e.appendChild(t);let r=u;document.addEventListener("themechange",r),d(()=>document.removeEventListener("themechange",r))}else if(a){if(!document.getElementById("beblob-script")){let n=document.createElement("script");n.id="beblob-script",n.src="https://unpkg.com/beblob@2.1.0/dist/beblob.js",n.setAttribute("data-client-id",a.dataset.clientId),n.setAttribute("data-redirect-uri",a.dataset.redirectUri),n.setAttribute("data-project-name",a.dataset.projectName),n.setAttribute("data-issue-mapping-strategy",a.dataset.issueMappingStrategy),n.setAttribute("data-theme",a.dataset.theme),n.setAttribute("data-lang",a.dataset.lang),n.setAttribute("data-gitlab-url",a.dataset.gitlabUrl),n.setAttribute("data-dev-mode","true"),a.appendChild(n)}let t=m;document.addEventListener("themechange",t),d(()=>document.removeEventListener("themechange",t))}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s(),document.addEventListener("nav",s),document.addEventListener("render",s)}\n';
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
                "data-dev-mode": "true",
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