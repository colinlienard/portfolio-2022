// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, Ref } from 'vue';
import useIsMobile from './useIsMobile';

const useScrollTo = () => {
  const scroll = inject<Ref>('scroll');
  const isMobile = useIsMobile();

  return (target: string) => {
    scroll?.value?.scrollTo(document.querySelector(target), {
      offset: isMobile ? -128 : -224,
    });
  };
};

export default useScrollTo;
