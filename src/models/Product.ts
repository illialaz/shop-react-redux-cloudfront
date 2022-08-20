import * as Yup from 'yup';

export type Product = {
  id: string,
  brand: string,
  model: string,
  engine: string,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  id: Yup.string().required(),
  brand: Yup.string().required(),
  model: Yup.string(),
  engine: Yup.string().required(),
  price: Yup.number().required(),
});
