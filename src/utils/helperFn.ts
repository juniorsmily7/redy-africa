import CryptoJS from 'crypto-js';
import moment from 'moment';
import { SyntheticEvent } from 'react';
export async function transformFormDataToObject(formData: FormData) {
  return Object.fromEntries(formData);
}

function beforeUpload(file: File) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    // toast.error('You can only upload JPG/PNG file!');
    return;
  }
  //   the size should not be more than 2M
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    // toast.error('Image must smaller than 2MB!');
    return;
  }
  return true;
}
function getBase64(img: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener('load', function callback() {
      resolve(reader.result as string);
    });
  });
}
export async function handleFileChange({
  e,
}: {
  e: SyntheticEvent<HTMLInputElement>;
}) {
  const { currentTarget } = e;
  if (!currentTarget.files) {
    // toast.dark('an error occurred');
    return;
  }
  const file = currentTarget.files[0];
  if (beforeUpload(currentTarget.files[0])) {
    return {
      imgUrl: await getBase64(file),
      name: file.name,
      file: currentTarget.files[0],
    };
  }
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function hashed(value: string, key: string) {
  return CryptoJS.AES.encrypt(value, key).toString();
}

export function compareHash(hashedToken: string, key: string) {
  const bytes = CryptoJS.AES.decrypt(hashedToken, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function dataFormat(date: string, formatter?: string) {
  return moment(date).format(formatter ?? 'MM/DD/YYYY');
}

export function amountFormat(amount: number) {
  return amount?.toLocaleString();
}

// export function getUserPermission(userRole: TUserRole) {
//     const permissions = new Set();
//     for (const key in userRole?.permissions) {
//         const value = userRole?.permissions[key as keyof TPermission];
//         if (value == "on") {
//             permissions.add(key);
//         }
//     }
//     permissions.add(userRole.can_role);

//     return permissions;
// }

export function addStartToString(word: string, startLength = 3): string {
  return (
    word.substring(0, startLength) +
    '*****' +
    word.substring(word.length - 2, word.length)
  );
}
