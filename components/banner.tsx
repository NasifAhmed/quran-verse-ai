import { TextSearch } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Banner() {
    return (
        <>
            <div className="grid gap-5 md:gap-10 mb-5">
                <div className="flex flex-col items-center justify-center">
                    <TextSearch className="text-primary" size={64} />
                    <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl text-center">
                        Quran Verse
                        <br />
                        Explorer
                    </h1>
                </div>
                <div className="text-center w-full">
                    <h2 className="font-medium text-base md:text-lg lg:text-xl ">
                        Deep contextual search for verses from Al-Quran <br />{" "}
                        with the power of{" "}
                        <span className="position relative">AI</span>
                        <span className="text-xs absolute">✨</span>
                    </h2>
                </div>
            </div>

            <Separator orientation="horizontal"></Separator>
        </>
    );
}
