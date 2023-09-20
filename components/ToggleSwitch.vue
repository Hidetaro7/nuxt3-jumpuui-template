<template>
  <div class="jumpu-toggle-switch" :class="sizeStyle[0]">
    <input :id="id" type="checkbox" v-model="checked" @change="changed" />
    <label :for="id">
      <span :class="sizeStyle[1]"></span>
    </label>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const id = ref();
onMounted(() => {
  id.value = crypto.getRandomValues(new Uint32Array(1))[0];
});
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
});
const checked = ref(props.modelValue);
const sizeStyle = computed(() => {
  switch (props.size) {
    case "small":
      return ["w-8 h-4", "w-4 h-4"];
    case "default":
      return ["w-16 h-8", "w-8 h-8"];
  }
});
const changed = () => emit("update:modelValue", checked.value);
</script>
