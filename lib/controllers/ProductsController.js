import * as ProductsService from "../services/ProductsService";

const getProductById = (req, res) => {
  ProductsService.getProductById(req, res);
};

const getAllProducts = (req, res) => {
  ProductsService.getAllProducts(req, res);
};

const createProduct = (req, res) => {
  ProductsService.createProduct(req, res);
};

export { getProductById, getAllProducts, createProduct };
