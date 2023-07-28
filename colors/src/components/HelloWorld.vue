<template>
  <div>
    <h1 class="text-center text-2xl">Demo</h1>
  </div>
  <div class="container mx-auto px-[12rem]">
    <div class="flex flex-col">
      <p>Enter an Hex color code to preview it:</p>
      <input 
        class="border-2 border-gray-300 p-2 mb-4 rounded-md" 
        v-model="color" 
        @input="validateColor" 
        placeholder="Enter a color" 
      />
  
      <p v-if="error" class="text-red-500">{{ error }}</p>
  
      <div 
        class="w-64 h-64 rounded-md" 
        :style="{ backgroundColor: isValidColor ? color : 'transparent' }"
      >
        <!-- Color preview area -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '',
      error: '',
      isValidColor: false,
    };
  },
  methods: {
    validateColor() {
      this.color = this.color.trim()
      if (this.color.startsWith('#')) {
        this.error = '';
        this.isValidColor = true;
      }
      else if (this.color.length === 0) {
        this.error = '';
        this.isValidColor = true;
      }
      else {
        this.error = 'Color should start with #';
        this.isValidColor = false;
        console.error("Invalid Color - Error detected - Color should start with #");
      }
    }
  }
};
</script>

<style scoped>
</style>

<style scoped>
</style>