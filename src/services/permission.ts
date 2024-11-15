const permission = {
  admin: 'all',
};

interface IAppPermissions {
  checkPermissions: (
    userType: keyof UserPermissions,
    permission?: UserPermissions
  ) => void;
}

interface UserPermissions {
  admin: string;
}

export const appPermissions: IAppPermissions = {
  checkPermissions: (userType: keyof UserPermissions) => {
    return permission[userType];
  },
};
