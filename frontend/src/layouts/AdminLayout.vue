<template>
  <div class="flex min-h-screen text-gray-900">
    <!-- Sidebar -->
    <aside class="w-60 bg-slate-900 text-white p-4">
      <h2 class="text-lg font-bold mb-4">NQF Register</h2>
      <RouterLink
          to="/"
          class="block px-2 py-1 rounded hover:bg-slate-700"
          active-class="bg-slate-700"
      >Qualifications</RouterLink>
    </aside>

    <!-- Main -->
    <main class="flex-1 bg-slate-50 p-6"><RouterView /></main>
  </div>
</template>
