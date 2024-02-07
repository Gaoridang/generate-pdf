import { Request, Response } from 'express';
import { pdfDataSchema } from '../libs/schema';
import puppeteer from 'puppeteer';
import path from 'path';

const generatePDF = async (req: Request, res: Response) => {
  try {
    const validation = pdfDataSchema.safeParse(req.body);
    if (validation.success) {
      const { htmlContent } = validation.data;

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      try {
        await page.setContent(htmlContent);
        await page.addStyleTag({ path: path.join(__dirname, '..', 'style.css') });
      } catch (styleError) {
        console.error('Error loading styles:', styleError);
      }
      const pdf = await page.pdf({ format: 'A4' });
      await browser.close();

      res.contentType('application/pdf');
      res.status(200).send(pdf);
    } else {
      res.status(400).send({ message: validation.error.message });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};

export default generatePDF;
