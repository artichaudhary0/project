import { type Minion } from '../types/minion';

interface MinionCardProps {
  minion: Minion;
}

export default function MinionCard({ minion }: MinionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <img
        className="h-48 w-full object-cover"
        src={minion.imageUrl}
        alt={minion.name}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{minion.name}</h3>
        <p className="text-gray-600 mb-4">{minion.description}</p>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-semibold">Favorite Food:</span> {minion.favoriteFood}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Height:</span> {minion.height}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {minion.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}