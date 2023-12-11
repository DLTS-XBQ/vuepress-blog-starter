import{_ as e,o as a,c as r,f as t}from"./app-b853f911.js";const d={},i=t('<h1 id="crlf注入漏洞-响应截断-攻击实战" tabindex="-1"><a class="header-anchor" href="#crlf注入漏洞-响应截断-攻击实战" aria-hidden="true">#</a> CRLF注入漏洞（响应截断）攻击实战</h1><h2 id="一、漏洞概述" tabindex="-1"><a class="header-anchor" href="#一、漏洞概述" aria-hidden="true">#</a> 一、漏洞概述</h2><p>CRLF是CR和LF两个字符的拼接，它们分别代表”回车+换行”（\\r\\n）“，全称为Carriage Return/Line Feed”，十六进制编码分别为0x0d和0x0a，URL编码为%0D和%0A。CR和LF组合在一起即CRLF命令，它表示键盘上的&quot;Enter&quot;键，许多应用程序和网络协议使用这些命令作为分隔符。</p><p>而在HTTP协议中，HTTP header之间是由一个CRLF字符序列分隔开的，HTTP Header与Body是用两个CRLF分隔的，浏览器根据这两个CRLF来取出HTTP内容并显示出来。</p><p>所以如果用户的输入在HTTP返回包的Header处回显，便可以通过CRLF来提前结束响应头，在响应内容处注入攻击脚本。因此CRLF Injection又叫HTTP响应拆分/截断（HTTP Response Splitting）简称HRS。</p><h2 id="二、实践过程" tabindex="-1"><a class="header-anchor" href="#二、实践过程" aria-hidden="true">#</a> 二、实践过程</h2><p>准备工作</p><ul><li>目标地址</li><li>抓包工具(这里我用的fiddler)</li></ul><p>拦截你想要CRLF注入的请求</p>',9),n=[i];function _(c,h){return a(),r("div",null,n)}const l=e(d,[["render",_],["__file","CRLF注入-响应截断攻击实战.html.vue"]]);export{l as default};
