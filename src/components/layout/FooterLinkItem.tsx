import Link from "next/link";

const NavbarLinkItem = ({
	text,
	href,
	active,
}: {
	text: string;
	href: string;
	active: any;
}) => {
	return (
		<Link href={href}>
			<h3>{text}</h3>{" "}
		</Link>
	);
};

export default NavbarLinkItem;
