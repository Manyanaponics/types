package types

import "github.com/gofrs/uuid"

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

type CulinaryFruit int64

// Pomes - any crunchy accessory fruit that surrounds the fruit's inedible "core" (composed of the plant's endocarp) and typically has its seeds arranged in a star-like pattern
// // apples / pears
// Drupes - any fruit that has only one seed (or "stone") or one hard capsule containing seeds.
// // cherry / coconut / mango
// Botanical_berries - any fruit that has a relatively thin exterior, with mostly flesh and more than one seed inside
// // blueberry / cranberry / red currant
// Pepos - any fruit that is covered by a hard, thick rind with soft flesh inside, and seeds filling each locule. Melons are good examples of this.
// // melons
// Hesperidiums - Also known as citruses, they possess thick and leathery rinds. These fruits are generally sour and acidic to some extent and have a wagon wheel-like cross section
// // lemons / limes / oranges
// Aggregate_fruits - a cluster of many fruits produced from a single flower
// // raspberry / blackberry
// Multiple fruits - a cluster of many fruits produced from multiple flowers
// // fig / pineapple / jackfruit
// Capsules - a pod fruit with multiple carpels
// // a pod fruit with one carpel
// Legumes - a pod fruit with one carpel
// // Ice-cream bean
// Folicies - a single ovary that splits along a single seam
// // Dead man's fingers

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

type Crop struct {
	Id              uuid.UUID     `json:"id"`
	Name            string        `json:"name"`
	Scientific_name string        `json:"scientific_name"`
	Taxonomy        Taxonomy      `json:"taxonomy"`
	Crop_type       CropPlantType `json:"crop_type"`
	Slug            string        `json:"slug"`
	Slug_alt        string        `json:"slug_alt"`
	Ph_min          float32       `json:"ph_min"`
	Ph_max          float32       `json:"ph_max"`
	Temp_min        float32       `json:"temp_min"`
	Temp_max        float32       `json:"temp_max"`
	Salinity_min    float32       `json:"salinity_min"`
	Salinity_max    float32       `json:"salinity_max"`
	Height_min      float32       `json:"height_min"`
	Height_max      float32       `json:"height_max"`
	Summary         string        `json:"summary"`
	Uses            []string      `json:"uses"`
}

type Taxonomy struct {
	Genus  string
	Family string
}
