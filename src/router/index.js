import { createRouter, createWebHistory } from 'vue-router';
import StudentInfo from '@/components/StudentInfo.vue';
import CourseList from '@/components/CourseList.vue';

const routes = [
  { path: '/', redirect: '/student-info' },
  { path: '/student-info', component: StudentInfo },
  { path: '/courses', component: CourseList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
