/**
 * Our Team — the two team members shown on the Home page, directly below the
 * hero's four service cards (components/sections/Team.tsx).
 *
 * TODO(client): supply verified details only. Any field left as `null` is simply not
 * rendered (no placeholder text is shown), so nothing invented ever reaches visitors.
 *
 * PHOTOGRAPHS: the current files in public/images/team/ are licensed Unsplash stock
 * portraits (see public/images/CREDITS.md) standing in until the team's own photographs
 * are supplied. Replace them before the names are published, so a real name is never
 * shown beside a stranger's face — overwrite the files with the same names, or change
 * the paths below. Supply 4:5 head-and-shoulders portraits of at least 1600 × 2000 px;
 * next/image serves resized, compressed AVIF/WebP variants automatically. Use
 * `photoPosition` (CSS object-position) to fine-tune the crop if required.
 */

export type TeamMember = {
  name: string | null;
  designation: string | null;
  /** Short professional profile. */
  bio: string | null;
  /** Public path of the portrait. */
  photo: string;
  photoPosition?: string;
};

/** Exactly two team members. */
export const teamMembers: [TeamMember, TeamMember] = [
  {
    name: null,
    designation: null,
    bio: null,
    photo: "/images/team/team-member-1.webp",
  },
  {
    name: null,
    // Confirmed by the client — display exactly as written.
    designation: "Retd. SBI Chief Manager",
    bio: null,
    photo: "/images/team/team-member-2.webp",
  },
];
