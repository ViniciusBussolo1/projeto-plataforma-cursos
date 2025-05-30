"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const itemsCarousel = [
  {
    id: 1,
    image: "/items-carousel/microsoft_logo.svg",
    alt: "Microsoft",
  },
  {
    id: 2,
    image: "/items-carousel/walmart_logo.svg",
    alt: "Walmart",
  },
  {
    id: 3,
    image: "/items-carousel/accenture_logo.svg",
    alt: "Accenture",
  },
  {
    id: 4,
    image: "/items-carousel/adobe_logo.svg",
    alt: "Adobe",
  },
  {
    id: 5,
    image: "/items-carousel/paypal_logo.svg",
    alt: "Paypal",
  },
];

const animation = { duration: 40000, easing: (t: number) => t };

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 4,
      spacing: 30,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <header className="w-full h-20 px-2 flex items-center justify-center border-b-[1px] border-gray-500">
        <div className="w-6xl flex items-center justify-between ">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="Logo" width={115} height={34} />
          </Link>

          <div className="flex items-center gap-9">
            <nav>
              <ul className="flex items-center gap-3.5">
                <Link href={"*"} className="text-gray-600 hover:text-gray-900">
                  Adicionar Cursos
                </Link>
                <li className="text-gray-600">|</li>
                <Link href={"*"} className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
              </ul>
            </nav>

            <button className="w-40 h-11 bg-blue-600 text-white rounded-4xl cursor-pointer hover:bg-blue-700">
              Criar Conta
            </button>
          </div>
        </div>
      </header>

      <section className="w-full h-[30.688rem] px-2 flex flex-col items-center justify-center ">
        <div className="w-full max-w-[45.938rem] space-y-6 relative">
          <h1 className="text-5xl text- font-bold text-center">
            Potencialize seu futuro com cursos elaborados para{" "}
            <span className="text-blue-600">
              atender às suas escolhas.
              <Image
                src={"/sktech.svg"}
                alt="Logo"
                width={214}
                height={30}
                className="absolute right-[11.563rem]"
              />
            </span>
          </h1>
          <p className="text-gray-500 text-center leading-6">
            Reunimos instrutores de nível internacional, conteúdo interativo e
            uma comunidade de apoio para ajudar você a atingir seus objetivos
            pessoais e profissionais.
          </p>
        </div>

        <div className="w-full max-w-[37.5rem] h-14 mt-11 flex items-center justify-between gap-1.5">
          <div className="flex-1 flex items-center gap-2.5">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar cursos"
              className="flex-1 p-1 focus:outline-none"
            />
          </div>

          <button className="w-36 h-11 text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700">
            Pesquisar
          </button>
        </div>
      </section>

      <section className="w-full px-2 flex flex-col items-center justify-center gap-10 mt-9">
        <h1 className="font-medium text-gray-600">Confiado por alunos de</h1>

        <div
          ref={sliderRef}
          className="w-full max-w-[49.375rem] flex items-center keen-slider"
        >
          {itemsCarousel.map((item) => (
            <div className="keen-slider__slide " key={item.id}>
              <Image
                src={item.image}
                alt={item.alt}
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
