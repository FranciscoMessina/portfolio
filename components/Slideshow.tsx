import React from 'react';

const delay = 2500;

export function Slideshow({ images }: { images: string[] }) {
	const [index, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex(prevIndex =>
					prevIndex === images.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<div className='relative'>
			<div className='slideshow '>
				<div
					className='slideshowSlider'
					style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
				>
					{images.map((img, index) => (
						<div className='slide' key={index} style={{ backgroundImage: img }}>
							<img
								src={img}
								alt=''
								className='object-cover w-full bg-nav max-h-[720px]'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='absolute bottom-5 left-0 z-10 space-x-10 flex items-center justify-center mx-auto  w-full'>
				{images.map((_, idx) => (
					<div
						key={idx}
						className={`cursor-pointer border-2 border-nav rounded-full w-3 h-3  ${
							index === idx ? 'bg-theme' : ''
						}`}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</div>
	);
}
