import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Link from "next/link";
import quranChapterNames from "../public/quranChapterNames.json";
import { Button } from "./ui/button";

export default function VerseCard({ verseData }: { verseData: verse }) {
    return (
        <>
            <Card className="my-2 w-full">
                <CardHeader>
                    <CardTitle>
                        {
                            quranChapterNames[
                                verseData.surah_number.toString() as keyof typeof quranChapterNames
                            ]
                        }
                    </CardTitle>
                    <CardDescription>
                        {verseData.verse_start !== verseData.verse_end
                            ? `${verseData.verse_start}-${verseData.verse_end}`
                            : `${verseData.verse_start}`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>&ldquo;{verseData.text_english}&rdquo;</p>
                    <h3 className="italic text-muted-foreground text-end text-sm px-2 pt-2">
                        — Saheeh International
                    </h3>
                    <p className="mt-3">
                        &ldquo;{verseData.text_bangla}&rdquo;
                    </p>
                    <h3 className="italic text-muted-foreground text-end text-sm px-2 pt-2">
                        — Sheikh Mujibur Rahman
                    </h3>
                </CardContent>
                <CardFooter>
                    <Link
                        href={`https://quran.com/${verseData.surah_number}?startingVerse=${verseData.verse_start}&translations=163%2C20`}
                    >
                        <Button variant={"outline"} className="font-bold">
                            Read More
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </>
    );
}
