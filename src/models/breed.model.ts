export interface Breed {
  id: string;
  name: string;
  bred_for: string;
  breed_group: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  weight: Size;
  country_code: string;
  height: Size;
  image: Breed_Image;
  reference_image_id: string;
}

export interface Breed_Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface Size {
  imperial: string;
  metric: string;
}
