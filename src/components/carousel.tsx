"use client";

import { ReactNode, useCallback } from "react";
import { Container } from "./container";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./button";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

interface CarouselProps {
  children: ReactNode;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Container className="mx-[initial] max-w-full mt-12">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container pb-10">{children}</div>
      </div>
      <div className="flex gap-3 justify-center lg:justify-end lg:mr-24">
        <Button onClick={onPrevButtonClick} variant="outline" size="icon">
          <GoChevronLeft className="size-5" />
        </Button>
        <Button onClick={onNextButtonClick} variant="outline" size="icon">
          <GoChevronRight className="size-5" />
        </Button>
      </div>
    </Container>
  );
};
