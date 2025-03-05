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
            <body>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
