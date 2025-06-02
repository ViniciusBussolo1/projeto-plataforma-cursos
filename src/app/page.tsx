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
            <Image src={"/logo-black.svg"} alt="Logo" width={115} height={34} />
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

      <section className="w-full px-2 flex flex-col items-center justify-center mt-36">
        <div className="w-full max-w-[39.375rem]">
          <h1 className="font-medium text-3xl text-black text-center">
            Aprenda com os melhores
          </h1>

          <p className="text-gray-500 text-center mt-4">
            Descubra nossos cursos mais bem avaliados em várias categorias. De
            codificação e design a negócios e bem-estar, nossos cursos são
            criados para gerar resultados.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-3.5">
          <div className="w-full max-w-[16.58rem] flex flex-col items-center pb-12">
            <Image
              src={"/images-cards/card-1.svg"}
              alt="Card 1"
              width={263.42}
              height={148}
              className="object-cover"
            />

            <div className="w-full max-w-56 space-y-1 mt-2.5">
              <h4 className="font-semibold leading-5 text-black ">
                Build Text to image SaaS App in React JS
              </h4>
              <p className="text-sm text-gray-500">Richard James</p>
              <p className="font-medium text-gray-700 text-sm">
                4.5 <span className="text-gray-500">(122)</span>
              </p>
              <p className="font-semibold text-gray-800">R$ 10.99</p>
            </div>
          </div>

          <div className="w-full max-w-[16.58rem] flex flex-col items-center pb-12">
            <Image
              src={"/images-cards/card-2.svg"}
              alt="Card 2"
              width={263.42}
              height={148}
              className="object-cover"
            />

            <div className="w-full max-w-56 space-y-1 mt-2.5">
              <h4 className="font-semibold leading-5 text-black ">
                Build Text to image SaaS App in React JS
              </h4>
              <p className="text-sm text-gray-500">Richard James</p>
              <p className="font-medium text-gray-700 text-sm">
                4.5 <span className="text-gray-500">(122)</span>
              </p>
              <p className="font-semibold text-gray-800">R$ 10.99</p>
            </div>
          </div>

          <div className="w-full max-w-[16.58rem] flex flex-col items-center pb-12">
            <Image
              src={"/images-cards/card-3.svg"}
              alt="Card 3"
              width={263.42}
              height={148}
              className="object-cover"
            />

            <div className="w-full max-w-56 space-y-1 mt-2.5">
              <h4 className="font-semibold leading-5 text-black ">
                Build Text to image SaaS App in React JS
              </h4>
              <p className="text-sm text-gray-500">Richard James</p>
              <p className="font-medium text-gray-700 text-sm">
                4.5 <span className="text-gray-500">(122)</span>
              </p>
              <p className="font-semibold text-gray-800">R$ 10.99</p>
            </div>
          </div>

          <div className="w-full max-w-[16.58rem] flex flex-col items-center pb-12">
            <Image
              src={"/images-cards/card-4.svg"}
              alt="Card 4"
              width={263.42}
              height={148}
              className="object-cover"
            />

            <div className="w-full max-w-56 space-y-1 mt-2.5">
              <h4 className="font-semibold leading-5 text-black ">
                Build Text to image SaaS App in React JS
              </h4>
              <p className="text-sm text-gray-500">Richard James</p>
              <p className="font-medium text-gray-700 text-sm">
                4.5 <span className="text-gray-500">(122)</span>
              </p>
              <p className="font-semibold text-gray-800">R$ 10.99</p>
            </div>
          </div>
        </div>

        <button
          className="w-60 h-11 mt-11 bg-white text-gray-500 border 
         border-[#6B7280]/50  rounded-md cursor-pointer"
        >
          Mostrar todos os cursos
        </button>
      </section>

      <section className="w-full px-2 flex flex-col items-center justify-center mt-36">
        <div className="w-full max-w-[39.375rem]">
          <h1 className="font-medium text-3xl text-black text-center">
            Depoimentos
          </h1>
          <p className="text-gray-500 text-center mt-4">
            Ouça nossos alunos compartilharem suas jornadas de transformação,
            sucesso e como nossa plataforma fez a diferença em suas vidas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8">
          <div className="w-full max-w-80 p-6 space-y-7">
            <div className="flex gap-6">
              <Image
                src={"/images-profile/profile-img-1.svg"}
                alt="Profile"
                width={50}
                height={50}
              />

              <div>
                <h4 className="font-medium text-lg text-gray-700">
                  Donald Jackman
                </h4>
                <p className="font-medium text-xs text-gray-600">
                  SWE 1 @ Amazon
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Image
                src={"/images-profile/stars.svg"}
                alt="Stars"
                width={103}
                height={20}
              />

              <p className="text-sm text-gray-500">
                Uso a imagify há quase dois anos, principalmente para o
                Instagram, e ela tem sido incrivelmente fácil de usar,
                facilitando muito o meu trabalho.
              </p>
            </div>

            <Link
              href={"*"}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              Leia mais
            </Link>
          </div>

          <div className="w-full max-w-80 p-6 space-y-7">
            <div className="flex gap-6">
              <Image
                src={"/images-profile/profile-img-2.svg"}
                alt="Profile"
                width={50}
                height={50}
              />

              <div>
                <h4 className="font-medium text-lg text-gray-700">
                  Donald Jackman
                </h4>
                <p className="font-medium text-xs text-gray-600">
                  SWE 1 @ Amazon
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Image
                src={"/images-profile/stars.svg"}
                alt="Stars"
                width={103}
                height={20}
              />

              <p className="text-sm text-gray-500">
                Uso a imagify há quase dois anos, principalmente para o
                Instagram, e ela tem sido incrivelmente fácil de usar,
                facilitando muito o meu trabalho.
              </p>
            </div>

            <Link
              href={"*"}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              Leia mais
            </Link>
          </div>

          <div className="w-full max-w-80 p-6 space-y-7">
            <div className="flex gap-6">
              <Image
                src={"/images-profile/profile-img-3.svg"}
                alt="Profile"
                width={50}
                height={50}
              />

              <div>
                <h4 className="font-medium text-lg text-gray-700">
                  Donald Jackman
                </h4>
                <p className="font-medium text-xs text-gray-600">
                  SWE 1 @ Amazon
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Image
                src={"/images-profile/stars.svg"}
                alt="Stars"
                width={103}
                height={20}
              />

              <p className="text-sm text-gray-500">
                Uso a imagify há quase dois anos, principalmente para o
                Instagram, e ela tem sido incrivelmente fácil de usar,
                facilitando muito o meu trabalho.
              </p>
            </div>

            <Link
              href={"*"}
              className="text-sm text-blue-600 underline cursor-pointer"
            >
              Leia mais
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full px-2 flex flex-col items-center justify-center mt-36 pb-12">
        <div className="w-full max-w-[39.375rem]">
          <h1 className="font-medium text-3xl text-black text-center">
            Aprenda qualquer coisa, a qualquer hora, em qualquer lugar
          </h1>
          <p className="text-gray-500 text-center mt-4">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident exceptheur commodo do ea.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <button className="w-36 h-11 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700">
            Comece a usar
          </button>

          <Link href={"*"}>Saiba mais</Link>
        </div>
      </section>

      <footer className="w-full h-80 bg-gray-900 mt-40 flex flex-col items-center justify-center gap-5 px-2">
        <div className="w-full max-w-[73.25rem] flex items-center justify-between border-b-[1px] border-gray-700 pb-10">
          <div className="space-y-8">
            <Image src={"/logo-white.svg"} alt="Logo" width={115} height={34} />

            <p className="w-full max-w-96 text-white/80 text-sm leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          <div className="space-y-8">
            <h1 className="font-semibold text-white leading-8">Empresa</h1>

            <nav>
              <ul className="space-y-2">
                <li className="text-white text-sm">Home</li>
                <li className="text-white text-sm">Sobre nós</li>
                <li className="text-white text-sm">Entre em contato</li>
                <li className="text-white text-sm">Política de privacidade</li>
              </ul>
            </nav>
          </div>

          <div className="space-y-8">
            <h1 className="font-semibold text-white leading-8">
              Assine nosso newsletter
            </h1>

            <p className="w-full max-w-[20.938rem] text-white text-sm ">
              As últimas notícias, artigos e recursos, enviados semanalmente
              para sua caixa de entrada.
            </p>

            <div className="flex items-center gap-2.5">
              <input
                type="text"
                className="w-full max-w-[16.188rem] placeholder:text-gray-700 bg-gray-800 text-white text-sm p-2 rounded-md focus:outline-none border border-gray-700"
                placeholder="Digite seu email"
              />

              <button className="w-36 h-[2.375rem] text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 text-sm">
                Susbcrição
              </button>
            </div>
          </div>
        </div>

        <p className="text-white/60">
          Copyright 2024 © Edemy. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
