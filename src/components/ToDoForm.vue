<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
      class="input__lg" />
    <button type="submit" class="btn btn__primary btn__lg">Add</button>
  </form>
</template>
  
  <script>
  export default {
    methods: {
      onSubmit() {
        // 如果输入为空，则不触发事件
        if (this.label === "") {
          return;
        }
        // 触发todo-added事件，并传递待办事项文本
        this.$emit('todo-added', this.label);
        // 清空输入框
        this.label = "";
      }
    },
    data() {
      return {
        label: ""
      };
    }
  };
  </script>