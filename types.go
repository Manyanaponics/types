package types

// ************************************************************************
// ***** BASIC *****
// ************************************************************************

// synonym / english / dutch / spanish / italian

type OtherNames struct {
	Lang string   `json:"Lang"`
	Name []string `json:"Name"`
}

type Recipes struct {
	Name        string `json:"Name"`
	Description string `json:"Description"`
}

type Taxonomy struct {
	Kingdom string `json:"Kingdom"`
	Phylum  string `json:"Phylum"`
	Class   string `json:"Class"`
	Order   string `json:"Order"`
	Family  string `json:"Family"`
	Genus   string `json:"Genus"`
	Species string `json:"Species"`
}

type Season int64

const (
	Summer Season = iota
	Autumn
	Winter
	Spring
)

type CropPlantType int64

const (
	Tree   CropPlantType = 0
	Vines  CropPlantType = 1 // tomatoes / cucumbers
	Shrubs CropPlantType = 2 // berries
	Spices CropPlantType = 3 // bark / pods
	Herbs  CropPlantType = 4 // leaves / stem
	Plant  CropPlantType = 5 // aubergine
)

type CropSource int64

// wikipedia
const (
	Culinary_fruits           CropSource = 0
	Culinary_herbs_and_spices CropSource = 1
	Culinary_nuts             CropSource = 2
	Edible_cacti              CropSource = 3
	Edible_flowers            CropSource = 4
	Edible_seeds              CropSource = 5
	Forageable_plants         CropSource = 6
	Leaf_vegetables           CropSource = 7
	Root_vegetables           CropSource = 8
	Vegetables                CropSource = 9
)

// belongs in SubCategory when more are documented
type CulinaryFruit int64

const (
	Pomes             CulinaryFruit = 1
	Drupes            CulinaryFruit = 2
	Botanical_berries CulinaryFruit = 3
	Pepos             CulinaryFruit = 4
	Hesperidiums      CulinaryFruit = 5
	Aggregate_fruits  CulinaryFruit = 6
	Multiple_fruits   CulinaryFruit = 7
	Capsules          CulinaryFruit = 8
	Legumes           CulinaryFruit = 9
	Follicles         CulinaryFruit = 10
)

type SubCategory struct {
	Name        string `json:"Name"`
	Description string `json:"Description"`
}

type Lifespan int64

const (
	Annual Lifespan = iota
	Biennial
	Perennial
)

type BasicInfo struct {
	Name           string        `json:"Name"`
	ScientificName string        `json:"ScientificName"`
	Description    string        `json:"Description"`
	Category       string        `json:"Category"` // fruit / vegetables / herb
	SubCategory    SubCategory   `json:"SubCategory"`
	Uses           []string      `json:"Uses"`
	Notes          []string      `json:"Notes"`      // Array<{name: string ; description: string }>
	Popularity     int64         `json:"Popularity"` // score out of 100; refers to host country
	Varieties      []string      `json:"Varieties"`  // eg for onions, show 'red onion, spring onion, green onion, brown onion etc'
	OtherNames     []OtherNames  `json:"OtherNames"`
	Lifespan       Lifespan      `json:"Lifespan"`
	Taxonomy       Taxonomy      `json:"Taxonomy"`
	Recipes        []Recipes     `json:"Recipes"`
	CropPlantType  CropPlantType `json:"CropPlantType"`
	CropSource     CropSource    `json:"CropSource"`
}

// ************************************************************************
// ***** PLANTING *****
// ************************************************************************

type GrowMedium struct {
	CocoCoir            bool `json:"CocoCoir"`
	ExpandedClayPellets bool `json:"ExpandedClayPellets"`
	Pebbles             bool `json:"Pebbles"`
	Gravel              bool `json:"Gravel"`
	HempFiber           bool `json:"HempFiber"`
	Perlite             bool `json:"Perlite"`
	PhenolicFoam        bool `json:"PhenolicFoam"`
	Rockwool            bool `json:"Rockwool"`
	Sand                bool `json:"Sand"`
}

type HydroponicType struct {
	WickSystems                bool `json:"WickSystems"`
	DeepWaterCulture           bool `json:"DeepWaterCulture"`
	NutrientFilmTechnique      bool `json:"NutrientFilmTechnique"`
	EbbAndFlow                 bool `json:"EbbAndFlow"`
	AeroponicsTowerPressurized bool `json:"AeroponicsTowerPressurized"`
	AeroponicsTowerTrickle     bool `json:"AeroponicsTowerTrickle"`
	AeroponicsTub              bool `json:"AeroponicsTub"`
	DripSystems                bool `json:"DripSystems"`
}

