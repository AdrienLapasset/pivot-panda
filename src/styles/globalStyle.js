import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
p,
a,
button,
div,
q,
input,
select,
textarea { 
  margin: 0;
  padding: 0;
  /* font-family: "Söhne Buch", sans-serif; */
  list-style: none;
  font-size: 14px;
  font-weight: 400;
  display: block;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  display: block;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
}

li {
  list-style: none;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    color: ${(props) => props.theme.colors.grey};
  }
}
`;
