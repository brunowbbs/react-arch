export function UserList() {
  let a = 10;

  if (a > 5) {
    throw new Error("Erro de comunicação com o servidor. Tente mais tarde");
  } else {
    return (
      <ul>
        <li>Wesley</li>
        <li>Bruno</li>
      </ul>
    );
  }
}
