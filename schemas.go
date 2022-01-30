package types

import (
	"time"

	"github.com/gofrs/uuid"
)

type Crop struct {
	Id              uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4()`
	Name            string
	Scientific_name string
	Slug            string
	Slug_alt        string
	Ph_min          float32
	Ph_max          float32
	Temp_min        float32
	Temp_max        float32
	Salinity_min    float32
	Salinity_max    float32
	Height_min      float32
	Height_max      float32
	Summary         string
	// Uses            pq.StringArray `gorm:"type:text[]"`
	CreatedAt time.Time
	UpdatedAt time.Time

	// Taxonomy        Taxonomy      `gorm:"type:text[]"`
	// Crop_type       CropPlantType `gorm:"type:text[]"`
}

type Category struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

type WikiCrop struct {
	Category      Category `json:"category"`
	Common_name   string   `json:"common_name"`
	Species_name  string   `json:"species_name"`
	Cultivar_list string   `json:"cultivar_list"`
}
