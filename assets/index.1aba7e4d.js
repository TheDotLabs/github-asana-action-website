import{S as d,i as n,s as c,e as u,a as m,n as o,d as g}from"./vendor.e457f58f.js";const p=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};p();function v(l){let s;return{c(){s=u("main"),s.innerHTML=`<div class="bg-gray-900 h-full w-full flex justify-center text-white px-4"><div class="py-20 px-auto bg-gray-900 overflow-x-auto"><div class="flex items-center"><img class="h-10" src="https://avatars.githubusercontent.com/u/81820918?s=400&amp;u=dbef5a641cd23462aaa2e636284953cb46c5ca21&amp;v=4" alt="logo"/> 
        <div class="ml-4 text-white text-2xl">TheDotLabs</div></div> 
      <div class="text-5xl font-semibold text-white mt-20">Action that integrates your Github and Asana.</div> 
      <div class="mt-16"></div> 

      <a class="flex" href="https://github.com/TheDotLabs/github-asana-action" target="_blank"><div class="text-white bg-blue-600 hover:bg-blue-700 py-3 px-5 rounded-md inline-flex cursor-pointer"><i class="material-icons mr-2">view_in_ar</i>Visit Marketplace</div> 

        <a href="https://github.com/TheDotLabs/github-asana-action" target="_blank" class="ml-6 text-white bg-gray-800 hover:bg-gray-700 py-3 px-5 rounded-md inline-flex cursor-pointer"><i class="material-icons mr-2">code</i>Source Code</a></a> 

      <div class="mt-20 flex justify-center"><div class="overflow-hidden rounded-2xl border-8 border-gray-800 shadow inline-flex"><img class="" src="https://miro.medium.com/max/700/1*4v2ONiW3EUImDAWUcuHFaQ.png" alt="s1"/></div></div> 

      <div class="text-white font-bold text-2xl mt-20">Features</div> 

      <div class="grid md:grid-cols-3 sm:grid-cols-1 mt-8 gap-4"><div class="bg-gray-800 rounded-lg shadow"><div class="p-6 text-lg">Automatically moves your task</div></div> 
        <div class="bg-gray-800 rounded-lg shadow"><div class="p-6 text-lg">Pre defined comments template</div></div> 
        <div class="bg-gray-800 rounded-lg shadow"><div class="p-6 text-lg">Multiple projects support</div></div></div> 

      <div class="text-white font-bold text-2xl mt-20">Getting Started</div> 

      <div class="mt-6 bg-gray-800 p-4 rounded-md"><pre><code class="yaml">uses: apgapg/github-asana-action@--latest--
  with:
    asana-token: &#39;Your PAT&#39;</code></pre></div> 
      <div class="mt-8">For more details: Visit <a class="text-blue-500 underline" target="_blank" href="https://github.com/TheDotLabs/github-asana-action">README.md</a></div> 
      <div class="text-white text-center mt-8 opacity-70">\u24B8TheDotLabs. All Rights Reserved</div></div></div>`},m(i,a){m(i,s,a)},p:o,i:o,o,d(i){i&&g(s)}}}class f extends d{constructor(s){super();n(this,s,null,v,c,{})}}new f({target:document.getElementById("app")});
