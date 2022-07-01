import * as Yup from 'yup';

export type Product = {
  id: string,
  brand: string,
  model: string,
  engineCapacity: number,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  id: Yup.string().required(),
  brand: Yup.string().required(),
  model: Yup.string(),
  engineCapacity: Yup.number().required(),
  price: Yup.number().required(),
});
