export interface ColorItem {
  id: number;
  value: string;
  color: string;
}

export interface UserPropsModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  };
}
