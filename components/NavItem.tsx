import Link from "next/link";
interface INavProps {
  route: string;
  activeItem: string;
  name: string;
  setActiveItem: (name: string) => void;
}
const NavItem: React.FC<INavProps> = ({
  route,
  activeItem,
  name,
  setActiveItem,
}) => {
  return (
    <Link href={route}>
      <a>
        <div
          onClick={() => setActiveItem(name)}
          className="text-xl font-bold hover:border-b-4 hover:text-cblue dark:hover:text-clight"
        >
          {name}
        </div>
      </a>
    </Link>
  );
};
export default NavItem;
