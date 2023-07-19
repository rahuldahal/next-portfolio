import { useState } from 'react';
import { sortCompanies } from '../utils';
import WorkExperienceCard from './WorkExperienceCard';
import { professionalBackgrounds } from '../constants';

export default function WorkExperienceCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const sortedCompanies = sortCompanies(professionalBackgrounds);

  return (
    <div className="flex flex-col-reverse items-center">
      <div className="relative mt-4">
        {sortedCompanies.map((item, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
      <WorkExperienceCard {...sortedCompanies[currentSlide]} />
    </div>
  );
}
