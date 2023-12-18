import { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';

export default function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState('');

  const onCityInputChange = (evt) => {
    const value = evt.target.value;
    setCity(value);
  };

  const handleUnitsChange = (evt) => {
    const selectedUnit = evt.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users location.');
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched!');
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(evt) => onCityInputChange(evt)}
          type='text'
          placeholder='Search for city....'
          className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg'
        />
        <UilSearch
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={handleLocationClick}
        />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button
          type='button'
          name='metric'
          className='text-xl text-white font-light transition ease-out hover:scale-125'
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className='text-xl text-white mx-2 -mt-1'>|</p>
        <button
          type='button'
          name='imperial'
          className='text-xl text-white font-light transition ease-out hover:scale-125'
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}
