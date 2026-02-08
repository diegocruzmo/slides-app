import { UsersListProps } from "./UserLIst.type";

export function UsersList({ users }: UsersListProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
            <tr key={user.id}>
              <td>{user.emailAddresses[0]?.emailAddress}</td>
              <td>{user.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
