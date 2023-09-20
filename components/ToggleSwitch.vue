<template>
  <div class="jumpu-toggle-switch w-16 h-8">
    <input :id="id" type="checkbox" v-model="checked" @change="changed" />
    <label :for="id">
      <span class="w-8 h-8"></span>
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
});
const checked = ref(props.modelValue);
const changed = () => emit("update:modelValue", checked.value);
</script>
