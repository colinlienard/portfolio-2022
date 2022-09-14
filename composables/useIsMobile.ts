import { onMounted, onUnmounted, ref } from 'vue';

const useIsMobile = () => {
  const isMobile = ref(false);

  const check = () => {
    isMobile.value = window.innerWidth < 480;
  };

  onMounted(() => {
    check();

    window.addEventListener('resize', check);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', check);
  });

  return isMobile;
};

export default useIsMobile;
