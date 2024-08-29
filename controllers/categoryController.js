import * as CategoryModel from "../models/categoryModel.js";

// Get all categories
export const getAllCategories = (req, res) => {
    CategoryModel.getAllCategories((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Get a category by ID
export const getCategoryById = (req, res) => {
    const id = parseInt(req.params.id);
    CategoryModel.getCategoryById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.json(results[0]);
    });
};

// Create a new category
export const createCategory = (req, res) => {
    const { name } = req.body;
    CategoryModel.createCategory(name, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name });
    });
};

// Update a category
export const updateCategory = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    CategoryModel.updateCategory(id, name, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.json({ id, name });
    });
};

// Delete a category
export const deleteCategory = (req, res) => {
    const id = parseInt(req.params.id);
    CategoryModel.deleteCategory(id, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(204).send();
    });
};
