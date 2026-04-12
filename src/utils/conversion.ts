export type ConversionMode = "Length" | "Weight" | "Area" | "Volume";

export const lengthUnits = {
  meters: 1,
  kilometers: 1000,
  centimeters: 0.01,
  miles: 1609.34,
  feet: 0.3048,
  inches: 0.0254,
};

export const weightUnits = {
  kilograms: 1,
  grams: 0.001,
  milligrams: 0.000001,
  tonnes: 1000,
  pounds: 0.453592,
  ounces: 0.0283495,
  stones: 6.35029,
};

export const areaUnits = {
  "sq meters": 1,
  "sq kilometers": 1000000,
  acres: 4046.86,
  hectares: 10000,
  "sq miles": 2589988.11,
};

export const volumeUnits = {
  liters: 1,
  milliliters: 0.001,
  gallons: 3.78541,
  cups: 0.236588,
  "cubic meters": 1000,
};
// 3. The Master Object that links Modes to their specific Units
export const allUnits: Record<ConversionMode, Record<string, number>> = {
  Length: lengthUnits,
  Weight: weightUnits,
  Area: areaUnits,
  Volume: volumeUnits,
};

export const convertTemperature = (
  value: number,
  from: "C" | "F" | "K",
  to: "C" | "F" | "K",
): number => {
  if (isNaN(value)) return 0;

  // 1. Convert everything to Celsius first
  let celsius = value;
  if (from === "F") celsius = ((value - 32) * 5) / 9;
  if (from === "K") celsius = value - 273.15;

  // 2. Convert Celsius to target
  if (to === "F") return (celsius * 9) / 5 + 32;
  if (to === "K") return celsius + 273.15;
  return celsius;
};

export type LengthUnit = keyof typeof lengthUnits;

export const convertLength = (
  value: number,
  from: LengthUnit,
  to: LengthUnit,
): number => {
  if (isNaN(value)) return 0;
  // Convert input to Meters, then Meters to target
  const valueInMeters = value * lengthUnits[from];
  return valueInMeters / lengthUnits[to];
};
export type WeightUnit =
  | "kilograms"
  | "grams"
  | "milligrams"
  | "tonnes"
  | "pounds"
  | "ounces"
  | "stones";

export const convertWeight = (
  value: number,
  from: WeightUnit,
  to: WeightUnit,
): number => {
  if (!value || isNaN(value)) return 0;
  // Convert input to base (kg) then to target unit
  const inKilograms = value / weightUnits[from];
  return inKilograms * weightUnits[to];
};
