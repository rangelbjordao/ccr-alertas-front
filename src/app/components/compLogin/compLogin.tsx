import Link from "next/link";

const CompLogin = () => {
  return (
    <>
      {/* Título principal */}
      <main className="mb-20">
        <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">
          CCR Alertas
        </h1>

        {/* Botões */}
        <section className="flex flex-col items-center p-5 my-5 bg-neutral-400 text-white rounded-lg shadow-md max-w-11/12 mx-auto w-4xl text-center">
          <form className="w-full max-w-md">
            <div className="flex flex-col mb-4">
              <label htmlFor="titulo-evento" className="mb-2">
                RO:
              </label>
              <input
                type="text"
                id="titulo-evento"
                name="titulo-evento"
                required
                className="p-2 text-black rounded-md w-3/4 bg-white mx-auto"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="titulo-evento" className="mb-2">
                Senha:
              </label>
              <input
                type="text"
                id="titulo-evento"
                name="titulo-evento"
                required
                className="p-2 text-black rounded-md w-3/4 bg-white mx-auto"
              />
            </div>
            <Link href="/ccr-alertas">
              <button className="bg-red-700 text-white border border-gray-800 rounded-md px-5 py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-red-900 hover:border-gray-600">
                Conectar
              </button>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default CompLogin;
