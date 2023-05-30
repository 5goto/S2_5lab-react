import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export function Dropdown({ allWords }) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle>Сохраненные фразы</MDBDropdownToggle>
      <MDBDropdownMenu>
        {allWords.map((word, i) => {
          return (
            <MDBDropdownItem link key={i}>
              {word}
            </MDBDropdownItem>
          );
        })}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
