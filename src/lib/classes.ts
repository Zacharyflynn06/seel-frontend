// Utilities
export const mainPanelWidth = 'w-full md:w-[calc(100vw-10rem)]';
export const flexCenter = 'flex items-center justify-center';
export const padHeader = 'h-[calc(100dvh-60px)] ';

export const standardHoverClasses = 'hover:bg-black/25 dark:hover:bg-white/25';

// Text
export const secondaryTextClasses = 'text-black/50 dark:text-white/50';

export const anchorTagClasses =
	secondaryTextClasses + ' ml-2.5 block underline hover:text-pink dark:hover:text-pink';

export const animatedTouchClasses =
	'duration-400 transform-gpu transition-all ease-in-out hover:scale-101 active:scale-99 shadow-04dp hover:shadow-08dp active:shadow-01dp hover:brightness-105 active:brightness-95';

export const zeroDp = 'shadow-01dp dark:shadow-01dp bg-off-white dark:bg-black';

// Form Input Classes
export const inputResetClasses =
	'ring-0 focus-within:ring-0 shadow-04dp rounded-md bg-white dark:bg-grey-08 ';

export const inputBorderClasses =
	'border-[.5px] border-off-black dark:border-transparent focus:border-purple dark:focus:shadow-pink dark:focus:border-pink focus:ring-purple  ';
export const textInputClasses =
	inputResetClasses +
	inputBorderClasses +
	'w-full dark:placeholder:text-off-white mt-1 block w-full  dark:text-off-white  ';

export const inputLabelClasses = 'block';
export const selectBoxClasses = inputResetClasses + inputBorderClasses + ` py-1   `;

export const cardHeadingClasses =
	'font-spartan text-2xl font-bold text-black dark:text-off-white leading-none';

// Buttons
export const smallButtonClasses =
	animatedTouchClasses +
	' w-full rounded-sm text-off-white py-1 text-xs leading-none bg-light-purple ';

export const svgTouchClasses = 'ease-linear hover:scale-105 active:scale-95 duration-300';
