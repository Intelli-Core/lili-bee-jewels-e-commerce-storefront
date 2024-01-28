import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  if (value === "" || value === "featured") {
    // If the value is an empty string, remove the query parameter
    searchParams.delete(type);
  } else {
    // Otherwise, set the query parameter to the given value
    searchParams.set(type, value);
  }

  // Construct the new pathname
  let newPathname = window.location.pathname;
  if (searchParams.toString() !== "") {
    newPathname += `?${searchParams.toString()}`;
  }

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export const capitalizeEachWord = (input: string) => {
  // Check if input is numeric
  if (!isNaN(Number(input))) {
    // If input is numeric, return it as is
    return input;
  }

  // This regular expression matches either a word that starts with a letter and is followed by letters or numbers (a "word"),
  // or a sequence of non-alphanumeric characters (a "separator").
  const regex = /([a-zA-Z][a-zA-Z0-9]*|[^a-zA-Z0-9]+)/g;

  const matches = input.match(regex); // Split the input into words and separators.

  if (matches === null) {
    // If no matches are found, return the original input.
    return input;
  } else {
    return matches
      .map((token, index) => {
        // Check if the token is a word (it starts with a letter).
        if (/[a-zA-Z]/.test(token.charAt(0))) {
          // Check if the token contains only alphabets.
          if (/^[A-Za-z]+$/.test(token)) {
            // If the token is a word and contains only alphabets, capitalize the first letter and make the rest lowercase.
            return token.charAt(0).toUpperCase() + token.slice(1).toLowerCase();
          } else {
            // If the token is a word but contains non-alphabetic characters, return it as is.
            return token;
          }
        } else {
          // If the token is not a word (it's a separator), return it as is.
          return token;
        }
      })
      .join(""); // Join the words and separators back together without any additional characters.
  }
};
