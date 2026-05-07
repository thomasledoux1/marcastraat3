'use client';

import { useMemo, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

type PhotoSection = {
  title: string;
  description: string;
  highlights: string[];
  mainImage: StaticImageData;
  galleryImages: StaticImageData[];
};

type PhotoSectionsLightboxProps = {
  sections: PhotoSection[];
};

export default function PhotoSectionsLightbox({
  sections,
}: PhotoSectionsLightboxProps) {
  const [open, setOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState<
    { src: string; width: number; height: number; alt: string }[]
  >([]);

  const sectionSlides = useMemo(
    () =>
      sections.map(section =>
        section.galleryImages.map(image => ({
          src: image.src,
          width: image.width,
          height: image.height,
          alt: `${section.title} foto`,
        })),
      ),
    [sections],
  );
  const isSingleSlide = slides.length <= 1;
  const [savedScrollY, setSavedScrollY] = useState(0);

  const openLightbox = (sectionIndex: number, startIndex = 0) => {
    setSavedScrollY(window.scrollY);
    setSlides(sectionSlides[sectionIndex]);
    setSlideIndex(startIndex);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollY, left: 0, behavior: 'auto' });
    });
  };

  return (
    <>
      <div className="space-y-8 md:space-y-12">
        {sections.map((section, sectionIndex) => (
          <section
            key={section.title}
            className="grid items-stretch gap-6 border-t border-black/10 pt-8 md:grid-cols-2 md:gap-10 md:pt-10"
          >
            <button
              type="button"
              onClick={() => {
                openLightbox(sectionIndex);
              }}
              className={`group relative block min-h-[320px] cursor-zoom-in overflow-hidden text-left md:min-h-[520px] ${
                sectionIndex % 2 === 1 ? 'md:order-2' : ''
              }`}
              aria-label={`Vergroot ${section.title} foto`}
            >
              <Image
                src={section.mainImage}
                alt={`${section.title} foto`}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.01]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </button>

            <div
              className={`flex flex-col justify-center gap-5 ${sectionIndex % 2 === 1 ? 'md:order-1' : ''}`}
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-[#59675f] uppercase">
                Ruimte {String(sectionIndex + 1).padStart(2, '0')}
              </p>
              <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {section.title}
              </h3>
              <p className="max-w-2xl text-base leading-8 text-[#39433d] md:text-lg">
                {section.description}
              </p>
              <ul className="grid gap-2 text-sm text-[#3f4d43] md:grid-cols-2 md:text-base">
                {section.highlights.map(highlight => (
                  <li key={highlight}>- {highlight}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  openLightbox(sectionIndex);
                }}
                className="w-fit cursor-pointer rounded-full border border-[#2f4f40] px-4 py-2 text-sm font-medium text-[#1f4634] transition hover:bg-[#e8eee7]"
              >
                Bekijk foto&apos;s van {section.title.toLowerCase()}
              </button>
            </div>
          </section>
        ))}
      </div>

      <Lightbox
        open={open}
        close={closeLightbox}
        index={slideIndex}
        slides={slides}
        plugins={[Zoom]}
        carousel={{ finite: isSingleSlide }}
        render={{
          buttonPrev: isSingleSlide ? () => null : undefined,
          buttonNext: isSingleSlide ? () => null : undefined,
        }}
        controller={{ touchAction: isSingleSlide ? 'none' : 'pan-y' }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.5,
          doubleTapDelay: 300,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 120,
        }}
      />
    </>
  );
}
