import Image from 'next/image';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import backsideImage from '@/public/backside.jpg';
import badkamerImage from '@/public/bathroom.jpg';
import badkamer2Image from '@/public/bathroom2.jpg';
import bureauImage from '@/public/bureau.jpg';
import kinderkamer1Image from '@/public/bedroomdonna.jpg';
import masterBedroomImage from '@/public/bedroomparents.jpg';
import kinderkamer2Image from '@/public/bedroomvito.jpg';
import kinderkamer2ExtraImage from '@/public/bedroomvito1.jpg';
import garageImage from '@/public/garage.jpg';
import tuinImage from '@/public/garden.jpg';
import tuin2Image from '@/public/garden1.jpg';
import keukenImage from '@/public/kitchen.jpg';
import keuken1Image from '@/public/kitchen1.jpg';
import keuken2Image from '@/public/kitchen2.jpg';
import keuken3Image from '@/public/kitchen3.jpg';
import livingImage from '@/public/livingroom.jpg';
import living1Image from '@/public/livingroom1.jpg';
import speelhoekImage from '@/public/playcorner.jpg';
import voorgevelImage from '@/public/voorgevel.jpg';
import PhotoSectionsLightbox from './photo-sections-lightbox';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Marcastraat 3 - Te koop: instapklare gezinswoning in Wondelgem',
  openGraph: {
    title: 'Marcastraat 3 - Te koop: instapklare gezinswoning in Wondelgem',
    description:
      'Wonen in een rustige, gezellige buurt en tegelijk dicht bij de stad: deze woning ligt op slechts 5 km van het centrum van Gent.',
    images: [voorgevelImage],
  },
  description:
    'Wonen in een rustige, gezellige buurt en tegelijk dicht bij de stad: deze woning ligt op slechts 5 km van het centrum van Gent.',
};

