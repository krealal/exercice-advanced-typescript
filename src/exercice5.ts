// Dado este código:

// interface User {
//   username: string;
//   password: string;
// }

// interface Admin extends User {
//   permissions: ("post" | "delete" | "ban")[];
//   level: number;
//   departament: string;
// }

// Crea una función checkUserPermissions(user, permission) que devuelva true o false dependiendo de si el usuario 
// recibido en el primer parámetro tiene el permiso recibido en el segundo parámetro.

// checkUserPermissions(user, permission);

interface User {
  username: string;
  password: string;
}

interface Admin extends User {
  permissions: Permission[];
  level: number;
  departament: string;
}

type Permission = "post" | "delete" | "ban"

function checkUserPermissions (user: Admin, permission: Permission): boolean {
    if(user.permissions.includes(permission)) {
        return true
    }

    return false
}

const luis: Admin = {
    username: "luis",
    password: "luis1234",
    permissions: ["delete"],
    level: 4,
    departament: "cosas"
}

checkUserPermissions(luis, 'delete');