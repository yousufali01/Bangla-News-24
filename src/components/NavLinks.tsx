import Link from "next/link";
import React from "react";
import { categories } from "@/data/categories";

interface Category {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = () => {
    const filteredCategories = categories.filter(
        (category: Category) => category.scrapable === true
    );

    return (
        <div className="flex justify-center gap-4 border-b bg-base-100 py-2">
            <Link href="/">হোম</Link>
            {filteredCategories.map((category: Category) => (
                <Link
                    key={category.topicId}
                    href={`/${category.slug}`}
                >
                    {category.title}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;