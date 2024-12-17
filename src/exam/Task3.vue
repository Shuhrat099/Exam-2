<template>
    <div class="p-10">
      <h1>Sonlar yig'indisi hisoblagichi</h1>
      <input
        type="number"
        class="p-2 text-xl mb-5 border border-green-600"
        v-model.number="n"
        placeholder="n sonini kiriting"
        @input="calculateSum"
      />
      <p v-if="n > 0">
        1 dan {{ n }} gacha bo'lgan sonlar yig'indisi: {{ sum }}
      </p>
    </div>
</template>
  
<script setup>
import { ref } from "vue";

const n = ref('');
const sum = ref(0);
  
const calculateSum = () => {
    if (n.value > 0) {
      sum.value = (n.value * (n.value + 1)) / 2; 
    } else {
        sum.value = 0;
    }
};
</script>
