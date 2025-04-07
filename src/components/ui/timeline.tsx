export interface TimelineData {
  time: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  data: TimelineData[];
}

export function Timeline({ data }: TimelineProps) {
  return (
    <ol className="relative border-s border-gray-500 dark:border-gray-700 my-12">
      {data.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-card rounded-full mt-1.5 -start-1.5 border-2 border-gray-500 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.time}
          </time>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>

          {item.description && (
            <p className="text-base font-normal text-gray-300">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
