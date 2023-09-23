<template>
  <div class="not-prose">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="jumpu-button focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          メニュー（ドロップダウン）
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <div class="px-1 py-1" v-for="items in options">
            <MenuItem v-slot="{ active }" v-for="item in items">
              <button
                :class="[
                  active ? 'bg-primary-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                {{ item.name }}
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const options = [
  [{ name: "編集" }, { name: "複製" }],
  [{ name: "アーカイブ" }, { name: "移動" }],
  [{ name: "削除" }],
];
</script>
