import Tesseract from "tesseract.js";

/**
 * Extract text from an image using OCR (Tesseract.js)
 * @param {File} file - Image file
 * @returns {Promise<string>}
 */
export const extractTextFromImage = async (file) => {
  const { data } = await Tesseract.recognize(file, "eng", {
    // logger: (m) => console.log(m), for progress logging
  });

  return data.text;
};
