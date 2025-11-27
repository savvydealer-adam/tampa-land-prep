import { useState, memo } from "react";

interface County {
  id: string;
  name: string;
  path: string;
  isPrimary?: boolean;
  isExtended?: boolean;
}

const floridaCounties: County[] = [
  { id: "hillsborough", name: "Hillsborough", isPrimary: true, path: "M148,248 L168,240 L188,246 L194,268 L182,290 L158,296 L142,280 L148,248Z" },
  { id: "pasco", name: "Pasco", isPrimary: true, path: "M148,218 L178,208 L192,218 L188,246 L168,240 L148,248 L138,238 L148,218Z" },
  { id: "pinellas", name: "Pinellas", isPrimary: true, path: "M118,250 L138,244 L142,264 L138,280 L128,290 L114,282 L110,262 L118,250Z" },
  { id: "hernando", name: "Hernando", isExtended: true, path: "M138,196 L168,186 L178,196 L178,208 L148,218 L138,210 L138,196Z" },
  { id: "citrus", name: "Citrus", isExtended: true, path: "M120,168 L152,158 L168,168 L168,186 L138,196 L120,186 L120,168Z" },
  { id: "polk", name: "Polk", isExtended: true, path: "M194,268 L232,252 L256,268 L250,308 L218,326 L182,312 L182,290 L194,268Z" },
  { id: "manatee", name: "Manatee", isExtended: true, path: "M158,296 L182,290 L192,312 L180,336 L154,342 L140,326 L158,296Z" },
  { id: "sarasota", name: "Sarasota", isExtended: true, path: "M140,326 L154,342 L148,376 L126,388 L108,370 L120,338 L140,326Z" },
  { id: "lake", name: "Lake", isExtended: true, path: "M212,196 L252,184 L274,200 L268,234 L234,246 L206,228 L212,196Z" },
  { id: "sumter", name: "Sumter", isExtended: true, path: "M178,196 L212,186 L206,218 L192,218 L178,208 L178,196Z" },
  { id: "orange", name: "Orange", isExtended: true, path: "M268,234 L302,222 L320,244 L314,278 L278,290 L256,268 L268,234Z" },
  { id: "osceola", name: "Osceola", isExtended: true, path: "M256,268 L278,290 L272,334 L238,346 L218,326 L250,308 L256,268Z" },
  { id: "hardee", name: "Hardee", isExtended: true, path: "M180,336 L192,312 L218,326 L212,360 L186,372 L180,336Z" },
  { id: "highlands", name: "Highlands", isExtended: true, path: "M218,326 L238,346 L232,396 L204,408 L186,388 L186,372 L212,360 L218,326Z" },
  { id: "levy", name: "Levy", path: "M92,138 L128,126 L148,138 L148,158 L120,168 L92,158 L92,138Z" },
  { id: "marion", name: "Marion", path: "M148,138 L188,126 L214,144 L214,178 L178,192 L148,178 L148,138Z" },
  { id: "seminole", name: "Seminole", path: "M274,200 L298,188 L316,206 L310,228 L286,234 L274,218 L274,200Z" },
  { id: "volusia", name: "Volusia", path: "M298,156 L340,140 L362,158 L356,198 L320,214 L298,192 L298,156Z" },
  { id: "brevard", name: "Brevard", path: "M320,244 L356,232 L378,262 L372,324 L336,342 L314,318 L320,244Z" },
  { id: "indian-river", name: "Indian River", path: "M336,342 L372,334 L384,368 L366,398 L342,390 L336,342Z" },
  { id: "charlotte", name: "Charlotte", path: "M126,388 L148,376 L166,406 L148,434 L120,428 L112,406 L126,388Z" },
  { id: "lee", name: "Lee", path: "M120,428 L148,434 L160,472 L138,494 L108,482 L100,450 L120,428Z" },
  { id: "collier", name: "Collier", path: "M138,494 L178,488 L206,528 L184,572 L140,578 L114,542 L138,494Z" },
  { id: "miami-dade", name: "Miami-Dade", path: "M312,504 L348,492 L372,528 L366,582 L330,604 L302,592 L302,538 L312,504Z" },
  { id: "broward", name: "Broward", path: "M302,462 L342,450 L360,474 L348,504 L312,504 L302,478 L302,462Z" },
  { id: "palm-beach", name: "Palm Beach", path: "M302,398 L348,386 L372,426 L360,468 L318,480 L302,450 L302,398Z" },
  { id: "alachua", name: "Alachua", path: "M160,106 L200,94 L222,112 L216,142 L182,154 L160,138 L160,106Z" },
  { id: "duval", name: "Duval", path: "M276,64 L316,52 L338,74 L332,108 L298,120 L276,102 L276,64Z" },
  { id: "nassau", name: "Nassau", path: "M298,32 L332,18 L356,38 L350,62 L322,70 L298,56 L298,32Z" },
  { id: "escambia", name: "Escambia", path: "M12,60 L42,48 L58,66 L52,94 L24,106 L6,88 L12,60Z" },
  { id: "leon", name: "Leon", path: "M94,70 L128,58 L146,76 L140,106 L112,118 L90,100 L94,70Z" },
  { id: "st-lucie", name: "St. Lucie", path: "M342,390 L366,382 L382,412 L372,442 L348,450 L336,418 L342,390Z" },
  { id: "martin", name: "Martin", path: "M348,450 L372,442 L386,472 L376,502 L352,510 L342,480 L348,450Z" },
  { id: "okeechobee", name: "Okeechobee", path: "M272,334 L302,322 L318,346 L312,382 L280,394 L260,376 L272,334Z" },
  { id: "glades", name: "Glades", path: "M232,396 L260,384 L280,414 L272,452 L244,464 L224,444 L232,396Z" },
  { id: "hendry", name: "Hendry", path: "M206,528 L244,516 L272,552 L260,590 L224,598 L198,568 L206,528Z" },
  { id: "desoto", name: "DeSoto", path: "M186,372 L212,360 L232,396 L224,436 L196,448 L178,428 L186,372Z" },
];

