import { Plus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import LogoImage from '../assets/logo.svg';
import { useState } from 'react';

export function Header() {
	const [isModalOpen, SetIsModalOpen] = useState(false);

	function buttonClicked() {
		SetIsModalOpen(true);
	}
	return (
		<div className="w-full max-w-3xl mx-auto flex items-center justify-between">
			<img
				src={LogoImage}
				alt=""
			/>

			{isModalOpen ? (
				<div>
					<div>
						<div>modal</div>
					</div>
				</div>
			) : null}

			<button
				type="button"
				onClick={buttonClicked}
				className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300">
				<Plus
					size={20}
					className="text-violet-500"
				/>
				Novo hábito
			</button>
		</div>
	);
}
