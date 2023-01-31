import React from 'react';
import * as Progress from '@radix-ui/react-progress';

// interface ProgressBarProps {
// 	progress: number;
// }

export function ProgressBar() {
	const [progress, setProgress] = React.useState(75);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(75), 200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Progress.Root
			className="h-3 rounded-xl bg-zinc-700 w-full mt-4"
			value={75}>
			<Progress.Indicator
				className="h-3 rounded-xl bg-violet-600"
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</Progress.Root>
	);
}
