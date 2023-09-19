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
        <ToggleSwitch />
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
