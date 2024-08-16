import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const serif = Noto_Serif({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
    title: "Life Counter",
    description: "This is a personal counter until I turn 25",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${serif.className} w-screen h-screen`}>
                {children}
            </body>
        </html>
    );
}
