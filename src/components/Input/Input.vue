<script setup lang="ts">
import { computed } from 'vue';
import type { InputProps } from './types'

const props = withDefaults(defineProps<InputProps>(), {
  state: 'normal',
  placeHolder: "Please input",
  disabled: false,
  contentType: 'text',
  // autocomplete: 'off'
  isRound: false,
  size:'md',
  searchable:false
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const stateClasses = computed(() => ({
  'border-gray-300 focus:border-blue-500 focus:ring-blue-200': props.state === 'normal',
  'border-red-500 focus:border-red-500 focus:ring-red-200': props.state === 'wrong',
  'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-200': props.state === 'success',
}));

const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};

const handleFocus = (e: Event) => {
  emit('focus', e);
};

const handleBlur = (e: Event) => {
  emit('blur', e);
};
const sizeClasses=computed(()=>{
  const sizes={
    sm:'h-7 text-xs',
    md:'h-9',
    lg:'h-11 text-lg'
  }
  return sizes[props.size]
})
</script>

<template>
  <div class="relative">
  <!-- 图标容器（绝对定位） -->
  <div class="absolute inset-y-0  flex items-center pl-2 pointer-events-none" v-if="props.searchable">
    <slot>
      <svg t="1753512640285" class="icon" viewBox="0 0 1024 1024"
      version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="12561" width="15" height="15">
      <path d="M1008.936719 939.925506l-219.315465-219.315465a443.346869 443.346869 0 1 0-69.669489 69.62087l219.315466 219.315466a49.249959 49.249959 0 0 0 69.669488-69.620871zM443.267147 788.675138a344.749715 344.749715 0 1 1 344.749715-344.749715 344.749715 344.749715 0 0 1-344.749715 344.749715z" fill="#515151" p-id="12562"></path></svg></slot>
  </div>

  <input
    :type="props.contentType"
    :value="props.modelValue"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    class="lumoui-input w-full border px-5   py-2 transition-all duration-200
           disabled:opacity-50 disabled:cursor-not-allowed
           focus:ring-2 focus:ring-opacity-50 focus:outline-none"
    :class="[
      stateClasses,sizeClasses,
      props.disabled ? 'bg-gray-100' : 'bg-white',
      props.isRound?'rounded-2xl':'rounded-sm',
      props.searchable?'block pl-10 ':''
    ]"
    :disabled="props.disabled"
    :placeholder="props.placeHolder"
    :isRound="props.isRound"
    :data-state="props.state"
  />
  </div>
</template>
