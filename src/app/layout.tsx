import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="font-[Arial] text-lg m-0 p-0 leading-relaxed text-black bg-neutral-50 min-h-screen flex flex-col">
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
