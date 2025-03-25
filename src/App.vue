<script setup>
import PortfolioHeader from './components/PortfolioHeader.vue';
import StudentInfo from './components/StudentInfo.vue';
import CourseList from './components/CourseList.vue';
</script>

<template>
  <PortfolioHeader />

  <main class="container mt-5">
    <section id="student-info" class="py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <StudentInfo />
        </div>
      </div>
    </section>
    <section id="course-detail" class="py-5 bg-light">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <CourseList />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

section {
  padding: 2rem 0;
}

.bg-light {
  background-color: #206ab5;
}
</style>
