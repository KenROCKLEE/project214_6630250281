<template>
  <header id="portfolio" class="text-center bg-primary text-white py-5">
    <div class="profile-container">
      <img alt="Profile" class="logo rounded-circle mb-3" src="@/assets/Jojo1.png" />
    </div>
    <h1 class="portfolio-title">My Portfolio</h1>
  </header>
</template>

<script setup>
// No additional logic required for this component
</script>

<style scoped>
header {
  text-align: center;
  margin-bottom: 2rem;
  background-color: #206ab5; /* Retain original background color */
}

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 300px;
  height: 300px;
  border: 5px solid white;
  object-fit: cover;
}

.portfolio-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
