var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function a(t){t.forEach(n)}function l(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t){t.parentNode&&t.parentNode.removeChild(t)}let i;function r(t){i=t}function c(t){(function(){if(!i)throw new Error("Function called outside component initialization");return i})().$$.on_mount.push(t)}const g=[],s=[],f=[],d=[],p=Promise.resolve();let h=!1;function b(t){f.push(t)}const m=new Set;let $=0;function y(){if(0!==$)return;const t=i;do{try{for(;$<g.length;){const t=g[$];$++,r(t),v(t.$$)}}catch(t){throw g.length=0,$=0,t}for(r(null),g.length=0,$=0;s.length;)s.pop()();for(let t=0;t<f.length;t+=1){const n=f[t];m.has(n)||(m.add(n),n())}f.length=0}while(g.length);for(;d.length;)d.pop()();h=!1,m.clear(),r(t)}function v(t){if(null!==t.fragment){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const x=new Set;function _(t,n){-1===t.$$.dirty[0]&&(g.push(t),h||(h=!0,p.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(o,c,g,s,f,d,p,h=[-1]){const m=i;r(o);const $=o.$$={fragment:null,ctx:[],props:d,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(m?m.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:c.target||m.$$.root};p&&p($.root);let v=!1;if($.ctx=g?g(o,c.props||{},((t,n,...e)=>{const a=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=a)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](a),v&&_(o,t)),n})):[],$.update(),v=!0,a($.before_update),$.fragment=!!s&&s($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(u)}else $.fragment&&$.fragment.c();c.intro&&((k=o.$$.fragment)&&k.i&&(x.delete(k),k.i(w))),function(t,e,o,u){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,o),u||b((()=>{const e=t.$$.on_mount.map(n).filter(l);t.$$.on_destroy?t.$$.on_destroy.push(...e):a(e),t.$$.on_mount=[]})),r.forEach(b)}(o,c.target,c.anchor,c.customElement),y()}var k,w;r(m)}class w{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(n,e){if(!l(e))return t;const a=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return a.push(e),()=>{const t=a.indexOf(e);-1!==t&&a.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(n){let e;return{c(){var t,n,a,l;t="div",e=document.createElement(t),n=e,a="id",null==(l="root")?n.removeAttribute(a):n.getAttribute(a)!==l&&n.setAttribute(a,l)},m(t,a){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,a),n[1](e)},p:t,i:t,o:t,d(t){t&&u(e),n[1](null)}}}function E(t,n,e){let a,l;return c((()=>{const t=a.querySelectorAll(".forminput");console.log(t),l=a.attachShadow({mode:"open"}),l.innerHTML='\n\t\t\t<style>\n\t\t\t\tul {\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\t\t\t\tli {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tmargin: 0 0.5em;\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t<div id="shadow">\n\t\t\t\t<p>Lenguajes de programación que dominas</p>\n\t\t\t\t<div id="listLanguages">\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-1" name="language" value="JavaScript">\n\t\t\t\t\t\t<label for="language-1">JavaScript</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-2" name="language" value="Python">\n\t\t\t\t\t\t<label for="language-2">Python</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-3" name="language" value="Java">\n\t\t\t\t\t\t<label for="language-3">Java</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-4" name="language" value="C++">\n\t\t\t\t\t\t<label for="language-4">C++</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-5" name="language" value="C#">\n\t\t\t\t\t\t<label for="language-5">C#</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-6" name="language" value="PHP">\n\t\t\t\t\t\t<label for="language-6">PHP</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-7" name="language" value="Ruby">\n\t\t\t\t\t\t<label for="language-7">Ruby</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-8" name="language" value="Swift">\n\t\t\t\t\t\t<label for="language-8">Swift</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-9" name="language" value="Go">\n\t\t\t\t\t\t<label for="language-9">Go</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input type="checkbox" id="language-10" name="language" value="R">\n\t\t\t\t\t\t<label for="language-10">R</label>\n\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'})),[a,function(t){s[t?"unshift":"push"]((()=>{a=t,e(0,a)}))}]}return new class extends w{constructor(t){super(),k(this,t,E,S,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
