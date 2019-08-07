import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  quantity: { type: Number, default: 1 },
  available: { type: Boolean, default: true },
  metadata: {
    description: String,
    productType: { type: String, default: 'Electronics' },
    imported: { type: Boolean, default: false },
  },
});

const productModel = model('productModel', productSchema);

export default productModel;
