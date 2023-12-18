export default function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: 'Perth',
    },
    {
      id: 2,
      title: 'Sydney',
    },
    {
      id: 3,
      title: 'Tokyo',
    },
    {
      id: 4,
      title: 'Nagoya',
    },
    {
      id: 5,
      title: 'Manila',
    },
    {
      id: 6,
      title: 'Tagum',
    },
  ];

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='text-white text-lg font-medium hover:scale-110 ease-in-out duration-300'
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}
