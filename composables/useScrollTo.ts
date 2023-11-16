import { inject, type Ref } from 'vue';
import useIsMobile from './useIsMobile';

const useScrollTo = () => {
  const scroll = inject<Ref>('scroll');
  const isMobile = useIsMobile();

  return (target: string | number) => {
    scroll?.value?.scrollTo(
      typeof target === 'number' ? target : document.querySelector(target),
      {
        offset: isMobile ? -128 : -224,
      },
    );
  };
};

export default useScrollTo;
