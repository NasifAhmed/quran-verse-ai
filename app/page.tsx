"use client";

import Banner from "@/components/banner";
import ChatUI from "@/components/chat-ui";
import Footer from "@/components/footer";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Home() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <main className="flex flex-col justify-around items-center min-h-screen max-w-3xl w-full py-10 px-5 mx-auto md:px-0 relative">
                    <ThemeToggleButton className="absolute top-10 right-5" />
                    <Banner />
                    <ChatUI className="flex-1" queryClient={queryClient} />
                    <Footer />
                </main>
            </QueryClientProvider>
        </>
    );
}
