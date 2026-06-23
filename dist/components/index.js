// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/scripts/comments.inline.ts
var comments_inline_default = 'var g=e=>{let t=e.detail.theme,a=document.querySelector("iframe.giscus-frame");a&&a.contentWindow&&a.contentWindow.postMessage({giscus:{setConfig:{theme:m(u(t))}}},"https://giscus.app")},l=e=>{let t=e.detail.theme,a=document.querySelector(".beblob");if(!a)return;let s=t==="dark"?"dark":"light";a.setAttribute("data-theme",s);let n=document.getElementById("beblob-script");n&&n.setAttribute("data-theme",s)},u=e=>{if(e!=="dark"&&e!=="light")return e;let t=document.querySelector(".giscus");if(!t)return e;let a=t.dataset.darkTheme??"dark",s=t.dataset.lightTheme??"light";return e==="dark"?a:s},m=e=>{let t=document.querySelector(".giscus");return t?`${t.dataset.themeUrl??"https://giscus.app/themes"}/${e}.css`:`https://giscus.app/themes/${e}.css`},c=(e,t)=>{e.setAttribute("data-client-id",t.dataset.clientId),e.setAttribute("data-redirect-uri",t.dataset.redirectUri),e.setAttribute("data-project-name",t.dataset.projectName),e.setAttribute("data-issue-mapping-strategy",t.dataset.issueMappingStrategy),e.setAttribute("data-theme",t.dataset.theme),e.setAttribute("data-lang",t.dataset.lang),e.setAttribute("data-gitlab-url",t.dataset.gitlabUrl),e.setAttribute("data-beblob-version","2.1.0")},o=()=>{let e=document.querySelector(".beblob .gitlab-logo");if(!e)return;let t="https://unpkg.com/beblob@2.1.0/dist/images/gitlab-logo-500.svg";e.src!==t&&(e.src=t)},r=[],d=e=>{r.push(e)};if(typeof document<"u"){let e=()=>{r.forEach(s=>s()),r.length=0;let t=document.querySelector(".giscus"),a=document.querySelector(".beblob");if(t){let s=document.createElement("script");s.src="https://giscus.app/client.js",s.async=!0,s.crossOrigin="anonymous",s.setAttribute("data-loading","lazy"),s.setAttribute("data-emit-metadata","0"),s.setAttribute("data-repo",t.dataset.repo),s.setAttribute("data-repo-id",t.dataset.repoId),s.setAttribute("data-category",t.dataset.category),s.setAttribute("data-category-id",t.dataset.categoryId),s.setAttribute("data-mapping",t.dataset.mapping),s.setAttribute("data-strict",t.dataset.strict),s.setAttribute("data-reactions-enabled",t.dataset.reactionsEnabled),s.setAttribute("data-input-position",t.dataset.inputPosition),s.setAttribute("data-lang",t.dataset.lang);let n=document.documentElement.getAttribute("saved-theme");n&&s.setAttribute("data-theme",m(u(n))),t.appendChild(s);let i=g;document.addEventListener("themechange",i),d(()=>document.removeEventListener("themechange",i))}else if(a){let s=document.getElementById("beblob-script");if(s)c(s,a);else{let i=document.createElement("script");i.id="beblob-script",i.src="https://unpkg.com/beblob@2.1.0/dist/beblob.js",c(i,a),a.appendChild(i)}o(),setTimeout(o,0);let n=l;document.addEventListener("themechange",n),d(()=>document.removeEventListener("themechange",n))}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e(),document.addEventListener("nav",e),document.addEventListener("render",e)}\n';
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
          children: /* @__PURE__ */ u2("noscript", { children: "Please enable JavaScript to view comments." })
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