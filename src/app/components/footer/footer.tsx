export function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <>
            <footer className="text-center py-3 bg-neutral-400 text-white fixed bottom-0 inset-x-0">
                <p>&copy; {anoAtual} CCR</p>
            </footer>
        </>
    )
}