import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_BZxCqi8R.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_P3_hC4MV.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_C29lxDgB.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Usuario/alexdevspace-me/","cacheDir":"file:///C:/Users/Usuario/alexdevspace-me/node_modules/.astro/","outDir":"file:///C:/Users/Usuario/alexdevspace-me/dist/","srcDir":"file:///C:/Users/Usuario/alexdevspace-me/src/","publicDir":"file:///C:/Users/Usuario/alexdevspace-me/public/","buildClientDir":"file:///C:/Users/Usuario/alexdevspace-me/dist/client/","buildServerDir":"file:///C:/Users/Usuario/alexdevspace-me/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.SHGcoIIy.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/alexdevspace-me/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D5wXzLG4.mjs","C:/Users/Usuario/alexdevspace-me/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_FjKjwJdy.mjs","C:/Users/Usuario/alexdevspace-me/src/components/Archivos.tsx":"_astro/Archivos.Cbxoqjod.js","C:/Users/Usuario/alexdevspace-me/src/components/FAQ.tsx":"_astro/FAQ.D5_2CHrM.js","C:/Users/Usuario/alexdevspace-me/src/components/ContactForm.tsx":"_astro/ContactForm.CMmGv77V.js","C:/Users/Usuario/alexdevspace-me/src/components/DirectLink.tsx":"_astro/DirectLink.Bfs_taLE.js","C:/Users/Usuario/alexdevspace-me/src/components/MobileMenu.tsx":"_astro/MobileMenu.D5ps3pQA.js","C:/Users/Usuario/alexdevspace-me/src/components/effects/Starfield":"_astro/Starfield.hIfCv3lE.js","@astrojs/react/client.js":"_astro/client.i8_f7Fkk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/space-grotesk-latin-ext-500-normal.DUe3BAxM.woff2","/_astro/space-grotesk-latin-500-normal.lFbtlQH6.woff2","/_astro/space-grotesk-vietnamese-500-normal.BmEvtly_.woff2","/_astro/space-grotesk-latin-400-normal.CJ-V5oYT.woff2","/_astro/space-grotesk-latin-ext-400-normal.CfP_5XZW.woff2","/_astro/space-grotesk-vietnamese-400-normal.B7xT_GF5.woff2","/_astro/space-grotesk-latin-ext-300-normal.4ZO_JR7W.woff2","/_astro/space-grotesk-vietnamese-300-normal.B9OJnXKM.woff2","/_astro/space-grotesk-latin-300-normal.DiSf0yqz.woff2","/_astro/space-grotesk-vietnamese-600-normal.DUi7WF5p.woff2","/_astro/space-grotesk-latin-600-normal.DjKNqYRj.woff2","/_astro/space-grotesk-latin-ext-600-normal.DxxdqCpr.woff2","/_astro/space-grotesk-latin-ext-700-normal.BQnZhY3m.woff2","/_astro/space-grotesk-latin-700-normal.RjhwGPKo.woff2","/_astro/space-grotesk-vietnamese-700-normal.DMty7AZE.woff2","/_astro/space-grotesk-latin-ext-500-normal.3dgZTiw9.woff","/_astro/space-grotesk-vietnamese-500-normal.BTqKIpxg.woff","/_astro/space-grotesk-latin-500-normal.CNSSEhBt.woff","/_astro/space-grotesk-latin-400-normal.BnQMeOim.woff","/_astro/space-grotesk-latin-ext-400-normal.DRPE3kg4.woff","/_astro/space-grotesk-vietnamese-400-normal.BIWiOVfw.woff","/_astro/space-grotesk-latin-ext-300-normal.CxWNGEn7.woff","/_astro/space-grotesk-vietnamese-300-normal.F-NWLUie.woff","/_astro/space-grotesk-latin-300-normal.Byd1NLsn.woff","/_astro/space-grotesk-vietnamese-600-normal.D6zpsUhD.woff","/_astro/space-grotesk-latin-ext-600-normal.VcznFIpX.woff","/_astro/space-grotesk-latin-600-normal.BflQw4A9.woff","/_astro/space-grotesk-latin-ext-700-normal.HVCqSBdx.woff","/_astro/space-grotesk-latin-700-normal.CwsQ-cCU.woff","/_astro/space-grotesk-vietnamese-700-normal.Duxec5Rn.woff","/_astro/material-symbols-outlined.Bgl3Icaq.woff2","/_astro/material-symbols-sharp.0IfmRZ0c.woff2","/_astro/material-symbols-rounded.GzsEeY_J.woff2","/_astro/index.SHGcoIIy.css","/faviconSD.svg","/perfiles/alexperfil.webp","/perfiles/danielaperfil.webp","/perfiles/estebanperfil.webp","/perfiles/rabanoperfil.webp","/projectsVideogames/PV_PlantainFeast.webp","/projectsVideogames/PV_TrazandoPasos.webp","/projectsWeb/PW_Rompamostabu.webp","/projectsWeb/PW_Spacedev.webp","/projectsApps/PA_Pets.webp","/_astro/Archivos.Cbxoqjod.js","/_astro/client.i8_f7Fkk.js","/_astro/ContactForm.CMmGv77V.js","/_astro/DirectLink.Bfs_taLE.js","/_astro/FAQ.D5_2CHrM.js","/_astro/index.DiEladB3.js","/_astro/index.UCiZe19v.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/MobileMenu.D5ps3pQA.js","/_astro/Starfield.hIfCv3lE.js","/projectsXR/PX_Alerta.webp","/projectsXR/PX_SimulacionSoldadura.webp"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"S7DOFgpZUSUupAo0XgQBKgNRCTO1sz+bCt3ccAw2Prg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
