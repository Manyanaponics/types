"use strict";
/* Do not change, this code is generated from Golang structs */
exports.__esModule = true;
exports.CropMaster = exports.BasicInfo = exports.SubCategory = exports.OtherNames = exports.Taxonomy = exports.Recipes = exports.Planting = exports.HydroponicType = exports.GrowMedium = exports.Harvesting = exports.Dimensions = exports.Environment = void 0;
var Environment = /** @class */ (function () {
    function Environment(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
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
    return Environment;
}());
exports.Environment = Environment;
var Dimensions = /** @class */ (function () {
    function Dimensions(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.HarvestWeightNonHydro = source["HarvestWeightNonHydro"];
        this.HarvestWeightHydro = source["HarvestWeightHydro"];
        this.SquareMetersPerUnit = source["SquareMetersPerUnit"];
        this.WaterTemperatureAtRoots = source["WaterTemperatureAtRoots"];
        this.Height = source["Height"];
        this.MaximumWidth = source["MaximumWidth"];
        this.Notes = source["Notes"];
    }
    return Dimensions;
}());
exports.Dimensions = Dimensions;
var Harvesting = /** @class */ (function () {
    function Harvesting(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
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
    return Harvesting;
}());
exports.Harvesting = Harvesting;
var GrowMedium = /** @class */ (function () {
    function GrowMedium(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
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
    return GrowMedium;
}());
exports.GrowMedium = GrowMedium;
var HydroponicType = /** @class */ (function () {
    function HydroponicType(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.WickSystems = source["WickSystems"];
        this.DeepWaterCulture = source["DeepWaterCulture"];
        this.NutrientFilmTechnique = source["NutrientFilmTechnique"];
        this.EbbAndFlow = source["EbbAndFlow"];
        this.AeroponicsTowerPressurized = source["AeroponicsTowerPressurized"];
        this.AeroponicsTowerTrickle = source["AeroponicsTowerTrickle"];
        this.AeroponicsTub = source["AeroponicsTub"];
        this.DripSystems = source["DripSystems"];
    }
    return HydroponicType;
}());
exports.HydroponicType = HydroponicType;
var Planting = /** @class */ (function () {
    function Planting(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.SpacingOptimumCM = source["SpacingOptimumCM"];
        this.NetPotSizeCM = source["NetPotSizeCM"];
        this.DaysGerminating = source["DaysGerminating"];
        this.DaysToHarvestEarliestNonHydro =
            source["DaysToHarvestEarliestNonHydro"];
        this.HydroponicType = this.convertValues(source["HydroponicType"], HydroponicType);
        this.GrowingMedium = this.convertValues(source["GrowingMedium"], GrowMedium);
    }
    Planting.prototype.convertValues = function (a, classs, asMap) {
        var _this = this;
        if (asMap === void 0) { asMap = false; }
        if (!a) {
            return a;
        }
        if (a.slice) {
            return a.map(function (elem) { return _this.convertValues(elem, classs); });
        }
        else if ("object" === typeof a) {
            if (asMap) {
                for (var _i = 0, _a = Object.keys(a); _i < _a.length; _i++) {
                    var key = _a[_i];
                    a[key] = new classs(a[key]);
                }
                return a;
            }
            return new classs(a);
        }
        return a;
    };
    return Planting;
}());
exports.Planting = Planting;
var Recipes = /** @class */ (function () {
    function Recipes(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.Name = source["Name"];
        this.Description = source["Description"];
    }
    return Recipes;
}());
exports.Recipes = Recipes;
var Taxonomy = /** @class */ (function () {
    function Taxonomy(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.Kingdom = source["Kingdom"];
        this.Phylum = source["Phylum"];
        this.Class = source["Class"];
        this.Order = source["Order"];
        this.Family = source["Family"];
        this.Genus = source["Genus"];
        this.Species = source["Species"];
    }
    return Taxonomy;
}());
exports.Taxonomy = Taxonomy;
var OtherNames = /** @class */ (function () {
    function OtherNames(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.Lang = source["Lang"];
        this.Name = source["Name"];
    }
    return OtherNames;
}());
exports.OtherNames = OtherNames;
var SubCategory = /** @class */ (function () {
    function SubCategory(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.Name = source["Name"];
        this.Description = source["Description"];
    }
    return SubCategory;
}());
exports.SubCategory = SubCategory;
var BasicInfo = /** @class */ (function () {
    function BasicInfo(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
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
    BasicInfo.prototype.convertValues = function (a, classs, asMap) {
        var _this = this;
        if (asMap === void 0) { asMap = false; }
        if (!a) {
            return a;
        }
        if (a.slice) {
            return a.map(function (elem) { return _this.convertValues(elem, classs); });
        }
        else if ("object" === typeof a) {
            if (asMap) {
                for (var _i = 0, _a = Object.keys(a); _i < _a.length; _i++) {
                    var key = _a[_i];
                    a[key] = new classs(a[key]);
                }
                return a;
            }
            return new classs(a);
        }
        return a;
    };
    return BasicInfo;
}());
exports.BasicInfo = BasicInfo;
var CropMaster = /** @class */ (function () {
    function CropMaster(source) {
        if (source === void 0) { source = {}; }
        if ("string" === typeof source)
            source = JSON.parse(source);
        this.BasicInfo = this.convertValues(source["BasicInfo"], BasicInfo);
        this.Planting = this.convertValues(source["Planting"], Planting);
        this.Harvesting = this.convertValues(source["Harvesting"], Harvesting);
        this.Dimensions = this.convertValues(source["Dimensions"], Dimensions);
        this.Environment = this.convertValues(source["Environment"], Environment);
    }
    CropMaster.prototype.convertValues = function (a, classs, asMap) {
        var _this = this;
        if (asMap === void 0) { asMap = false; }
        if (!a) {
            return a;
        }
        if (a.slice) {
            return a.map(function (elem) { return _this.convertValues(elem, classs); });
        }
        else if ("object" === typeof a) {
            if (asMap) {
                for (var _i = 0, _a = Object.keys(a); _i < _a.length; _i++) {
                    var key = _a[_i];
                    a[key] = new classs(a[key]);
                }
                return a;
            }
            return new classs(a);
        }
        return a;
    };
    return CropMaster;
}());
exports.CropMaster = CropMaster;
var crop = new CropMaster();
console.log(crop);
