import Image from 'next/image';
import Head from 'next/head';

const HomePageHero = () => {
  return (
    <>
      <Head>
        <title>Kupno nieruchomości w Gruzji - GoldRealEstate</title>
        <meta
          name="description"
          content="GoldRealEstate to firma ułatwiająca kupno nieruchomości w Gruzji, oferując pełne wsparcie w procesie zakupu, od umowy po odbiór kluczy."
        />
        <meta
          name="keywords"
          content="kupno nieruchomości, Gruzja, Batumi, inwestycje, GoldRealEstate"
        />
      </Head>
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-white z-0 overflow-hidden p-4">
        <div
          className="absolute inset-0 bg-black z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/ServiceImage.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative z-20 text-center max-w-4xl w-full mx-auto p-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight max-w-lg mx-auto">
            Jak ułatwimy Ci kupno nieruchomości w Gruzji?
          </h1>
          <p className="text-sm md:text-lg text-white mb-4 md:mb-6 leading-relaxed max-w-lg mx-auto">
            Wiemy, że dla osoby z Polski inwestycja na rynku zagranicznym jest dużym wyzwaniem...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="bg-transparent p-4">
              <Image
                src="/icon1.png"
                alt="Zdalna umowa"
                width={50}
                height={50}
                className="mx-auto"
              />
              <p className="mt-4 text-sm md:text-base lg:text-lg text-white">
                Umowa zakupu może być zawarta na miejscu w Batumi lub ZDALNIE ONLINE.
              </p>
            </div>
            <div className="bg-transparent p-4">
              <Image
                src="/icon2.png"
                alt="Aspekt prawny"
                width={50}
                height={50}
                className="mx-auto"
              />
              <p className="mt-4 text-sm md:text-base lg:text-lg text-white">
                Przeprowadzamy przez cały aspekt prawny zakupu w j. polskim.
              </p>
            </div>
            <div className="bg-transparent p-4">
              <Image
                src="/icon3.png"
                alt="Przejazd na lotnisko"
                width={50}
                height={50}
                className="mx-auto"
              />
              <p className="mt-4 text-sm md:text-base lg:text-lg text-white">
                Organizujemy przejazd z i na lotnisko.
              </p>
            </div>
            <div className="bg-transparent p-4">
              <Image
                src="/icon4.png"
                alt="Pełne wsparcie"
                width={50}
                height={50}
                className="mx-auto"
              />
              <p className="mt-4 text-sm md:text-base lg:text-lg text-white">
                Udzielamy pełnego wsparcia.
              </p>
            </div>
          </div>

          <a
            href="/Contact"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg z-20 text-lg font-semibold"
          >
            Brzmi dobrze! Chcę wiedzieć więcej
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
