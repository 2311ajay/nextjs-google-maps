import { Dropdown } from "@nextui-org/react";

export default function CountryDropDown({countryList, setCountry, currentCountry }) {
    // console.log(countryList);

    const countryKeys = Object.keys(countryList);
    // const countryValues = Object.values(countryList);
    // console.log("keys=", countryKeys);
    // console.log("values=", countryValues);

    const menuItems = countryKeys.map((key) => {
        return {key, name: countryList[key]?.country }
    })


    const examplemenuItems = [
        { key: "new", name: "New File" },
        { key: "copy", name: "Copy Link" },
        { key: "edit", name: "Edit File" },
        { key: "delete", name: "Delete File" },
      ];


    return (
        <Dropdown >
          <Dropdown.Button flat>{countryList[currentCountry]?.country}</Dropdown.Button>
          <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}  onAction={(key) => {setCountry(key)}}>
            {(item) => (
              <Dropdown.Item
                key={item.key}
                color={item.key === "delete" ? "error" : "default"}
              >
                {item.name}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      );
}