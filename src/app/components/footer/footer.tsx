export function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <>
            <footer className="text-center py-1 bg-neutral-400 text-white mt-auto bottom-0 inset-x-0">
                <p>&copy; {anoAtual} CCR</p>
            </footer>
        </>
    )
}