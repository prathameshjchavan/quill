import { ReactNode } from "react";

type Props = {
	className?: string;
	children: ReactNode;
};

const MaxWidthWrapper = ({ className, children }: Props) => {
	return (
		<div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
