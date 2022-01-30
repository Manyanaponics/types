package types

// ************************************************************************
// ***** BASIC *****
// ************************************************************************

// synonym / english / dutch / spanish / italian

type OtherNames struct {
	Lang string
	Name string
}

type Recipes struct {
	Name        string
	Description string
}

type Taxonomy struct {
	Kingdom string
	Phylum  string
	Class   string
	Order   string
	Family  string
	Genus   string
	Species string
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

type BasicInfo struct {
	Name           string
	ScientificName string
	Description    string
	Category       string   // fruit / vegetables / herb
	SubCategory    string   // leafy_and_salad_vegetables / pomes
	Notes          string   // Array<{name: string; description: string}>
	Popularity     int64    // score out of 100; refers to host country
	Varieties      []string // eg for onions, show 'red onion, spring onion, green onion, brown onion etc'
	OtherNames     []OtherNames
	Lifespan       Season
	Taxonomy       Taxonomy
	Recipes        Recipes
	CropPlantType  CropPlantType
	CropSource     CropSource
}

// ************************************************************************
// ***** PLANTING *****
// ************************************************************************

type GrowMedium struct {
	CocoCoir            bool
	ExpandedClayPellets bool
	Pebbles             bool
	Gravel              bool
	HempFiber           bool
	Perlite             bool
	PhenolicFoam        bool
	Rockwool            bool
	Sand                bool
}

type HydroponicType struct {
	WickSystems                bool
	DeepWaterCulture           bool
	NutrientFilmTechnique      bool
	EbbAndFlow                 bool
	AeroponicsTowerPressurized bool
	AeroponicsTowerTrickle     bool
	AeroponicsTub              bool
	DripSystems                bool
}

type Planting struct {
	SpacingOptimumCM int64
	NetPotSizeCM     int64
	DaysGerminating  int64
	Notes            []string
	HydroponicType   HydroponicType
	GrowingMedium    GrowMedium
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
	DaysToHarvestEarliestNonHydro int64
	DaysToHarvestEarliestHydro    int64
	DaysToHarvestNonHydro         int64
	DaysToHarvestHydro            int64
	HarvestCostNonHydro           int64
	HarvestCostHydro              int64
	AverageCropPriceRetail        int64
	AverageCropPriceWholesale     int64
	Notes                         []string
	HarvestableParts              []HarvestableParts
}

// ************************************************************************
// ***** DIMENSIONS *****
// ************************************************************************

// all values are average
type Dimensions struct {
	HarvestWeightNonHydro   int64
	HarvestWeightHydro      int64
	SquareMetersPerUnit     int64
	WaterTemperatureAtRoots int64
	Height                  int64
	MaximumWidth            int64
	Notes                   []string
}

// ************************************************************************
// ***** ENVIRONMENT *****
// ************************************************************************

type Environment struct {
	GrowthZones           int64 // 1-12
	TempMin               float64
	TempMax               float64
	TempOptimum           float64
	RootTempMin           float64 // For most case this will default to temp_optimum, but roots can be sensitive
	RootTempMax           float64
	RootTempOptimum       float64
	OxygenMin             float64
	OxygenOptimum         float64
	Co2Min                float64
	Co2Optimum            float64
	HumidityMin           float64
	HumidityMax           float64
	PHMin                 float64
	PHMax                 float64
	PHOptimum             float64
	LightHoursMin         int64
	LightHoursMax         int64
	LightHoursOptimum     int64
	LightSpectrumNmMin    int64
	LightSpectrumNmMax    int64
	LightSpectrumNeedsPar bool
	LightSpectrumOther    string // eg UV(B) light can enhance production of certain oils
	Notes                 []string
}

type CropMaster struct {
	BasicInfo   BasicInfo
	Planting    Planting
	Harvesting  Harvesting
	Dimensions  Dimensions
	Environment Environment
}
