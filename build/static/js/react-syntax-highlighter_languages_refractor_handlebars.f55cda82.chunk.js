"use strict";(self.webpackChunkcodeblock=self.webpackChunkcodeblock||[]).push([[3846,3047],{8460:function(e,n,a){var t=a(5226);function o(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=o,o.displayName="handlebars",o.aliases=["hbs"]},5226:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,s){if(a.language===t){var r=a.tokenStack=[];a.code=a.code.replace(o,(function(e){if("function"===typeof s&&!s(e))return e;for(var o,i=r.length;-1!==a.code.indexOf(o=n(t,i));)++i;return r[i]=e,o})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var o=0,s=Object.keys(a.tokenStack);!function r(i){for(var l=0;l<i.length&&!(o>=s.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=s[o],g=a.tokenStack[c],p="string"===typeof u?u:u.content,f=n(t,c),d=p.indexOf(f);if(d>-1){++o;var k=p.substring(0,d),b=new e.Token(t,e.tokenize(g,a.grammar),"language-"+t,g),h=p.substring(d+f.length),m=[];k&&m.push.apply(m,r([k])),m.push(b),h&&m.push.apply(m,r([h])),"string"===typeof u?i.splice.apply(i,[l,1].concat(m)):u.content=m}}else u.content&&r(u.content)}return i}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.f55cda82.chunk.js.map