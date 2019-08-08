/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import ProductModel from '../models/Product';

// Get product by productId
const getProductById = (req, res) => {
  const id = req.params.productId;
  ProductModel
    .findById(id)
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: 'Success - Get Product by Id',
          response: result,
        });
      } else {
        res.status(404).json({
          message: 'No records found',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

// Get all products
const getAllProducts = (_req, res) => {
  ProductModel
    .find()
    .exec()
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: 'Success',
          response: result,
        });
      } else {
        res.status(404).json({
          message: 'No records found',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

// Create a product by post
const createProduct = (req, res) => {
  try {
    const pType = req.body.metadata.productType
      ? req.body.metadata.productType
      : 'Electronics';
    const productEntity = new ProductModel({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      quantity: req.body.quantity,
      available: req.body.available,
      metadata: {
        description: req.body.metadata.description,
        imported: req.body.metadata.imported,
        productType: pType,
      },
    });
    productEntity
      .save()
      .then((_result) => {
        // console.log('Response ' + result);
        res.status(201).json({
          message: 'Successfully created the product',
          createdProduct: productEntity,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: 'Error occured',
          errorDetails: err,
        });
      });
  } catch (err) {
    res.status(500).json({
      message: 'Error occured',
      errorDetails: err,
    });
  }
};

export { getProductById, getAllProducts, createProduct };
