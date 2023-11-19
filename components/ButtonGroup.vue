<template>
  <div
    class="segmented-control inline-flex justify-center items-center rounded overflow-hidden"
  >
    <div
      v-for="(value, index) in values"
      class="relative hover:brightness-95 active:brightness-90"
    >
      <input
        type="radio"
        name="name"
        :value="value.label"
        :id="'segment-id-' + value.id"
        class="opacity-0 inset-0 block absolute w-full h-full cursor-pointer"
      />
      <label
        :for="'segment-id-' + value.id"
        class="jumpu-button whitespace-nowrap cursor-pointer bg-gray-100 text-gray-700 rounded-none"
        >{{ value.label }}</label
      >
    </div>
  </div>
</template>

<script setup>
const values = [
  {
    id: 0,
    label: "4ヶ月",
  },
  {
    id: 1,
    label: "6ヶ月",
  },
  {
    id: 2,
    label: "12ヶ月",
  },
];
</script>

<style scoped>
.segmented-control {
  input[type="radio"]:checked + label {
    @apply bg-primary-700 text-white transition-all !important;
  }
}
</style>
