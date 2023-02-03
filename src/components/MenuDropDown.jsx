import { Menu } from "@headlessui/react";

const MenuDropDown = () => {
  return (
    <Menu>
      <Menu.Button>Kennedy Wee</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Logout
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default MenuDropDown;
