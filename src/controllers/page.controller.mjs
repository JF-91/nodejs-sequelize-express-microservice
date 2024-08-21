// controllers/page.controller.mjs
import Page from "../models/page.model.mjs";

class PageController {
  // Crear una nueva página
  static async createPage(req, res) {
    try {
      const { title, content, slug, metaTitle, metaDescription, metaKeywords } =
        req.body;
      const page = await Page.create({
        title,
        content,
        slug,
        metaTitle,
        metaDescription,
        metaKeywords,
      });
      return res.status(201).json(page);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener todas las páginas
  static async getAllPages(req, res) {
    try {
      const pages = await Page.findAll();
      return res.status(200).json(pages);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener una página por ID
  static async getPageById(req, res) {
    try {
      const { id } = req.params;
      const page = await Page.findByPk(id);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      return res.status(200).json(page);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Actualizar una página
  static async updatePage(req, res) {
    try {
      const { id } = req.params;
      const { title, content, slug, metaTitle, metaDescription, metaKeywords } =
        req.body;
      const page = await Page.findByPk(id);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      await page.update({
        title,
        content,
        slug,
        metaTitle,
        metaDescription,
        metaKeywords,
      });
      return res.status(200).json(page);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Eliminar una página
  static async deletePage(req, res) {
    try {
      const { id } = req.params;
      const page = await Page.findByPk(id);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      await page.destroy();
      return res.status(204).json({ message: "Page deleted" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default PageController;
