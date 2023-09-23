<template>
  <form>
    <p>
      <textarea class="tags-input" ref="inputInside" id="tags" name="tags">
    [{"value":"The Good, the Bad and the Ugly"}, {"value":"The Matrix"}]</textarea
      >
    </p>
  </form>
</template>

<script setup>
import Tagify from "@yaireo/tagify";
var inputInside = ref(null);
onMounted(() => {
  const tagify = new Tagify(inputInside.value, {
    enforceWhitelist: false,
    whitelist: [
      "The Shawshank Redemption",
      "The Godfather",
      "The Godfather: Part II",
      "The Dark Knight",
    ],
    callbacks: {
      add: console.log, // callback when adding a tag
      remove: console.log, // callback when removing a tag
    },
    dropdown: {
      maxItems: 20, // <- mixumum allowed rendered suggestions
      classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
      enabled: 0, // <- show suggestions on focus
      closeOnSelect: true, // <- do not hide the suggestions dropdown once an item has been selected
    },
  });
  tagify.dropdown.show(); // load the list
});
</script>

<style scoped>
@import url("https://unpkg.com/@yaireo/tagify/dist/tagify.css");
:deep(.tagify__tag-text) {
  @apply text-[13px];
}
:deep(.tagify__input) {
  @apply text-[13px];
}
</style>

<style>
.tagify {
  --tag-bg: theme("colors.gray.200");
  --tag-hover: theme("colors.gray.200");
  --tag-text-color: theme("colors.black");
  --tags-border-color: silver;
  --tag-border-radius: 6px;
  --tag-text-color--edit: theme("colors.gray.800");
  --tag-remove-bg: theme("colors.gray.300");
  --tag-pad: 4px 0.6em 2px;
  --tag-inset-shadow-size: 1.35em;
  --tag-remove-btn-bg--hover: theme("colors.gray.500");
  @apply rounded-lg p-1 border border-gray-200 font-medium;
}
.tags-look {
  & > div {
    @apply border-0;
  }
}
.tags-look .tagify__dropdown__item {
  @apply text-sm rounded px-4 py-2;
}

.tags-look .tagify__dropdown__item--active {
  @apply bg-gray-200 text-black;
}

.tags-look .tagify__dropdown__item:hover {
  @apply bg-gray-100;
}
</style>
