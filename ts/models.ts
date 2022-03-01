/* Do not change, this code is generated from Golang structs */

export class Environment {
  GrowthZones: string;
  TempMin: number;
  TempMax: number;
  TempOptimum: number;
  RootTempMin: number;
  RootTempMax: number;
  RootTempOptimum: number;
  OxygenMin: number;
  OxygenOptimum: number;
  Co2Min: number;
  Co2Optimum: number;
  HumidityMin: number;
  HumidityMax: number;
  PHMin: number;
  PHMax: number;
  ECMin: number;
  ECMax: number;
  PHOptimum: number;
  LightHoursMin: number;
  LightHoursMax: number;
  LightHoursOptimum: number;
  LightSpectrumNmMin: number;
  LightSpectrumNmMax: number;
  LightSpectrumNeedsPar: boolean;
  LightSpectrumOther: string;
  Notes: string[];

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.GrowthZones = source["GrowthZones"];
    this.TempMin = source["TempMin"];
    this.TempMax = source["TempMax"];
    this.TempOptimum = source["TempOptimum"];
    this.RootTempMin = source["RootTempMin"];
    this.RootTempMax = source["RootTempMax"];
    this.RootTempOptimum = source["RootTempOptimum"];
    this.OxygenMin = source["OxygenMin"];
    this.OxygenOptimum = source["OxygenOptimum"];
    this.Co2Min = source["Co2Min"];
    this.Co2Optimum = source["Co2Optimum"];
    this.HumidityMin = source["HumidityMin"];
    this.HumidityMax = source["HumidityMax"];
    this.PHMin = source["PHMin"];
    this.PHMax = source["PHMax"];
    this.ECMin = source["ECMin"];
    this.ECMax = source["ECMax"];
    this.PHOptimum = source["PHOptimum"];
    this.LightHoursMin = source["LightHoursMin"];
    this.LightHoursMax = source["LightHoursMax"];
    this.LightHoursOptimum = source["LightHoursOptimum"];
    this.LightSpectrumNmMin = source["LightSpectrumNmMin"];
    this.LightSpectrumNmMax = source["LightSpectrumNmMax"];
    this.LightSpectrumNeedsPar = source["LightSpectrumNeedsPar"];
    this.LightSpectrumOther = source["LightSpectrumOther"];
    this.Notes = source["Notes"];
  }
}
export class Dimensions {
  HarvestWeightNonHydro: number;
  HarvestWeightHydro: number;
  SquareMetersPerUnit: number;
  WaterTemperatureAtRoots: number;
  Height: number;
  MaximumWidth: number;
  Notes: string[];

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.HarvestWeightNonHydro = source["HarvestWeightNonHydro"];
    this.HarvestWeightHydro = source["HarvestWeightHydro"];
    this.SquareMetersPerUnit = source["SquareMetersPerUnit"];
    this.WaterTemperatureAtRoots = source["WaterTemperatureAtRoots"];
    this.Height = source["Height"];
    this.MaximumWidth = source["MaximumWidth"];
    this.Notes = source["Notes"];
  }
}
export class Harvesting {
  DaysToHarvestEarliestNonHydro: number;
  DaysToHarvestEarliestHydro: number;
  DaysToHarvestNonHydro: number;
  DaysToHarvestHydro: number;
  HarvestCostNonHydro: number;
  HarvestCostHydro: number;
  AverageCropPriceRetail: number;
  AverageCropPriceWholesale: number;
  Notes: string[];
  HarvestableParts: number[];

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.DaysToHarvestEarliestNonHydro =
      source["DaysToHarvestEarliestNonHydro"];
    this.DaysToHarvestEarliestHydro = source["DaysToHarvestEarliestHydro"];
    this.DaysToHarvestNonHydro = source["DaysToHarvestNonHydro"];
    this.DaysToHarvestHydro = source["DaysToHarvestHydro"];
    this.HarvestCostNonHydro = source["HarvestCostNonHydro"];
    this.HarvestCostHydro = source["HarvestCostHydro"];
    this.AverageCropPriceRetail = source["AverageCropPriceRetail"];
    this.AverageCropPriceWholesale = source["AverageCropPriceWholesale"];
    this.Notes = source["Notes"];
    this.HarvestableParts = source["HarvestableParts"];
  }
}
export class GrowMedium {
  CocoCoir: boolean;
  ExpandedClayPellets: boolean;
  Pebbles: boolean;
  Gravel: boolean;
  HempFiber: boolean;
  Perlite: boolean;
  PhenolicFoam: boolean;
  Rockwool: boolean;
  Sand: boolean;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.CocoCoir = source["CocoCoir"];
    this.ExpandedClayPellets = source["ExpandedClayPellets"];
    this.Pebbles = source["Pebbles"];
    this.Gravel = source["Gravel"];
    this.HempFiber = source["HempFiber"];
    this.Perlite = source["Perlite"];
    this.PhenolicFoam = source["PhenolicFoam"];
    this.Rockwool = source["Rockwool"];
    this.Sand = source["Sand"];
  }
}
export class HydroponicType {
  WickSystems: boolean;
  DeepWaterCulture: boolean;
  NutrientFilmTechnique: boolean;
  EbbAndFlow: boolean;
  AeroponicsTowerPressurized: boolean;
  AeroponicsTowerTrickle: boolean;
  AeroponicsTub: boolean;
  DripSystems: boolean;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.WickSystems = source["WickSystems"];
    this.DeepWaterCulture = source["DeepWaterCulture"];
    this.NutrientFilmTechnique = source["NutrientFilmTechnique"];
    this.EbbAndFlow = source["EbbAndFlow"];
    this.AeroponicsTowerPressurized = source["AeroponicsTowerPressurized"];
    this.AeroponicsTowerTrickle = source["AeroponicsTowerTrickle"];
    this.AeroponicsTub = source["AeroponicsTub"];
    this.DripSystems = source["DripSystems"];
  }
}
export class Planting {
  SpacingOptimumCM: number;
  NetPotSizeCM: number;
  DaysGerminating: number;
  DaysToHarvestEarliestNonHydro: string[];
  HydroponicType: HydroponicType;
  GrowingMedium: GrowMedium;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.SpacingOptimumCM = source["SpacingOptimumCM"];
    this.NetPotSizeCM = source["NetPotSizeCM"];
    this.DaysGerminating = source["DaysGerminating"];
    this.DaysToHarvestEarliestNonHydro =
      source["DaysToHarvestEarliestNonHydro"];
    this.HydroponicType = this.convertValues(
      source["HydroponicType"],
      HydroponicType
    );
    this.GrowingMedium = this.convertValues(
      source["GrowingMedium"],
      GrowMedium
    );
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
    if (!a) {
      return a;
    }
    if (a.slice) {
      return (a as any[]).map((elem) => this.convertValues(elem, classs));
    } else if ("object" === typeof a) {
      if (asMap) {
        for (const key of Object.keys(a)) {
          a[key] = new classs(a[key]);
        }
        return a;
      }
      return new classs(a);
    }
    return a;
  }
}
export class Recipes {
  Name: string;
  Description: string;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.Name = source["Name"];
    this.Description = source["Description"];
  }
}
export class Taxonomy {
  Kingdom: string;
  Phylum: string;
  Class: string;
  Order: string;
  Family: string;
  Genus: string;
  Species: string;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.Kingdom = source["Kingdom"];
    this.Phylum = source["Phylum"];
    this.Class = source["Class"];
    this.Order = source["Order"];
    this.Family = source["Family"];
    this.Genus = source["Genus"];
    this.Species = source["Species"];
  }
}
export class OtherNames {
  Lang: string;
  Name: string[];

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.Lang = source["Lang"];
    this.Name = source["Name"];
  }
}
export class SubCategory {
  Name: string;
  Description: string;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.Name = source["Name"];
    this.Description = source["Description"];
  }
}
export class BasicInfo {
  Name: string;
  ScientificName: string;
  Description: string;
  Category: string;
  SubCategory: SubCategory;
  Uses: string[];
  Notes: string[];
  Popularity: number;
  Varieties: string[];
  OtherNames: OtherNames[];
  Lifespan: number;
  Taxonomy: Taxonomy;
  Recipes: Recipes[];
  CropPlantType: number;
  CropSource: number;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.Name = source["Name"];
    this.ScientificName = source["ScientificName"];
    this.Description = source["Description"];
    this.Category = source["Category"];
    this.SubCategory = this.convertValues(source["SubCategory"], SubCategory);
    this.Uses = source["Uses"];
    this.Notes = source["Notes"];
    this.Popularity = source["Popularity"];
    this.Varieties = source["Varieties"];
    this.OtherNames = this.convertValues(source["OtherNames"], OtherNames);
    this.Lifespan = source["Lifespan"];
    this.Taxonomy = this.convertValues(source["Taxonomy"], Taxonomy);
    this.Recipes = this.convertValues(source["Recipes"], Recipes);
    this.CropPlantType = source["CropPlantType"];
    this.CropSource = source["CropSource"];
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
    if (!a) {
      return a;
    }
    if (a.slice) {
      return (a as any[]).map((elem) => this.convertValues(elem, classs));
    } else if ("object" === typeof a) {
      if (asMap) {
        for (const key of Object.keys(a)) {
          a[key] = new classs(a[key]);
        }
        return a;
      }
      return new classs(a);
    }
    return a;
  }
}
export class CropMaster {
  BasicInfo: BasicInfo;
  Planting: Planting;
  Harvesting: Harvesting;
  Dimensions: Dimensions;
  Environment: Environment;

  constructor(source: any = {}) {
    if ("string" === typeof source) source = JSON.parse(source);
    this.BasicInfo = this.convertValues(source["BasicInfo"], BasicInfo);
    this.Planting = this.convertValues(source["Planting"], Planting);
    this.Harvesting = this.convertValues(source["Harvesting"], Harvesting);
    this.Dimensions = this.convertValues(source["Dimensions"], Dimensions);
    this.Environment = this.convertValues(source["Environment"], Environment);
  }

  convertValues(a: any, classs: any, asMap: boolean = false): any {
    if (!a) {
      return a;
    }
    if (a.slice) {
      return (a as any[]).map((elem) => this.convertValues(elem, classs));
    } else if ("object" === typeof a) {
      if (asMap) {
        for (const key of Object.keys(a)) {
          a[key] = new classs(a[key]);
        }
        return a;
      }
      return new classs(a);
    }
    return a;
  }
}

const crop = new CropMaster(new BasicInfo());

console.log(crop);
