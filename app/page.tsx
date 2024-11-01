"use client";

import ChatUI from "@/components/chat-ui";
import Footer from "@/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function Home() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <main className="flex flex-col justify-around items-center gap-10 min-h-screen w-full py-10 px-5 md:px-0">
                    <ChatUI className="flex-1" queryClient={queryClient} />
                    <Footer />
                </main>
            </QueryClientProvider>
        </>
    );
}
