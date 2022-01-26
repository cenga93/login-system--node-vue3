import { Roles } from './enums';
import { Permissions } from './permissions';
export const rolePermissions = new Map();

/** -------- USER -------- */
rolePermissions.set(Roles.USER, [
     // Auth
     Permissions.user.READ,
     Permissions.user.CREATE,
]);

/** -------- ADMIN -------- */
rolePermissions.set(Roles.ADMIN, [
     // Auth
     Permissions.user.READ,
     Permissions.user.CREATE,
     Permissions.user.UPDATE,
     Permissions.user.DELETE,
]);
