import Tesseract from "tesseract.js";

/**
 * Preprocess an image (canvas) to improve OCR accuracy
 * @param {HTMLImageElement | HTMLCanvasElement} img 
 * @param {number} scale - factor to upscale image
 * @returns {HTMLCanvasElement}
 */
const preprocessImage = (img, scale = 2) => {
  // Create a canvas
  const canvas = document.createElement("canvas");
  canvas.width = img.width * scale;
  canvas.height = img.height * scale;
  const ctx = canvas.getContext("2d");

  // Draw and upscale image
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Convert to grayscale and apply threshold
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Grayscale
    const gray = 0.299 * r + 0.587 * g + 0.114 * b;

    // Threshold (binarization)
    const value = gray > 150 ? 255 : 0;
    data[i] = data[i + 1] = data[i + 2] = value;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas;
};

/**
 * Extract text from an image or canvas using Tesseract.js
 * Supports live-captured images (from <video> or canvas)
 * @param {File | HTMLImageElement | HTMLCanvasElement} input 
 * @returns {Promise<string>}
 */
export const extractTextFromImage = async (input) => {
  let canvas;

  // If input is a File, create image first
  if (input instanceof File) {
    const img = new Image();
    img.src = URL.createObjectURL(input);

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    canvas = preprocessImage(img);
  } else if (input instanceof HTMLImageElement || input instanceof HTMLCanvasElement) {
    canvas = preprocessImage(input);
  } else {
    throw new Error("Unsupported input type. Use File, Image, or Canvas.");
  }

  // Use Tesseract on the preprocessed canvas
  const { data } = await Tesseract.recognize(canvas, "eng", {
    // logger: (m) => console.log(m), // for progress logging
    tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    psm: 6, // assumes a block of text
  });

  return data.text;
};
