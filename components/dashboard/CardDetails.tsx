import { FollowerPointerCard } from "../ui/following-pointer";

export function CardDetails() {
    return (
        <div className="w-full mx-auto flex justify-center items-center min-h-screen select-none">
            <FollowerPointerCard>
                <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                    <div className="p-5">
                    <h1 className="font-normal text-xl text-zinc-500">
                            Justine Burger
                        </h1>
                        <h1 className="font-normal my-4 text-3xl text-zinc-500">
                            {blogContent.cardnumber}
                        </h1>
                        <div className="flex flex-row justify-between items-center mt-10">
                            <span className="text-lg text-gray-500">{blogContent.expirydate}</span>
                            <span className="text-lg text-gray-500">123</span>
                        </div>
                    </div>
                </div>
            </FollowerPointerCard>
        </div>
    );
}

const blogContent = {
    author: "Manu Arora",
    expirydate: "02/23",
    title: "Your Card",
    cardnumber: "1234 9000 0000 5567",
};
