const SPACE_PIXELS_VALUE = 8;

// FUNCION QUE NOS PERMITE MARCAR EL ESPACIADO DE NUESTRA APP
export const spacing = (spaceH, spaceW) =>         //----------- spaceHeight y spaceWidth
  spaceW !== null && spaceW !== undefined          //!--------------------------- ? 
    ? `${spaceH * SPACE_PIXELS_VALUE}px ${spaceW * SPACE_PIXELS_VALUE}px`
    : `${spaceH * SPACE_PIXELS_VALUE}px`;

// FUNCION QUE COMPRUEBA SI ES OBJETO PLANO
const isPlainObject = (item) => {
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
};

// FUNCION QUE DEFINE EL TEMA DE LA APP --> DADO POR EMOTION
export function createTheme(baseTheme, theme) {
  const output = { ...baseTheme };
  if (isPlainObject(baseTheme) && isPlainObject(theme)) {
    Object.keys(theme).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (
        isPlainObject(theme[key]) &&
        key in baseTheme &&
        isPlainObject(baseTheme[key])
      ) {
        [key] = createTheme(baseTheme[key], theme[key]);
      } else {
        [key] = theme[key];
      }
    });
  }
  return output;
}
