import { cn } from "@/lib/utils";
import { Rubik, DM_Sans } from 'next/font/google';  // Adding Rubik and DM_Sans fonts
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { FollowerPointerCard } from "../ui/following-pointer";

const rubik = Rubik({ subsets: ['latin'], weight: ["500"] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ["400", "500", "700"] });

export function CardDetails() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const cardDetails = `Card Number: ${blogContent.cardnumber}\nExpiry Date: ${blogContent.expirydate}\nCVV: 123`;
        navigator.clipboard.writeText(cardDetails).then(() => {
            setCopied(true);
            toast.success('Card details copied to clipboard!');
            const button = document.getElementById('copybtn');
            button?.style.setProperty('background-color', 'green', 'important');
            setTimeout(() => {
                setCopied(false);
                button?.style.setProperty('background-color', 'black', 'important');
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="w-full mx-auto flex flex-col gap-5 justify-center items-center min-h-screen ">
            <FollowerPointerCard>
                <div className="relative bg-gradient-to-r from-white via-gray-200 to-gray-300 text-gray-900 overflow-hidden select-none h-full rounded-2xl transition duration-200 group hover:shadow-xl shadow-lg">
                    <div className="p-5">
                        <h1 className={cn(dmSans.className, "font-bold text-xl text-gray-800 tracking-wider")}>
                            Justine Burger
                        </h1>
                        <h1 className={cn(rubik.className, "my-4 text-3xl tracking-widest text-gray-900")}>
                            {blogContent.cardnumber}
                        </h1>
                        <div className="flex flex-row justify-between items-center mt-10">
                            <span className={cn(dmSans.className, "text-lg text-gray-700 tracking-widest")}>
                                {blogContent.expirydate}
                            </span>
                            <span className={cn(dmSans.className, "text-lg text-gray-700 tracking-widest")}>123</span>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>
            <div className="copycard">
                <button
                id="copybtn"
                    onClick={handleCopy}
                    className="flex gap-1 bg-black text-white font-semibold px-4 py-2 rounded-lg"
                >
                    <CheckCircle /> {copied ? "Copied!" : "Copy Card"}
                </button>
            </div>
        </div>
    );
}

const blogContent = {
    author: "Manu Arora",
    expirydate: "02/23",
    title: "Your Card",
    cardnumber: "1234 9000 0000 5567",
};
