export const flexCenter = 'flex items-center justify-center';

export const mainPanelWidth = 'w-full md:w-[calc(100vw-10rem)]';

export const animatedTouchClasses =
	'duration-400 transform-gpu transition-all ease-in-out hover:scale-101 active:scale-99 shadow-04dp hover:shadow-08dp active:shadow-01dp hover:brightness-105 active:brightness-95';

export const standardHoverClasses = 'hover:bg-black/25 dark:hover:bg-white/25';

export const zeroDp = 'shadow-01dp dark:shadow-01dp bg-off-white dark:bg-black';

// input classes
export const inputResetClasses = 'ring-0 focus-within:ring-0 border-purple border-[1.5px]';

export const inputBaseColors = 'bg-transparent';

export const selectBoxClasses = `py-1 rounded-md border border-black/50 dark:border-white/50 dark:focus:border-light-purple focus:border-light-purple capitalize shadow-04dp  ${inputBaseColors} ${inputResetClasses} `;

export const cardHeadingClasses =
	'font-spartan text-xl font-bold text-black dark:text-white leading-[100%]';

// buttons
export const smallButtonClasses =
	animatedTouchClasses +
	' w-full rounded-sm text-off-white py-1 text-xs leading-[100%] bg-light-purple ';
