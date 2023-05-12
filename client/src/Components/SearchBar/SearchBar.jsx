//import s from './SearchBar.module.css'
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { getByNombre } from "../../Redux/Actions/actions";


function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();


const hanldeInputChange = (e) => {
  e.preventDefault();
  setName(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (name.trim()) {
    // verifica si el valor del campo de entrada no está vacío
    //console.log(name);
    dispatch(getByNombre(name));
    setName(""); // limpia el valor del campo de entrada después de enviar la acción
  } else {
    alert("Busca un nombre valido");
  }
};

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <input
            type="text"
            name="input-text"
            id="input-text"
            required
            spellCheck="false"
            onChange={(e) => {
              hanldeInputChange(e);
            }}
          />
          <span>Search</span>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;