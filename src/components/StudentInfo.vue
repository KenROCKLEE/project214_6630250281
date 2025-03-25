<template>
  <div class="student-info container text-center">
    <h2 class="text-center mb-4">Student Information</h2>
    <img alt="Jojo Yunaiwa" class="logo rounded-circle mb-3" :src="student.photo" />
    <p><strong>Name:</strong> {{ student.name }}</p>
    <p><strong>ID:</strong> {{ student.id }}</p>
    <p><strong>Major:</strong> {{ student.major }}</p>
    <p><strong>Previous School:</strong> {{ student.previousSchool }}</p>

    <button class="btn btn-primary mt-3" @click="editMode = true">Edit</button>

    <form v-if="editMode" @submit.prevent="saveChanges" class="mt-4">
      <div class="mb-3">
        <label class="form-label">Name:</label>
        <input v-model="student.name" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">ID:</label>
        <input v-model="student.id" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Major:</label>
        <input v-model="student.major" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Previous School:</label>
        <input v-model="student.previousSchool" class="form-control" />
      </div>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const student = ref({
  photo: new URL('@/assets/Jojo2.png', import.meta.url).href,
  name: 'Pantat Suwanwatthana',
  id: '6630250281',
  major: 'Computer Science',
  previousSchool: 'Saipanya Rangsit School',
});

const editMode = ref(false);

function saveChanges() {
  editMode.value = false;
  // Save changes to the server if needed
}
</script>

<style scoped>
.student-info {
  text-align: center;
  padding: 2rem 0;
}

.logo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

form {
  margin-top: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
