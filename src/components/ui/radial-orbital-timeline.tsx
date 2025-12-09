"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  iconUrl?: string;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleItemHover = (id: number) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    
    // Set a small delay to prevent accidental triggers
    const timeout = setTimeout(() => {
      setHoveredItem(id);
      setActiveNodeId(id);
      setAutoRotate(false);

      const relatedItems = getRelatedItems(id);
      const newPulseEffect: Record<number, boolean> = {};
      relatedItems.forEach((relId) => {
        newPulseEffect[relId] = true;
      });
      setPulseEffect(newPulseEffect);

      centerViewOnNode(id);
    }, 150); // 150ms delay
    
    setHoverTimeout(timeout);
  };

  const handleItemLeave = () => {
    // Clear timeout if user leaves before delay
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    setHoveredItem(null);
    setActiveNodeId(null);
    setAutoRotate(true);
    setPulseEffect({});
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360; // Slower rotation
          return Number(newAngle.toFixed(3));
        });
      }, 100); // Slower update interval
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 250; // Increased radius for better spacing
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.6, // Increased minimum opacity for better visibility
      Math.min(1, 0.6 + 0.4 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white font-normal";
      case "in-progress":
        return "text-black dark:text-white bg-white/20 dark:bg-white/20 border-black dark:border-white font-normal";
      case "pending":
        return "text-black dark:text-white bg-black/40 dark:bg-black/40 border-black/50 dark:border-white/50 font-normal";
      default:
        return "text-black dark:text-white bg-black/40 dark:bg-black/40 border-black/50 dark:border-white/50 font-normal";
    }
  };

  return (
    <div
      className="w-full h-[80vh] flex flex-col items-center justify-center bg-slate-100 dark:bg-black overflow-hidden"
      ref={containerRef}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isHovered = hoveredItem === item.id;
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isHovered ? 200 : position.zIndex,
              opacity: isHovered ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={handleItemLeave}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.3 + 40}px`,
                    height: `${item.energy * 0.3 + 40}px`,
                    left: `-${(item.energy * 0.3 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.3 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    isHovered
                      ? "bg-white/90 backdrop-blur-sm"
                      : isRelated
                      ? "bg-white/70 backdrop-blur-sm"
                      : "bg-white/10 backdrop-blur-sm"
                  }
                  border-2 
                  ${
                    isHovered
                      ? "border-white shadow-lg shadow-white/30"
                      : isRelated
                      ? "border-white animate-pulse"
                      : "border-white/40"
                  }
                  transition-all duration-300 transform hover:scale-110 hover:bg-white/30
                  ${isHovered ? "scale-125" : ""}
                `}
                >
                  {item.iconUrl ? (
                    <img
                      src={item.iconUrl}
                      alt={item.title}
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Fallback to Lucide icon
                        const fallbackIcon = document.createElement('div');
                        fallbackIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>`;
                        target.parentNode?.appendChild(fallbackIcon);
                      }}
                    />
                  ) : (
                    <Icon size={16} className="text-black dark:text-white" />
                  )}
                </div>

                <div
                  className={`
                  absolute top-12 whitespace-nowrap
                  text-sm font-normal
                  transition-all duration-300
                  ${isHovered ? "text-black dark:text-white scale-125" : "text-black dark:text-white"}
                `}
                >
                  {item.title}
                </div>

                {isHovered && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-64 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-black/30 dark:border-white/30 shadow-xl shadow-black/10 dark:shadow-white/10 overflow-visible z-50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-black/50 dark:bg-white/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-xs ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-xs font-mono text-black/50 dark:text-white/50">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-black dark:text-white font-normal">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-black dark:text-white font-normal">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10">
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span className="flex items-center text-black dark:text-white font-normal">
                            <Zap size={10} className="mr-1" />
                            Energy Level
                          </span>
                          <span className="text-black dark:text-white font-normal">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-black/70 dark:text-white/70 mr-1" />
                            <h4 className="text-sm uppercase tracking-wider font-normal text-black dark:text-white">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-sm rounded-none border-black/20 dark:border-white/20 bg-transparent hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white hover:text-black dark:hover:text-white transition-all font-normal"
                                  onMouseEnter={() => handleItemHover(relatedId)}
                                  onMouseLeave={handleItemLeave}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-black/60 dark:text-white/60"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
