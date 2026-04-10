export const lengthUnits = {
  meters: 1,
  kilometers: 1000,
  centimeters: 0.01,
  miles: 1609.34,
  feet: 0.3048,
  inches: 0.0254,
};

export const convertTemperature = 
(value: number, from: 'C' | 'F' | 'K', to: 'C' | 'F' | 'K'): number => {
  if (isNaN(value)) return 0;
  
  
  let celsius = value;
  if (from === 'F') celsius = (value - 32) * 5 / 9;
  if (from === 'K') celsius = value - 273.15;

  
  if (to === 'F') return (celsius * 9 / 5) + 32;
  if (to === 'K') return celsius + 273.15;
  return celsius;
};

export type LengthUnit = keyof typeof lengthUnits;

export const convertLength = (value: number, from: LengthUnit, to: LengthUnit): number => {
  if (isNaN(value)) return 0;
  // Convert input to Meters, then Meters to target
  const valueInMeters = value * lengthUnits[from];
  return valueInMeters / lengthUnits[to];
};
export const weightUnits = {
  kilograms: 1,
  grams: 1000,
  pounds: 2.20462,
  ounces: 35.274,
};

export type WeightUnit = keyof typeof weightUnits;

export const convertWeight = (value: number, from: WeightUnit, to: WeightUnit): number => {
  if (isNaN(value)) return 0;
  // Pivot to Kilograms
  const valueInKG = value / weightUnits[from];
  return valueInKG * weightUnits[to];
};