export default function Home() {
  const composedSections = [
    {
      title: 'Slaapkamers',
      description:
        'Drie volwaardige slaapkamers zorgen voor veel ruimte voor een gezin: een zeer ruime master bedroom en twee grote kinderkamers met een aangename lichtinval.',
      highlights: ['Zeer ruime master bedroom', '2 kinderkamers'],
      mainImage: masterBedroomImage,
      galleryImages: [
        masterBedroomImage,
        kinderkamer1Image,
        kinderkamer2Image,
        kinderkamer2ExtraImage,
      ],
    },
    {
      title: 'Bureau',
      description:
        'Een afzonderlijk bureau maakt thuiswerk of studeren comfortabel, stil en praktisch ingericht.',
      highlights: ['Aparte werkruimte', 'Lichtrijk'],
      mainImage: bureauImage,
      galleryImages: [bureauImage],
    },
    {
      title: 'Badkamer',
      description:
        'De badkamer is netjes afgewerkt en uitgerust met een dubbele lavabo en een bad.',
      highlights: ['Dubbele lavabo', 'Bad aanwezig'],
      mainImage: badkamerImage,
      galleryImages: [badkamerImage, badkamer2Image],
    },
    {
      title: 'Keuken',
      description:
        'De open keuken met kookeiland vormt het hart van de woning en sluit mooi aan op de leefruimte, met extra plek voor een speelhoek.',
      highlights: [
        'Open keuken met kookeiland',
        'Speelhoek',
        'Aansluiting met living',
      ],
      mainImage: keukenImage,
      galleryImages: [
        keukenImage,
        keuken1Image,
        keuken2Image,
        keuken3Image,
        speelhoekImage,
        livingImage,
        living1Image,
      ],
    },
    {
      title: 'Tuin',
      description:
        'De tuin biedt een rustige buitenruimte om te ontspannen, eten of spelen, met een mooi zicht op de boom achteraan de tuin',
      highlights: ['Grote zilverberk', 'Privacy'],
      mainImage: tuinImage,
      galleryImages: [tuinImage, tuin2Image, backsideImage],
    },
    {
      title: 'Garage',
      description:
        'De inpandige garage met automatische garagepoort zorgt voor comfortabel parkeren van fietsen en extra bergruimte.',
      highlights: ['Inpandige garage', 'Automatische garagepoort'],
      mainImage: garageImage,
      galleryImages: [garageImage],
    },
  ];

  return (
    <div
      className={`${dmSans.className} relative min-h-screen overflow-hidden bg-[#f5efe4] text-[#1a1a18]`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#6b8f71]/20 blur-3xl" />
        <div className="absolute -right-20 top-72 h-72 w-72 rounded-full bg-[#344c66]/20 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-[2048px] flex-col gap-12 px-6 pb-8 md:px-10 lg:pb-12">
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden rounded-none border-y border-black/10 bg-white/70 shadow-[0_20px_70px_-50px_rgba(0,0,0,0.6)] backdrop-blur-sm md:h-screen">
          <div className="flex flex-col md:grid h-full grid-rows-[0.52fr_0.48fr] gap-0 md:grid-cols-[1.05fr_0.95fr] md:grid-rows-1">
            <div className="relative min-h-0 aspect-16/11 md:aspect-auto">
              <Image
                src={voorgevelImage}
                alt="Voorgevel van de woning in de Marcastraat"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1279px) 100vw, 52vw"
              />
            </div>

            <div className="grid content-center gap-6 overflow-y-auto p-6 md:grid-cols-[1.3fr_0.7fr] md:gap-8 md:p-9 xl:grid-cols-1 xl:p-12">
              <div className="space-y-4">
                <h1
                  className={`${cormorant.className} text-4xl leading-[0.92] font-bold tracking-tight md:text-6xl`}
                >
                  Te koop: instapklare gezinswoning in Wondelgem
                </h1>
                <p className="max-w-2xl text-base leading-7 text-[#2e2f2b] md:text-lg">
                  Wonen in een rustige, gezellige buurt en tegelijk dicht bij de
                  stad: deze woning ligt op slechts 5 km van het centrum van
                  Gent.
                </p>
                <div className="max-w-2xl text-base leading-7 text-[#2e2f2b] md:text-lg">
                  <b>Troeven van de woning:</b>
                  <ul className="mt-1 list-disc list-inside">
                    <li>goede EPC</li>
                    <li>14 zonnepanelen met thuisbatterij</li>
                    <li>3 slaapkamers met zeer ruime master bedroom</li>
                    <li>aparte bureau</li>
                    <li>2 toiletten</li>
                    <li>open keuken met kookeiland & speelhoek</li>
                    <li>living met aansluiting met keuken</li>
                    <li>tuin</li>
                    <li>inpandige garage</li>
                    <li>oprit voor auto</li>
                  </ul>
                </div>
                <p className="text-sm md:text-base">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Marcastraat+3%2C+9032+Wondelgem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0f4c5c] underline decoration-2 underline-offset-4"
                  >
                    Marcastraat 3, 9032 Wondelgem (bekijk op Google Maps)
                  </a>
                </p>
                <p className="font-medium text-[#0f4c5c] md:text-lg">
                  Bezichtiging? Stuur een mail naar:{' '}
                  <a
                    href="mailto:marcastraat3@gmail.com"
                    className="mt-3 inline-block text-base font-semibold text-[#0f4c5c] underline decoration-2 underline-offset-4"
                  >
                    marcastraat3@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2
            className={`${cormorant.className} text-4xl font-semibold md:text-5xl`}
          >
            Binnenkijken per ruimte
          </h2>
          <PhotoSectionsLightbox sections={composedSections} />
        </section>

        <section className="rounded-4xl border border-black/10 bg-[#1e2b2f] p-6 text-[#f4efe4] shadow-[0_24px_60px_-35px_rgba(0,0,0,1)] md:p-9">
          <h2 className={`${cormorant.className} text-4xl font-semibold`}>
            Interesse in een bezoek?
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#d8ddce]">
            Boek rechtstreeks een prive-afspraak via e-mail.
          </p>
          <a
            href="mailto:marcastraat3@gmail.com"
            className="mt-6 inline-flex rounded-full bg-[#f4efe4] px-6 py-2.5 font-semibold text-[#1e2b2f] transition hover:bg-white"
          >
            Boek een afspraak
          </a>
        </section>
      </main>
    </div>
  );
}
