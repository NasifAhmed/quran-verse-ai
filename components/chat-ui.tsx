"use client";

import { cn } from "@/lib/utils";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import VerseCard from "./verse-card";
import { Separator } from "./ui/separator";

export default function ChatUI({
    className,
    queryClient,
}: {
    className: string;
    queryClient: QueryClient;
}) {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Automatically adjust height based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    const badges_data = [
        "I am depressed",
        "I don't believe in God",
        "I am not sure about slavery being ok",
        "Jesus died on the cross",
        "A story about a group who slept for long time",
    ];

    const postPrompt = async (): Promise<quranMatcherApiData> => {
        const response = await fetch(
            "https://quran-matcher-api.nasif2ahmed.workers.dev/api/v1/search",
            // "http://localhost:8787/api/v1/search",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: value,
                }),
            }
        );

        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    };

    const { data, error, refetch, isFetching } = useQuery({
        queryKey: ["verseData"],
        queryFn: postPrompt,
        enabled: false, // Disable automatic query on mount
    });

    return (
        <div
            className={cn(
                "flex flex-col justify-around items-center max-w-3xl gap-10",
                className
            )}
        >
            <h1 className="font-bold text-4xl">Quran Verse AI</h1>
            <h2 className="font-medium text-lg">
                Deep contextual search for verses from Al-Quran with the power
                of LLM
            </h2>
            <div className="grid w-full gap-1.5">
                {/* <Label htmlFor="message-2">Your Message</Label> */}
                <Textarea
                    ref={textareaRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="resize-none overflow-hidden text-lg max-h-72"
                    rows={1}
                    placeholder="Type here whats on your mind"
                    id="message-2"
                />
                <p className="text-sm text-muted-foreground">
                    {error ? (
                        <span className="text-red-500">
                            Error: {(error as Error).message}
                        </span>
                    ) : (
                        <span>Write your prompt and press search</span>
                    )}
                </p>
                <div className="space-x-2 space-y-2">
                    <span className="text-sm font-medium underline">
                        Select an example :{" "}
                    </span>
                    {badges_data.map((data, index) => (
                        <Badge
                            key={index}
                            variant={"outline"}
                            className="cursor-pointer"
                            onClick={() => {
                                setValue(data);
                            }}
                        >
                            {data}
                        </Badge>
                    ))}
                </div>
                <Button
                    onClick={() => refetch()}
                    className="mt-5"
                    disabled={isFetching}
                >
                    {isFetching ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4 animate-spin"
                            >
                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                            {"Loading"}
                        </>
                    ) : (
                        "Search"
                    )}
                </Button>
                {data && (
                    <Button
                        onClick={() => {
                            queryClient.resetQueries({
                                queryKey: ["verseData"],
                                exact: true,
                            });
                            setValue("");
                        }}
                        className="mt-2"
                        variant={"destructive"}
                    >
                        Reset
                    </Button>
                )}
                {error && (
                    <div className="mt-2 text-red-500">
                        Error: {(error as Error).message}
                    </div>
                )}
            </div>
            <Separator orientation="horizontal"></Separator>
            <div>
                {data &&
                    data?.verses.map((verse, index) => (
                        <VerseCard key={index} verseData={verse} />
                    ))}
            </div>
        </div>
    );
}