type Planting struct {
	SpacingOptimumCM int64          `json:"SpacingOptimumCM"`
	NetPotSizeCM     int64          `json:"NetPotSizeCM"`
	DaysGerminating  int64          `json:"DaysGerminating"`
	Notes            []string       `json:"DaysToHarvestEarliestNonHydro"`
	HydroponicType   HydroponicType `json:"HydroponicType"`
	GrowingMedium    GrowMedium     `json:"GrowingMedium"`
}

// ************************************************************************
// ***** HARVESTING *****
// ************************************************************************

type HarvestableParts int64

const (
	Leaf = iota
	Flower
	Stalk
	Root
	Bulb
)

type Harvesting struct {
	DaysToHarvestEarliestNonHydro int64              `json:"DaysToHarvestEarliestNonHydro"`
	DaysToHarvestEarliestHydro    int64              `json:"DaysToHarvestEarliestHydro"`
	DaysToHarvestNonHydro         int64              `json:"DaysToHarvestNonHydro"`
	DaysToHarvestHydro            int64              `json:"DaysToHarvestHydro"`
	HarvestCostNonHydro           int64              `json:"HarvestCostNonHydro"`
	HarvestCostHydro              int64              `json:"HarvestCostHydro"`
	AverageCropPriceRetail        int64              `json:"AverageCropPriceRetail"`
	AverageCropPriceWholesale     int64              `json:"AverageCropPriceWholesale"`
	Notes                         []string           `json:"Notes"`
	HarvestableParts              []HarvestableParts `json:"HarvestableParts"`
}

// ************************************************************************
// ***** DIMENSIONS *****
// ************************************************************************

// all values are average
type Dimensions struct {
	HarvestWeightNonHydro   int64    `json:"HarvestWeightNonHydro"`
	HarvestWeightHydro      int64    `json:"HarvestWeightHydro"`
	SquareMetersPerUnit     int64    `json:"SquareMetersPerUnit"`
	WaterTemperatureAtRoots int64    `json:"WaterTemperatureAtRoots"`
	Height                  int64    `json:"Height"`
	MaximumWidth            int64    `json:"MaximumWidth"`
	Notes                   []string `json:"Notes"`
}

// ************************************************************************
// ***** ENVIRONMENT *****
// ************************************************************************

type Environment struct {
	GrowthZones           string   `json:"GrowthZones"` // 1-12
	TempMin               float64  `json:"TempMin"`
	TempMax               float64  `json:"TempMax"`
	TempOptimum           float64  `json:"TempOptimum"`
	RootTempMin           float64  `json:"RootTempMin"` // For most case this will default to temp_optimum, but roots can be sensitive
	RootTempMax           float64  `json:"RootTempMax"`
	RootTempOptimum       float64  `json:"RootTempOptimum"`
	OxygenMin             float64  `json:"OxygenMin"`
	OxygenOptimum         float64  `json:"OxygenOptimum"`
	Co2Min                float64  `json:"Co2Min"`
	Co2Optimum            float64  `json:"Co2Optimum"`
	HumidityMin           float64  `json:"HumidityMin"`
	HumidityMax           float64  `json:"HumidityMax"`
	PHMin                 float64  `json:"PHMin"`
	PHMax                 float64  `json:"PHMax"`
	ECMin                 float64  `json:"ECMin"`
	ECMax                 float64  `json:"ECMax"`
	PHOptimum             float64  `json:"PHOptimum"`
	LightHoursMin         int64    `json:"LightHoursMin"`
	LightHoursMax         int64    `json:"LightHoursMax"`
	LightHoursOptimum     int64    `json:"LightHoursOptimum"`
	LightSpectrumNmMin    int64    `json:"LightSpectrumNmMin"`
	LightSpectrumNmMax    int64    `json:"LightSpectrumNmMax"`
	LightSpectrumNeedsPar bool     `json:"LightSpectrumNeedsPar"`
	LightSpectrumOther    string   `json:"LightSpectrumOther"` // eg UV(B) light can enhance production of certain oils
	Notes                 []string `json:"Notes"`
}

type CropMaster struct {
	BasicInfo   BasicInfo   `json:"BasicInfo"`
	Planting    Planting    `json:"Planting"`
	Harvesting  Harvesting  `json:"Harvesting"`
	Dimensions  Dimensions  `json:"Dimensions"`
	Environment Environment `json:"Environment"`
}
