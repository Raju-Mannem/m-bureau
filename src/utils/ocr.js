import Tesseract from "tesseract.js";

/**
 * Preprocesses the image using Canvas to improve OCR accuracy
 * @param {File | Blob} file 
 * @returns {Promise<string>} - Returns a base64 string of the processed image
 */
const preprocessImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // 1. Scale up for better DPI (Tesseract likes 300 DPI)
        // We double the dimensions to help with small webcam text
        canvas.width = img.width * 2;
        canvas.height = img.height * 2;

        // 2. Apply filters via Canvas context
        ctx.filter = "grayscale(100%) contrast(150%) brightness(110%)";
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 3. Optional: Manual Binarization (Black/White only)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          const threshold = 120; // Adjust based on lighting
          const val = avg > threshold ? 255 : 0;
          data[i] = data[i + 1] = data[i + 2] = val;
        }
        ctx.putImageData(imageData, 0, 0);

        resolve(canvas.toDataURL("image/jpeg", 1.0));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};

/**
 * Extract text with enhanced preprocessing for live photos
 */
export const extractTextFromImage = async (file) => {
  // Preprocess the file first
  const processedImage = await preprocessImage(file);

  const { data } = await Tesseract.recognize(processedImage, "eng", {
    // These parameters are crucial for low-res webcam captures
    workerParams: {
      tessedit_char_whitelist: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,-/', // Limit characters if possible for speed
    },
    // Page Segmentation Mode 6: Assume a single uniform block of text.
    // Use 3 for fully automatic layout.
    initialOptions: {
      user_defined_dpi: '300',
    }
  });

  return data.text;
};