interface FloridaCountyMapProps {
  className?: string;
}

function FloridaCountyMapComponent({ className = "" }: FloridaCountyMapProps) {
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);

  const getCountyFill = (county: County, isHovered: boolean) => {
    if (county.isPrimary) {
      return isHovered ? "hsl(145 65% 32%)" : "hsl(145 65% 40%)";
    }
    if (county.isExtended) {
      return isHovered ? "hsl(145 45% 45%)" : "hsl(145 45% 55%)";
    }
    return isHovered ? "hsl(var(--muted-foreground) / 0.25)" : "hsl(var(--muted))";
  };

  const hoveredCountyData = floridaCounties.find(c => c.id === hoveredCounty);

  return (
    <div className={`relative ${className}`} data-testid="florida-county-map">
      <svg
        viewBox="0 0 420 640"
        className="w-full h-auto"
        style={{ maxHeight: "500px" }}
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>
        
        <g filter="url(#shadow)">
          {floridaCounties.map((county) => {
            const isHovered = hoveredCounty === county.id;
            return (
              <path
                key={county.id}
                d={county.path}
                fill={getCountyFill(county, isHovered)}
                stroke="hsl(var(--background))"
                strokeWidth={isHovered ? 2 : 1}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredCounty(county.id)}
                onMouseLeave={() => setHoveredCounty(null)}
                data-testid={`county-${county.id}`}
              />
            );
          })}
        </g>

        <text
          x="210"
          y="28"
          textAnchor="middle"
          className="fill-foreground font-semibold"
          style={{ fontSize: "16px" }}
        >
          Florida Service Area
        </text>

        <g className="fill-primary" transform="translate(160, 260)">
          <circle cx="0" cy="0" r="4" />
          <text x="8" y="4" style={{ fontSize: "11px" }} className="fill-foreground font-medium">Tampa</text>
        </g>
      </svg>

      {hoveredCountyData && (
        <div 
          className="absolute left-4 top-12 rounded-md bg-card border px-3 py-2 text-sm font-medium shadow-md z-10"
          data-testid="county-tooltip"
        >
          <span className="text-foreground">
            {hoveredCountyData.name} County
          </span>
          {(hoveredCountyData.isPrimary || hoveredCountyData.isExtended) && (
            <span className="ml-2 text-primary font-medium">
              {hoveredCountyData.isPrimary ? "Primary" : "Extended"} Service
            </span>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded" style={{ backgroundColor: "hsl(145 65% 40%)" }} />
          <span>Primary Service Area</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded" style={{ backgroundColor: "hsl(145 45% 55%)" }} />
          <span>Extended Service Area</span>
        </div>
      </div>
    </div>
  );
}

export const FloridaCountyMap = memo(FloridaCountyMapComponent);
