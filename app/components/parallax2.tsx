"use client";
import React from "react";
import { Hero2 } from "./ui/hero2";


export function HeroParallaxDemo2() {
    return <Hero2 products={products} />;
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "/Angry Chef famous angry chef.jpeg",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "./vercel.svg",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "/L-1.jpeg",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "./vercel.svg",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "./next.svg",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "./vercel.svg",
    },
];
