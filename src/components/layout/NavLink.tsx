import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

export default function NavLink({
  href,
  title,
}: Props) {
  return (
    <Link
      href={href}
      className="
      text-sm
      font-medium
      text-slate-600
      transition-colors
      duration-300
      hover:text-blue-600
    "
    >
      {title}
    </Link>
  );
}