export const UnitConverter = (unit, value) =>
  unit === 'F' ? Math.round((value * 9) / 5 + 32) : Math.round(value);
