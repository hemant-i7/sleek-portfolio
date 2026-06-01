export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Upscale pixel art crisply (Pokémon-style sprite) */
  pixelated?: boolean;
}

export const navbarConfig = {
  logo: {
    src: '/assets/Hemant-kadam.png',
    alt: 'Hemant Kadam',
    width: 88,
    height: 88,
    pixelated: false,
  } satisfies NavbarLogo,
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Blogs',
      href: '/blog',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
