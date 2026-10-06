"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { photos, type PhotoKey } from "./photos";

export type { PhotoKey };

/**
 * Consistent photographic treatment for the whole site:
 * rounded panel corners, cover-cropped, neutral placeholder while loading.
 * If a file ever fails to load, a branded neutral panel with a relevant icon is
 * shown instead of the browser's broken-image icon.
 *
 * The parent decides the shape — pass an aspect class (e.g. "aspect-[4/3]") or a height.
 * Below-the-fold photos lazy-load by default; pass `priority` for hero images.
 */
export function Photo({
  photo,
  className,
  imgClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  position,
}: {
  photo: PhotoKey;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** CSS object-position, e.g. "50% 30%". */
  position?: string;
}) {
  const p = photos[photo];
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-panel bg-surface-strong", className)}>
      {failed ? (
        <div role="img" aria-label={p.alt} className="absolute inset-0 flex items-center justify-center bg-surface">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-navy shadow-card">
            <Icon name={p.icon} className="h-8 w-8" />
          </span>
          <span aria-hidden="true" className="absolute right-4 top-4 h-2.5 w-2.5 bg-green" />
        </div>
      ) : (
        <Image
          src={p.src}
          alt={p.alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={80}
          onError={() => setFailed(true)}
          className={cn("object-cover", imgClassName)}
          style={position ? { objectPosition: position } : undefined}
        />
      )}
    </div>
  );
}
