<template>
  <div class="course-list container">
    <h2 class="text-center mb-4">Course Details</h2>
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credits</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.code }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.credits }}</td>
          <td>{{ course.grade }}</td>
          <td>
            <button class="btn btn-warning btn-sm" @click="editCourse(course)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="deleteCourse(course.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent="saveCourse" class="mt-4">
      <h3>{{ editingCourse ? 'Edit Course' : 'Add Course' }}</h3>
      <div class="mb-3">
        <label class="form-label">Course Code:</label>
        <input v-model="form.code" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Course Name:</label>
        <input v-model="form.name" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Credits:</label>
        <input type="number" v-model="form.credits" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Grade:</label>
        <input v-model="form.grade" class="form-control" />
      </div>
      <button type="submit" class="btn btn-success">{{ editingCourse ? 'Save Changes' : 'Add Course' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const courses = ref([
  { id: 1, code: "03751112", name: "Social and Politics", credits: 3, grade: "C+" },
  { id: 2, code: "01999021", name: "Thai Language for Communication", credits: 3, grade: "B" },
  { id: 3, code: "01418141", name: "Intellectual Properties and Professional Ethics", credits: 3, grade: "B+" },
  { id: 4, code: "01418111", name: "Introduction to Computer Science", credits: 2, grade: "C" },
  { id: 5, code: "01355101", name: "English for Everyday Life", credits: 0, grade: "P" },
  { id: 6, code: "01355102", name: "English for University Life", credits: 0, grade: "P" },
  { id: 7, code: "01355103", name: "English for Job Opportunities", credits: 3, grade: "A" },
  { id: 8, code: "01418112", name: "Fundamental Programming Concepts", credits: 3, grade: "B+" },
  { id: 9, code: "01417111", name: "Calculus I", credits: 3, grade: "D" },
  { id: 10, code: "01999111", name: "Knowledge of the Land", credits: 2, grade: "A" },
  { id: 11, code: "03654111", name: "Aesthetics of Sport", credits: 3, grade: "A" },
  { id: 12, code: "01418113", name: "Computer Programming", credits: 3, grade: "B+" },
  { id: 13, code: "01418131", name: "Statistical Programming", credits: 3, grade: "B+" },
  { id: 14, code: "01418132", name: "Fundamentals of Computing", credits: 3, grade: "C+" },
  { id: 15, code: "01999041", name: "Economics for Better Living", credits: 3, grade: "C" },
  { id: 16, code: "01417322", name: "Basic Linear Algebra", credits: 3, grade: "A" },
  { id: 17, code: "01175118", name: "Chair Ball for Health", credits: 1, grade: "A" },
  { id: 18, code: "01418233", name: "Computer Architecture", credits: 3, grade: "B+" },
  { id: 19, code: "01174231", name: "Introduction to Recreation", credits: 2, grade: "B" },
  { id: 20, code: "01999012", name: "Health for Life", credits: 3, grade: "A" },
  { id: 21, code: "01418211", name: "Software Construction", credits: 3, grade: "C+" },
  { id: 22, code: "01418231", name: "Data Structures and Algorithms", credits: 3, grade: "B+" },
  { id: 23, code: "01418361", name: "Introduction to Computer Vision", credits: 3, grade: "A" }
]);

const form = ref({ code: '', name: '', credits: 0, grade: '' });
const editingCourse = ref(null);

function saveCourse() {
  if (editingCourse.value) {
    Object.assign(editingCourse.value, form.value);
    editingCourse.value = null;
  } else {
    courses.value.push({ ...form.value, id: Date.now() });
  }
  form.value = { code: '', name: '', credits: 0, grade: '' };
}

function editCourse(course) {
  editingCourse.value = course;
  form.value = { ...course };
}

function deleteCourse(id) {
  courses.value = courses.value.filter((course) => course.id !== id);
}
</script>

<style scoped>
.course-list {
  padding: 2rem 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

th, td {
  text-align: center;
  vertical-align: middle;
}

form {
  margin-top: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
