import {
  ruby_default
} from "./chunk-7KCJR4OS.js";
import "./chunk-6MLVISJL.js";
import "./chunk-5G3YEAKV.js";
import "./chunk-SVSCI3YJ.js";
import "./chunk-OEYC22DB.js";
import "./chunk-VUZ5SLOV.js";
import "./chunk-NQKIURLK.js";
import "./chunk-CVB7ARGA.js";
import "./chunk-YIQJWQVI.js";
import "./chunk-AGBQCTL5.js";
import "./chunk-CKJVSKW5.js";
import "./chunk-WKTF6GGM.js";
import "./chunk-L5CQKURU.js";
import "./chunk-BISGC3VT.js";
import "./chunk-6CHASOYF.js";
import "./chunk-7AYCEQVG.js";
import {
  html_default
} from "./chunk-26277AXD.js";
import "./chunk-W7VXTFFR.js";
import "./chunk-TUUIJQ2H.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@shikijs+langs@2.5.0/node_modules/@shikijs/langs/dist/erb.mjs
var lang = Object.freeze(JSON.parse('{"displayName":"ERB","fileTypes":["erb","rhtml","html.erb"],"injections":{"text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)":{"patterns":[{"begin":"(^\\\\s*)(?=<%+#(?![^%]*%>))","beginCaptures":{"0":{"name":"punctuation.whitespace.comment.leading.erb"}},"end":"(?!\\\\G)(\\\\s*$\\\\n)?","endCaptures":{"0":{"name":"punctuation.whitespace.comment.trailing.erb"}},"patterns":[{"include":"#comment"}]},{"begin":"(^\\\\s*)(?=<%(?![^%]*%>))","beginCaptures":{"0":{"name":"punctuation.whitespace.embedded.leading.erb"}},"end":"(?!\\\\G)(\\\\s*$\\\\n)?","endCaptures":{"0":{"name":"punctuation.whitespace.embedded.trailing.erb"}},"patterns":[{"include":"#tags"}]},{"include":"#comment"},{"include":"#tags"}]}},"name":"erb","patterns":[{"include":"text.html.basic"}],"repository":{"comment":{"patterns":[{"begin":"<%+#","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.erb"}},"end":"%>","endCaptures":{"0":{"name":"punctuation.definition.comment.end.erb"}},"name":"comment.block.erb"}]},"tags":{"patterns":[{"begin":"<%+(?!>)[-=]?(?![^%]*%>)","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.erb"}},"contentName":"source.ruby","end":"(-?%)>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.erb"},"1":{"name":"source.ruby"}},"name":"meta.embedded.block.erb","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.erb"}},"match":"(#).*?(?=-?%>)","name":"comment.line.number-sign.erb"},{"include":"source.ruby"}]},{"begin":"<%+(?!>)[-=]?","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.erb"}},"contentName":"source.ruby","end":"(-?%)>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.erb"},"1":{"name":"source.ruby"}},"name":"meta.embedded.line.erb","patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.erb"}},"match":"(#).*?(?=-?%>)","name":"comment.line.number-sign.erb"},{"include":"source.ruby"}]}]}},"scopeName":"text.html.erb","embeddedLangs":["html","ruby"]}'));
var erb_default = [
  ...html_default,
  ...ruby_default,
  lang
];
export {
  erb_default as default
};
//# sourceMappingURL=erb-DZQBW3Y2.js.map
