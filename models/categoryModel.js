import { query } from "../db.js";

// Get all categories
export const getAllCategories = (callback) => {
    query("SELECT * FROM categories", callback);
};

// Get a category by ID
export const getCategoryById = (id, callback) => {
    query("SELECT * FROM categories WHERE id = ?", [id], callback);
};

// Create a new category
export const createCategory = (name, callback) => {
    query("INSERT INTO categories (name) VALUES (?)", [name], callback);
};

// Update a category
export const updateCategory = (id, name, callback) => {
    query("UPDATE categories SET name = ? WHERE id = ?", [name, id], callback);
};

// Delete a category
export const deleteCategory = (id, callback) => {
    query("DELETE FROM categories WHERE id = ?", [id], callback);
};
