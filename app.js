new Vue({
  el: "#app",
  name: "app",
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      });
      this.newTask = "";
    },
    markDone(task) {
      task.done = !task.done;
    },
    remove(index) {
      this.tasks.splice(index, 1);
    }
  }
});
