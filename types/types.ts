type verse = {
    surah_number: number;
    verse_start: number;
    verse_end: number;
    text_english: string;
    text_bangla: string;
};

type quranMatcherApiData = {
    verses: verse[];
};
