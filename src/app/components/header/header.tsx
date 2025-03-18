import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      {/* Cabeçalho da página */}
      <header className="w-full bg-white py-6 md:text-lg sm: text-base">
        <div className="w-4xl max-w-11/12 mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Ir para a página inicial">
            <Image
              src="/images/logo-ccr.png"
              alt="Logo da CCR"
              width={80}
              height={80}
              className="w-[3rem] h-[3rem] max-w-full max-h-full md:w-20 md:h-20 sm:w-16 sm:h-16"
            ></Image>
          </Link>

          {/* Menu de navegação */}
          <nav className="ml-8 ">
            <ul className="flex list-none p-0">
              <li>
                <Link className="text-black px-4 py-1 hover:underline" href="/">
                  Início
                </Link>
              </li>

              <li>
                <Link
                  className="text-black px-4 py-1 hover:underline"
                  href="/login"
                >
                  CCR Alertas
                </Link>
              </li>

              <li>
                <Link
                  className="text-black px-4 py-1 hover:underline"
                  href="/integrantes"
                >
                  Integrantes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
