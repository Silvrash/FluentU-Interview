import React from 'react';

export interface RenderProps {
	renderIf?: boolean;
	children?: React.ReactNode;
}
export type ConditionRenderProps<T = Record<string, any>> = T & RenderProps;

function ConditionRender<P extends {}>(Component: React.ComponentType<P>) {
	return function ({ renderIf = true, ...props }: ConditionRenderProps<P>) {
		if (!renderIf) return null;
		return <Component {...(props as P)} />;
	};
}

export const ConditionRenderComponent: React.FC<RenderProps> = ({ renderIf = true, children }) => {
	if (!renderIf) return null;
	return <>{children}</>;
};

export default ConditionRender;
