// Cards.tsx
import type { h, JSX} from 'preact';
import BadgeTags from './BadgeTags';

interface CardsProps {
  imgSrc: string;
  title: string;
  description: string;
  tags: { name: string; bgColor: string; icon?: JSX.Element }[];
  href?: string; // ⬅ nuevo
}

export default function Cards({ imgSrc, title, description, tags, href }: CardsProps) {
  // Maneja el clic para evitar que el enlace vacío recargue la página
  const handleClick = (event: any) => {
    event.preventDefault();
    // Aquí puedes colocar lógica futura o dejarlo temporalmente vacío
    console.log('Enlace desactivado temporalmente');
  };

  return (
    <div class="w-full flex flex-col lg:flex-row bg-SpacePalette-100 rounded-xl shadow-SpacePalette-300/55 shadow-lg overflow-hidden">
      {/* Imagen de la card */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        class="flex-none lg:w-80 h-48 lg:h-72 bg-cover bg-center rounded-t-lg lg:rounded-t-none lg:rounded-l-xl overflow-hidden transition hover:scale-110 cursor-pointer"
        style={{ backgroundImage: `url(${imgSrc})` }}
        title={`Imagen de ${title}`}
      ></a>

      {/* Contenido de la card */}
      <div class="py-6 px-5 flex flex-col justify-between leading-normal">
        {/* Título y descripción */}
        <div class="flex flex-col gap-4 mb-5">
          <h5 class="text-2xl font-bold tracking-tight text-redWeb-300">{title}</h5>
          <p class="font-normal text-redWeb-300/80">{description}</p>
        </div>

        {/* Tags */}
        <div class="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <BadgeTags bgColor={tag.bgColor} icon={tag.icon}>
              {tag.name}
            </BadgeTags>
          ))}
        </div>
      </div>
    </div>
  );
}
