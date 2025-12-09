import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function FollowingPointerDemo() {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent title={blogContent.author} avatar={blogContent.authorAvatar} />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-[16/10] bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              fill
              className={`group-hover:scale-95 group-hover:rounded-2xl object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">{blogContent.title}</h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">{blogContent.description}</h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image:
    "https://images.unsplash.com/photo-1528747045269-390fe33c19a7?q=80&w=1920&auto=format&fit=crop",
  authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);

export default FollowingPointerDemo;


