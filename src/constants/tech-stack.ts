export const TECH_STACK = [
  'HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Python', 'Canva', 'Figma',
  'OBS', 'C', 'React', 'Tailwind', 'MongoDB', 'Github', 'Git', 'Blender', 'Typescript',
] as const;

export type TechItem = (typeof TECH_STACK)[number];
