<template>
  <div class="w-full max-w-xs">
    <textarea
      @input="resize()"
      ref="textarea"
      placeholder="Type your message here. I will resize based on the height content."
      class="jumpu-textarea min-h-[80px] resize-none w-full"
    ></textarea>
  </div>
</template>

<script setup>
const textarea = ref(null);
const emit = defineEmits(["input"]);
const resize = () => {
  textarea.value.style.height = "0px";
  textarea.value.style.height = textarea.value.scrollHeight + "px";
  emit("input", textarea.value.value);
};

onMounted(() => {
  resize();
});
</script>
