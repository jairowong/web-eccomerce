/*! For license information please see payment-method-promotions.js.LICENSE.txt */
!function(){var e={74944:function(e){e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor,o=Object.freeze,i=Object.seal,l=Object.create,c="undefined"!=typeof Reflect&&Reflect,s=c.apply,m=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),o||(o=function(e){return e}),i||(i=function(e){return e}),m||(m=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var u,d=E(Array.prototype.forEach),p=E(Array.prototype.pop),f=E(Array.prototype.push),g=E(String.prototype.toLowerCase),h=E(String.prototype.match),y=E(String.prototype.replace),v=E(String.prototype.indexOf),b=E(String.prototype.trim),N=E(RegExp.prototype.test),w=(u=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return m(u,t)});function E(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return s(e,t,r)}}function T(e,r){t&&t(e,null);for(var a=r.length;a--;){var o=r[a];if("string"==typeof o){var i=g(o);i!==o&&(n(r)||(r[a]=i),o=i)}e[o]=!0}return e}function _(t){var n=l(null),r=void 0;for(r in t)s(e,t,[r])&&(n[r]=t[r]);return n}function A(e,t){for(;null!==e;){var n=a(e,t);if(n){if(n.get)return E(n.get);if("function"==typeof n.value)return E(n.value)}e=r(e)}return function(e){return console.warn("fallback value for",e),null}}var S=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),k=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),x=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),M=o(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),D=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),L=o(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),O=o(["#text"]),C=o(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),R=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),U=i(/<%[\s\S]*|[\s\S]*%>/gm),z=i(/^data-[\-\w.\u00B7-\uFFFF]/),P=i(/^aria-[\-\w]+$/),B=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),G=i(/^(?:\w+script|data):/i),j=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),W=i(/^html$/i),Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function q(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var K=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":Y(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var a="dompurify"+(n?"#"+n:"");try{return e.createPolicy(a,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K(),n=function(t){return e(t)};if(n.version="2.3.6",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,m=t.NodeFilter,u=t.NamedNodeMap,E=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,$=t.HTMLFormElement,X=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=A(J,"cloneNode"),ee=A(J,"nextSibling"),te=A(J,"childNodes"),ne=A(J,"parentNode");if("function"==typeof l){var re=a.createElement("template");re.content&&re.content.ownerDocument&&(a=re.content.ownerDocument)}var ae=V(Z,r),oe=ae?ae.createHTML(""):"",ie=a,le=ie.implementation,ce=ie.createNodeIterator,se=ie.createDocumentFragment,me=ie.getElementsByTagName,ue=r.importNode,de={};try{de=_(a).documentMode?a.documentMode:{}}catch(e){}var pe={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==de;var fe=H,ge=U,he=z,ye=P,ve=G,be=j,Ne=B,we=null,Ee=T({},[].concat(q(S),q(k),q(x),q(D),q(O))),Te=null,_e=T({},[].concat(q(C),q(R),q(I),q(F))),Ae=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,ke=null,xe=!0,Me=!0,De=!1,Le=!1,Oe=!1,Ce=!1,Re=!1,Ie=!1,Fe=!1,He=!1,Ue=!0,ze=!0,Pe=!1,Be={},Ge=null,je=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),We=null,Ye=T({},["audio","video","img","source","image","track"]),qe=null,Ke=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",$e="http://www.w3.org/2000/svg",Xe="http://www.w3.org/1999/xhtml",Ze=Xe,Je=!1,Qe=void 0,et=["application/xhtml+xml","text/html"],tt="text/html",nt=void 0,rt=null,at=a.createElement("form"),ot=function(e){return e instanceof RegExp||e instanceof Function},it=function(e){rt&&rt===e||(e&&"object"===(void 0===e?"undefined":Y(e))||(e={}),e=_(e),we="ALLOWED_TAGS"in e?T({},e.ALLOWED_TAGS):Ee,Te="ALLOWED_ATTR"in e?T({},e.ALLOWED_ATTR):_e,qe="ADD_URI_SAFE_ATTR"in e?T(_(Ke),e.ADD_URI_SAFE_ATTR):Ke,We="ADD_DATA_URI_TAGS"in e?T(_(Ye),e.ADD_DATA_URI_TAGS):Ye,Ge="FORBID_CONTENTS"in e?T({},e.FORBID_CONTENTS):je,Se="FORBID_TAGS"in e?T({},e.FORBID_TAGS):{},ke="FORBID_ATTR"in e?T({},e.FORBID_ATTR):{},Be="USE_PROFILES"in e&&e.USE_PROFILES,xe=!1!==e.ALLOW_ARIA_ATTR,Me=!1!==e.ALLOW_DATA_ATTR,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=e.SAFE_FOR_TEMPLATES||!1,Oe=e.WHOLE_DOCUMENT||!1,Ie=e.RETURN_DOM||!1,Fe=e.RETURN_DOM_FRAGMENT||!1,He=e.RETURN_TRUSTED_TYPE||!1,Re=e.FORCE_BODY||!1,Ue=!1!==e.SANITIZE_DOM,ze=!1!==e.KEEP_CONTENT,Pe=e.IN_PLACE||!1,Ne=e.ALLOWED_URI_REGEXP||Ne,Ze=e.NAMESPACE||Xe,e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ae.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ae.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ae.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Qe=Qe=-1===et.indexOf(e.PARSER_MEDIA_TYPE)?tt:e.PARSER_MEDIA_TYPE,nt="application/xhtml+xml"===Qe?function(e){return e}:g,Le&&(Me=!1),Fe&&(Ie=!0),Be&&(we=T({},[].concat(q(O))),Te=[],!0===Be.html&&(T(we,S),T(Te,C)),!0===Be.svg&&(T(we,k),T(Te,R),T(Te,F)),!0===Be.svgFilters&&(T(we,x),T(Te,R),T(Te,F)),!0===Be.mathMl&&(T(we,D),T(Te,I),T(Te,F))),e.ADD_TAGS&&(we===Ee&&(we=_(we)),T(we,e.ADD_TAGS)),e.ADD_ATTR&&(Te===_e&&(Te=_(Te)),T(Te,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&T(qe,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(Ge===je&&(Ge=_(Ge)),T(Ge,e.FORBID_CONTENTS)),ze&&(we["#text"]=!0),Oe&&T(we,["html","head","body"]),we.table&&(T(we,["tbody"]),delete Se.tbody),o&&o(e),rt=e)},lt=T({},["mi","mo","mn","ms","mtext"]),ct=T({},["foreignobject","desc","title","annotation-xml"]),st=T({},k);T(st,x),T(st,M);var mt=T({},D);T(mt,L);var ut=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Xe,tagName:"template"});var n=g(e.tagName),r=g(t.tagName);if(e.namespaceURI===$e)return t.namespaceURI===Xe?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||lt[r]):Boolean(st[n]);if(e.namespaceURI===Ve)return t.namespaceURI===Xe?"math"===n:t.namespaceURI===$e?"math"===n&&ct[r]:Boolean(mt[n]);if(e.namespaceURI===Xe){if(t.namespaceURI===$e&&!ct[r])return!1;if(t.namespaceURI===Ve&&!lt[r])return!1;var a=T({},["title","style","font","a","script"]);return!mt[n]&&(a[n]||!st[n])}return!1},dt=function(e){f(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=oe}catch(t){e.remove()}}},pt=function(e,t){try{f(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Te[e])if(Ie||Fe)try{dt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},ft=function(e){var t=void 0,n=void 0;if(Re)e="<remove></remove>"+e;else{var r=h(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===Qe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ae?ae.createHTML(e):e;if(Ze===Xe)try{t=(new X).parseFromString(o,Qe)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(Ze,"template",null);try{t.documentElement.innerHTML=Je?"":o}catch(e){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),Ze===Xe?me.call(t,Oe?"html":"body")[0]:Oe?t.documentElement:i},gt=function(e){return ce.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT,null,!1)},ht=function(e){return e instanceof $&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof E)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},yt=function(e){return"object"===(void 0===c?"undefined":Y(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":Y(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},vt=function(e,t,r){pe[e]&&d(pe[e],(function(e){e.call(n,t,r,rt)}))},bt=function(e){var t=void 0;if(vt("beforeSanitizeElements",e,null),ht(e))return dt(e),!0;if(h(e.nodeName,/[\u0080-\uFFFF]/))return dt(e),!0;var r=nt(e.nodeName);if(vt("uponSanitizeElement",e,{tagName:r,allowedTags:we}),!yt(e.firstElementChild)&&(!yt(e.content)||!yt(e.content.firstElementChild))&&N(/<[/\w]/g,e.innerHTML)&&N(/<[/\w]/g,e.textContent))return dt(e),!0;if("select"===r&&N(/<template/i,e.innerHTML))return dt(e),!0;if(!we[r]||Se[r]){if(!Se[r]&&wt(r)){if(Ae.tagNameCheck instanceof RegExp&&N(Ae.tagNameCheck,r))return!1;if(Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(r))return!1}if(ze&&!Ge[r]){var a=ne(e)||e.parentNode,o=te(e)||e.childNodes;if(o&&a)for(var i=o.length-1;i>=0;--i)a.insertBefore(Q(o[i],!0),ee(e))}return dt(e),!0}return e instanceof s&&!ut(e)?(dt(e),!0):"noscript"!==r&&"noembed"!==r||!N(/<\/no(script|embed)/i,e.innerHTML)?(Le&&3===e.nodeType&&(t=e.textContent,t=y(t,fe," "),t=y(t,ge," "),e.textContent!==t&&(f(n.removed,{element:e.cloneNode()}),e.textContent=t)),vt("afterSanitizeElements",e,null),!1):(dt(e),!0)},Nt=function(e,t,n){if(Ue&&("id"===t||"name"===t)&&(n in a||n in at))return!1;if(Me&&!ke[t]&&N(he,t));else if(xe&&N(ye,t));else if(!Te[t]||ke[t]){if(!(wt(e)&&(Ae.tagNameCheck instanceof RegExp&&N(Ae.tagNameCheck,e)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(e))&&(Ae.attributeNameCheck instanceof RegExp&&N(Ae.attributeNameCheck,t)||Ae.attributeNameCheck instanceof Function&&Ae.attributeNameCheck(t))||"is"===t&&Ae.allowCustomizedBuiltInElements&&(Ae.tagNameCheck instanceof RegExp&&N(Ae.tagNameCheck,n)||Ae.tagNameCheck instanceof Function&&Ae.tagNameCheck(n))))return!1}else if(qe[t]);else if(N(Ne,y(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!We[e])if(De&&!N(ve,y(n,be,"")));else if(n)return!1;return!0},wt=function(e){return e.indexOf("-")>0},Et=function(e){var t=void 0,r=void 0,a=void 0,o=void 0;vt("beforeSanitizeAttributes",e,null);var i=e.attributes;if(i){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Te};for(o=i.length;o--;){var c=t=i[o],s=c.name,m=c.namespaceURI;if(r=b(t.value),a=nt(s),l.attrName=a,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,vt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(pt(s,e),l.keepAttr))if(N(/\/>/i,r))pt(s,e);else{Le&&(r=y(r,fe," "),r=y(r,ge," "));var u=nt(e.nodeName);if(Nt(u,a,r))try{m?e.setAttributeNS(m,s,r):e.setAttribute(s,r),p(n.removed)}catch(e){}}}vt("afterSanitizeAttributes",e,null)}},Tt=function e(t){var n=void 0,r=gt(t);for(vt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)vt("uponSanitizeShadowNode",n,null),bt(n)||(n.content instanceof i&&e(n.content),Et(n));vt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,a){var o=void 0,l=void 0,s=void 0,m=void 0,u=void 0;if((Je=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!yt(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===Y(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(yt(e))return t.toStaticHTML(e.outerHTML)}return e}if(Ce||it(a),n.removed=[],"string"==typeof e&&(Pe=!1),Pe){if(e.nodeName){var d=nt(e.nodeName);if(!we[d]||Se[d])throw w("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)1===(l=(o=ft("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?o=l:o.appendChild(l);else{if(!Ie&&!Le&&!Oe&&-1===e.indexOf("<"))return ae&&He?ae.createHTML(e):e;if(!(o=ft(e)))return Ie?null:He?oe:""}o&&Re&&dt(o.firstChild);for(var p=gt(Pe?e:o);s=p.nextNode();)3===s.nodeType&&s===m||bt(s)||(s.content instanceof i&&Tt(s.content),Et(s),m=s);if(m=null,Pe)return e;if(Ie){if(Fe)for(u=se.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return Te.shadowroot&&(u=ue.call(r,u,!0)),u}var f=Oe?o.outerHTML:o.innerHTML;return Oe&&we["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&N(W,o.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+f),Le&&(f=y(f,fe," "),f=y(f,ge," ")),ae&&He?ae.createHTML(f):f},n.setConfig=function(e){it(e),Ce=!0},n.clearConfig=function(){rt=null,Ce=!1},n.isValidAttribute=function(e,t,n){rt||it({});var r=nt(e),a=nt(t);return Nt(r,a,n)},n.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],f(pe[e],t))},n.removeHook=function(e){pe[e]&&p(pe[e])},n.removeHooks=function(e){pe[e]&&(pe[e]=[])},n.removeAllHooks=function(){pe={}},n}()}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){"use strict";n.r(r);var e=window.wp.element,t=window.wp.components,a=window.wc.components,o=window.wc.data,i=window.wc.tracks,l=window.wp.data,c=n(74944),s=window.wp.i18n;function m(e){return{__html:(0,c.sanitize)(e,{ALLOWED_TAGS:["a","img","br"],ALLOWED_ATTR:["href","src","class","alt","target"]})}}const u=n=>{let{paymentMethod:r,title:c,subTitleContent:u,columns:d}=n;const{gatewayId:p,pluginSlug:f,url:g}=r,[h,y]=(0,e.useState)(!1),[v,b]=(0,e.useState)(!0),{installAndActivatePlugins:N}=(0,l.useDispatch)(o.PLUGINS_STORE_NAME),{createNotice:w}=(0,l.useDispatch)("core/notices"),{updatePaymentGateway:E}=(0,l.useDispatch)(o.PAYMENT_GATEWAYS_STORE_NAME),{gatewayIsActive:T,paymentGateway:_}=(0,l.useSelect)((e=>{const{getPaymentGateway:t}=e(o.PAYMENT_GATEWAYS_STORE_NAME),n=e(o.PLUGINS_STORE_NAME).getActivePlugins(),r=n&&n.includes(f);let a;return r&&(a=t(f.replace(/\-/g,"_"))),{gatewayIsActive:r,paymentGateway:a}}));(0,e.useEffect)((()=>{T&&_&&_.settings_url&&(window.location.href=_.settings_url)}),[T,_]);const A=()=>{b(!1),(0,i.recordEvent)("settings_payments_promotions_dismiss",{id:p}),E(p,{settings:{is_dismissed:"yes"}})};return v?(0,e.createElement)(e.Fragment,null,d.map((n=>n.className.includes("name")?(0,e.createElement)("td",{className:"name",key:n.className},(0,e.createElement)("div",{className:"wc-payment-gateway-method__name"},(0,e.createElement)(a.Link,{target:"_blank",type:"external",rel:"noreferrer",href:g},c),u?(0,e.createElement)("div",{className:"pre-install-payment-gateway__subtitle",dangerouslySetInnerHTML:m(u)}):null)):n.className.includes("status")?(0,e.createElement)("td",{className:"pre-install-payment-gateway__status",key:n.className}):n.className.includes("action")?(0,e.createElement)("td",{className:"action",key:n.className},(0,e.createElement)("div",{className:"pre-install-payment-gateway__actions"},(0,e.createElement)(a.EllipsisMenu,{label:(0,s.__)("Payment Promotion Options","woocommerce"),className:"pre-install-payment-gateway__actions-menu",onToggle:e=>e.stopPropagation(),renderContent:()=>(0,e.createElement)("div",{className:"pre-install-payment-gateway__actions-menu-options"},(0,e.createElement)(t.Button,{onClick:A},(0,s.__)("Dismiss","woocommerce")))}),(0,e.createElement)(t.Button,{className:"button alignright",onClick:()=>{h||(y(!0),(0,i.recordEvent)("settings_payments_recommendations_setup",{extension_selected:f}),N([f]).catch((e=>{e.message&&w("error",e.message),y(!1)})))},isSecondary:!0,isBusy:h,"aria-disabled":h},(0,s.__)("Install","woocommerce")))):(0,e.createElement)("td",{key:n.className,className:n.className,width:n.width,dangerouslySetInnerHTML:n.className.includes("sort")?{__html:n.html}:m(n.html)})))):null};[{gatewayId:"pre_install_woocommerce_payments_promotion",pluginSlug:"woocommerce-payments",url:"https://woocommerce.com/payments/?utm_medium=product"}].forEach((t=>{const n=document.querySelector(`[data-gateway_id="${t.gatewayId}"]`);if(n){const r=[...n.children].map((e=>({className:e.className,html:e.innerHTML,width:e.getAttribute("width")||void 0}))),a=n.getElementsByClassName("wc-payment-gateway-method-title"),o=n.getElementsByClassName("gateway-subtitle");(0,e.render)((0,e.createElement)(u,{columns:r,paymentMethod:t,title:1===a.length?a[0].innerHTML:void 0,subTitleContent:1===o.length?o[0].innerHTML:void 0}),n)}}))}(),(window.wc=window.wc||{}).paymentMethodPromotions=r}();