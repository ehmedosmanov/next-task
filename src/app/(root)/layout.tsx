import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    )
}