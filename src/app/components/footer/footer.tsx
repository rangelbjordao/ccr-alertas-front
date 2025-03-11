export function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <>
            <footer className="text-center py-5 bg-neutral-400 text-white">
                <p>&copy; {anoAtual} CCR</p>
            </footer>
        </>
    )
}