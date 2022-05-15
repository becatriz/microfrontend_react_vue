<template>
  <main class="my-8">
    <div class="container mx-auto px-6">
      <h3 class="text-gray-700 text-2xl font-medium">My Blog Code</h3>
      <span class="mt-3 text-sm text-gray-500">Learning about codes</span>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        <div v-for="item in list" :key="item">
          <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div class="flex items-end justify-end h-56 w-full bg-cover">
              <img src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg" alt="image post" />
            </div>
            <div class="px-5 py-3">
              <h3 class="text-gray-700 uppercase">Where does it come from?</h3>
              <span class="text-gray-500 mt-2">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ListPosts',
  data() {
    return {
      list: [1, 2, 3, 4]
    };
  }
};
</script>
