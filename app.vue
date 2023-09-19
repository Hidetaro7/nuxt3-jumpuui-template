<template>
  <div>
    <div class="prose max-w-none px-4 py-3">
      <h1 class="text-gray-700">Jumpu UI Vue</h1>

      <section>
        <h2>Modal</h2>
        <Modal />
      </section>
      <section>
        <h2>Combobox</h2>
        <Combobox :options="people" />
      </section>
      <section>
        <h2>Menu</h2>
        <Menu />
      </section>
      <section>
        <h2>Listbox</h2>
        <Listbox :options="people" />
      </section>
      <section>
        <h2>RadioGroup</h2>
        <RadioGroup />
      </section>
    </div>
  </div>
</template>

<script setup>
const people = [
  { id: 1, name: "堀口 康文" },
  { id: 2, name: "小野寺 遥" },
  { id: 3, name: "梅津 由宇" },
  { id: 4, name: "山根 崇史" },
  { id: 5, name: "坂井 隆博" },
  { id: 6, name: "川原 建" },
];
</script>
