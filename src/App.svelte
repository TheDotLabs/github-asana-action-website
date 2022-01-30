<script lang="ts">
  import s1 from "./assets/s1.png";
</script>

<main>
  <div class="bg-gray-900 h-full w-full flex justify-center text-white  px-4">
    <div class="py-20 px-auto bg-gray-900 overflow-x-auto">
      <div class="flex items-center">
        <img
          class="h-10"
          src="https://avatars.githubusercontent.com/u/81820918?s=400&u=dbef5a641cd23462aaa2e636284953cb46c5ca21&v=4"
          alt="logo"
        />
        <div class=" ml-4 text-white text-2xl">TheDotLabs</div>
      </div>
      <div class="text-5xl font-semibold text-white mt-20">
        Action that integrates your Github and Asana.
      </div>
      <div class="mt-16" />

      <div class="flex">
        <a
          href="https://github.com/TheDotLabs/github-asana-action"
          target="_blank"
          class="text-white bg-blue-600 hover:bg-blue-700 py-3 px-5 rounded-md inline-flex cursor-pointer"
        >
          <i class="material-icons mr-2">view_in_ar</i>Visit Marketplace
        </a>

        <a
          href="https://github.com/TheDotLabs/github-asana-action"
          target="_blank"
          class="ml-6 text-white bg-gray-800 hover:bg-gray-700 py-3 px-5 rounded-md inline-flex cursor-pointer"
        >
          <i class="material-icons mr-2">code</i>Source Code
        </a>
      </div>

      <div class="mt-20 flex justify-center">
        <div
          class="overflow-hidden rounded-2xl border-8 border-gray-800 shadow inline-flex"
        >
          <img
            class=" "
            src="https://miro.medium.com/max/700/1*4v2ONiW3EUImDAWUcuHFaQ.png"
            alt="s1"
          />
        </div>
      </div>

      <div class="text-white font-bold text-2xl mt-20">Features</div>

      <div class="grid md:grid-cols-3 sm:grid-cols-1  mt-8 gap-4">
        <div class="bg-gray-800 rounded-lg shadow">
          <div class="p-6 text-lg">Automatically moves your task</div>
        </div>
        <div class="bg-gray-800 rounded-lg shadow">
          <div class="p-6 text-lg">Pre defined comments template</div>
        </div>
        <div class="bg-gray-800 rounded-lg shadow">
          <div class="p-6 text-lg">Multiple projects support</div>
        </div>
      </div>

      <div class="text-white font-bold text-2xl mt-20">Getting Started</div>

      <div class="mt-6 bg-gray-800 p-4 rounded-md">
        <pre>
<code class="yaml">
  uses: apgapg/github-asana-action@--latest--
  with:
    asana-token: 'Your PAT'
</code>
          
          

        </pre>
      </div>
      <div class="mt-8">
        For more details: Visit <a
          class="text-blue-500 underline"
          target="_blank"
          href="https://github.com/TheDotLabs/github-asana-action">README.md</a
        >
      </div>
      <div class="text-white font-bold text-2xl mt-16">Blog</div>
      <a
        href="https://apgapg.medium.com/integrate-asana-and-github-part-1-51c04b288c04"
        target="_blank"
        class="mt-8 text-white bg-gray-800 hover:bg-gray-700 py-3 px-5 rounded-md inline-flex cursor-pointer"
      >
        <i class="material-icons mr-2">rss_feed</i>View Blog at Medium.com
      </a>
      <div class="text-white text-center mt-8 opacity-70">
        ⒸTheDotLabs. All Rights Reserved
      </div>
    </div>
  </div>
</main>
