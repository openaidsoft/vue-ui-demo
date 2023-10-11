<script setup>
/*
css 파일을 임포트하면 홈 화면으로 되돌아가도 스타일이 남아있어서 @tailwind 구문을 파일이 아닌 현재 스코프로 제한하여 적용
*/
// import '@/assets/tw.css'
</script>

<template>
<router-view></router-view>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>