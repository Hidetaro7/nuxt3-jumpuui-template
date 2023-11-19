<template>
  <nav class="segment">
    <div class="segment-wrapper" ref="segmentWrapper">
      <button
        class="jumpu-text-button"
        v-for="(menu, index) in menus"
        :key="index"
        @click="changeMenu(menu)"
        :aria-selected="menu.active"
      >
        {{ menu.label }}
      </button>
      <div
        :style="{
          left: activeMenuRect.x + 'px',
          width: activeMenuRect.width + 'px',
        }"
        class="active-handle"
      ></div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  menus: {
    type: Array,
    required: true,
    default: () => [{ label: "Home" }],
  },
});
const emit = defineEmits(["change"]);

const menus = ref(props.menus);
const segmentWrapper = ref();
const activeMenuRect = ref({});

onMounted(() => {
  menus.value.forEach((menu, index) => {
    menu.id = crypto.getRandomValues(new Uint32Array(1))[0];
    menu.active = index === 0 ? true : false;
  });
});

const changeMenu = (menu) => {
  console.log("tests");
  menus.value.forEach((m) => {
    m.active = m.id === menu.id;
  });
  emit("change", menu);
};

const calcRectangle = () => {
  const wrapperRect = segmentWrapper.value.getBoundingClientRect();
  const selectedButton = segmentWrapper.value.querySelector(
    "[aria-selected='true']"
  );
  activeMenuRect.value = selectedButton.getBoundingClientRect();
  activeMenuRect.value.x -= wrapperRect.x;
  activeMenuRect.value.y -= wrapperRect.y;
};

onUpdated(() => {
  calcRectangle();
});

/* watch(
  menus,
  () =>
    menus.value.forEach((menu) => {
      if (menu.active) changeMenu(menu);
    }),
  { deep: true }
); */
</script>

<style lang="scss" scoped>
.segment {
  @apply p-1 border border-gray-300 rounded-md inline-block;
  .segment-wrapper {
    @apply flex gap-x-2 relative;
    & > button {
      @apply relative z-[1] bg-transparent  hover:bg-gray-100/50;
    }
  }
}
.active-handle {
  @apply bg-primary-50 rounded-md absolute left-0 bottom-0 h-full transition-all;
}
</style>
