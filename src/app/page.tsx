import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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

          <button className="w-40 h-11 bg-blue-600 text-white rounded-4xl">
            Criar Conta
          </button>
        </div>
      </div>
    </header>
  );
}
