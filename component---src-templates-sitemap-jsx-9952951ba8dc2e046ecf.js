"use strict";(self.webpackChunkgatsby_garden=self.webpackChunkgatsby_garden||[]).push([[431],{43:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(1597),o=n(3964);function l(e){var t=e.notes;return a.createElement("div",{className:"block note-cards note-list"},t.map((function(e,t){return a.createElement("div",{className:"note-area box-feed",key:t,role:"button",tabIndex:t,onClick:function(){(0,r.c4)(e.node.fields.slug)},onKeyDown:function(t){13===t.keycode&&(0,r.c4)(e.node.fields.slug)}},a.createElement("h4",{className:"note-title"},a.createElement(r.rU,{to:""+e.node.fields.slug},e.node.fields.title)),a.createElement("p",{className:"note-excerpt"},e.node.fields.excerpt?e.node.fields.excerpt:e.node.excerpt),a.createElement("p",{className:"note-tag-list"},"Tagged with:"," ",e.node.frontmatter&&e.node.frontmatter.tags?e.node.frontmatter.tags.map((function(t,n){return a.createElement("span",{key:n},a.createElement(r.rU,{to:"/tags/"+t},"#",t),n<e.node.frontmatter.tags.length-1?", ":"")})):"No Tags"),a.createElement("p",{className:"note-date"},"Published on ",o(new Date(e.node.fields.date)).fromNow()))})))}},9102:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(1597);function o(e){var t=e.context;return a.createElement("div",{className:"pager"},t.previousPagePath?a.createElement(r.rU,{to:t.previousPagePath},"< Previous "):null,t.nextPagePath?a.createElement(r.rU,{to:t.nextPagePath}," Next >"):null)}},8412:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(7294),r=n(1597),o=n(7435),l=n(43),c=n(9102);function s(e){var t=e.pageContext,n=e.data;return a.createElement(o.Z,null,a.createElement("div",{className:"column is-half"},a.createElement("h1",null,"Sitemap"),a.createElement(l.Z,{notes:n.notes.edges}),a.createElement(c.Z,{context:t}),a.createElement(r.rU,{to:"/note-map"},"Map of All Notes")))}}}]);
//# sourceMappingURL=component---src-templates-sitemap-jsx-9952951ba8dc2e046ecf.js.map