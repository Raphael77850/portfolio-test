'use client';

import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import * as SimpleIcons from 'react-icons/si';
import type { Skill } from '@/data/skills';
import type { IconBaseProps } from 'react-icons';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  // Récupérer dynamiquement l'icône depuis react-icons
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (
    (Icons as Record<string, React.ComponentType<IconBaseProps>>)[skill.icon] ||
    (SimpleIcons as Record<string, React.ComponentType<IconBaseProps>>)[skill.icon]
  ) as React.ComponentType<IconBaseProps> | undefined;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-effect rounded-lg p-6 flex flex-col items-center justify-center space-y-3 hover:border-accent-blue/50 transition-all duration-300"
    >
      {/* Icône */}
      {IconComponent && (
        <div className="text-accent-blue">
          <IconComponent size={48} />
        </div>
      )}

      {/* Nom de la compétence */}
      <h3 className="text-neutral-light font-medium text-center">
        {skill.name}
      </h3>

      {/* Barre de niveau (optionnelle) */}
      {skill.level && (
        <div className="w-full">
          <div className="h-1 bg-secondary-light rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-accent-blue to-accent-green"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
