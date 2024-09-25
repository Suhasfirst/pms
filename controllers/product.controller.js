const Product = require('../model/product.model.js')

const getProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            res.status(404).json({ message: 'Item Not Found' })
        }
        const updatedProduct = await Product.findById(id)

        res.status(200).json(updatedProduct)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Item Not Found' });
        }

        res.status(200).json({ message: 'Item Deleted Successfully' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}