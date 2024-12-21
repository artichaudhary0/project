import { Code2, Smartphone, Layout, Braces, Database, GitBranch } from 'lucide-react';

export function getSkillIcon(skillName: string) {
  const icons: Record<string, React.ElementType> = {
    Flutter: Layout,
    Dart: Code2,
    Android: Smartphone,
    Kotlin: Code2,
    Java: Braces,
    React: Code2,
    TypeScript: Code2,
    Firebase: Database,
    Git: GitBranch,
  };

  return icons[skillName] || Code2;
}