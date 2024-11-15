export const onlyNUmberRegex = /^-?\d+(\.\d+)?$/;

export const phoneRegex = /^0[0-9]{10}$/;

export const nameRegex = /^[a-zA-Z\s]+$/;

export function mustBeLenInNumeric(len: number) {
  return new RegExp(`^\\d{${len}}$`);
}
