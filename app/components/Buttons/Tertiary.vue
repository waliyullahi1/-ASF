<template>
    <button @click="$emit('clicked')" class="font-medium  border-white  text-tertiary hover:bg-primary bg-none ease-in-out duration-500 border px-8 rounded-xl py-3 border-transparent hover:border-preprimary select-none outline-none">
      <slot />
    </button>
  </template>