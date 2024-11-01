import React from "react";

export default function Footer() {
    return (
        <div className="flex flex-col">
            <div className="mb-5 mt-20 flex w-full items-center justify-center text-center text-sm text-muted-foreground">
                &#169;{" "}
                <a
                    className="px-2 hover:text-primary hover:underline"
                    href="https://github.com/NasifAhmed"
                >
                    Nasif Ahmed
                </a>{" "}
                | 2024
            </div>
            <div className="mb-5 mt-1 flex w-full items-center justify-center text-center text-sm text-muted-foreground">
                Check out my another project :
                <a
                    className="px-2 text-primary hover:underline"
                    href="https://muslim-daily-dashboard.vercel.app/"
                >
                    Muslim Dashboard
                </a>{" "}
            </div>
        </div>
    );
}
