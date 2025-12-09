import { cn } from "@/lib/utils";

interface RevealTextListItemProps {
  text: string;
  description: string;
  image1?: string;
  image2?: string;
}

function RevealTextListItem({ text, description, image1, image2 }: RevealTextListItemProps) {
  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 className="text-7xl font-black text-foreground transition-all duration-500 group-hover:opacity-40">
        {text}
      </h1>
      <div className="absolute right-8 -top-1 z-40 h-20 w-16">
        <div className="relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md">
          {image2 ? (
            <img src={image2} alt={description} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs text-center px-2">
                {description}
              </span>
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "absolute right-8 -top-1 z-40 h-20 w-16",
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className="relative duration-200 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md">
          {image1 ? (
            <img src={image1} alt={description} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs text-center px-2">
                {description}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RevealTextList() {
  const items: RevealTextListItemProps[] = [
    {
      text: "Vizag",
      description: "My City",
      image1: "/image1.jpg",
      image2: "/image2.jpg",
    },
    {
      text: "Gaming",
      description: "Virtual Battles",
      image1: "/image3.jpg",
      image2: "/image3.jpg",
    },
    {
      text: "Football",
      description: "Scoring Goals",
      image1: "/image4.jpg",
      image2: "/image4.jpg",
    },
  ];
  
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4">
      {items.map((item, index) => (
        <RevealTextListItem key={index} text={item.text} description={item.description} image1={item.image1} image2={item.image2} />
      ))}
    </div>
  );
}

export { RevealTextList };
