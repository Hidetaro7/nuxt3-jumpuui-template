<template>
  <div>
    <div class="prose max-w-none px-4 py-3">
      <h1 class="text-gray-700">Jumpu UI Vue</h1>
      <section>
        <h2>Spinner</h2>
        <Spinner />
      </section>
      <section>
        <h2>ToggleSwitch</h2>
        <p>
          <ToggleSwitch v-model="switchValue" />
        </p>
        <p>
          <ToggleSwitch size="small" />
        </p>
      </section>
      <section>
        <h2>Modal</h2>
        <Modal>
          <template v-slot:header>モーダルのヘッダ</template>
          <template v-slot:body>
            <div class="mt-2">
              <p class="leading-relaxed text-gray-500 text-sm">
                モーダルウインドウは、ウェブページやアプリケーションのUIデザインにおいて、メインコンテンツの上にオーバーレイとして表示される小さなウインドウやダイアログボックスのことを指します。モーダルウインドウは以下の特徴や目的を持っています
              </p>
            </div>
          </template>
        </Modal>
      </section>
      <section>
        <h2>Combobox</h2>
        <Combobox :options="people" />
      </section>

      <section>
        <h2>tags</h2>
        <TagsInput :whitelist="tags" />
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
        <RadioGroup :options="plans" />
      </section>

      <section>
        <h2>Segment</h2>
        <Segment />
      </section>

      <section>
        <h2>Sortable</h2>
        <div ref="els">
          <div
            v-for="item in list"
            :key="item.id"
            class="jumpu-card sortable-item mb-2"
          >
            <div class="p-4 handle">{{ item.name }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sortable-item {
  .handle {
    @apply cursor-grab;
  }
}
.sortable-chosen {
  @apply border-gray-800 cursor-grabbing;
  @apply cursor-grabbing;
}
.sortable-ghost {
  @apply opacity-50 border-gray-300;
}
</style>

<script setup>
import { useSortable } from "@vueuse/integrations/useSortable";

const els = ref();
const list = ref([
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
]);

useSortable(els, list, {
  handle: ".handle",
  animation: 150,
});

const switchValue = ref(false);

const people = [
  { id: 1, name: "堀口 康文" },
  { id: 2, name: "小野寺 遥" },
  { id: 3, name: "梅津 由宇" },
  { id: 4, name: "山根 崇史" },
  { id: 5, name: "坂井 隆博" },
  { id: 6, name: "川原 建" },
];

const tags = [
  "UI",
  "UX",
  "Vue",
  "React",
  "Angular",
  "Svelte",
  "Next",
  "Nuxt",
  "Vite",
  "Webpack",
  "Rollup",
];
const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];
</script>
