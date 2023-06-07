import { string, arrayOf, shape } from "prop-types";
import { MenuList, Link } from "./styles";

export default function Menu({ items }) {
  return (
    <nav>
      <MenuList>
        {items.map(({ name, route }) => (
          <li key={route}>
            <Link to={route}>{name}</Link>
          </li>
        ))}
      </MenuList>
    </nav>
  );
}

Menu.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      route: string,
    })
  ),
};
