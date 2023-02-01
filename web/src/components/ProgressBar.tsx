import React from 'react';
import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
	progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
	return (
		<Progress.Root
			className="h-3 rounded-xl bg-zinc-700 w-full mt-4"
			value={75}>
			<Progress.Indicator
				className="h-3 rounded-xl bg-violet-600 -translate-x[-${100 - props.progress}%] transition-duration: 150ms;"
				style={{
					width: `${props.progress}%`
				}}
			/>
		</Progress.Root>
	);
}
