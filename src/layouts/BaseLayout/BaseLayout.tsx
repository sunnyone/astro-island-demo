import type {ReactNode} from "react";

export interface BaseLayoutProps {
    title: string;
    children?: ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({title, children}) =>
<html lang="en">
	<head>
		<meta charSet="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<title>{title}</title>
	</head>
	<body>
        {children}
	</body>
</html>;

