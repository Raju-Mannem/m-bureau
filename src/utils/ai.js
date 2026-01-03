
/**
 * Extracts structured data from raw text using Backend API (which calls Hugging Face).
 * @param {string} rawText - The text extracted from the PDF.
 * @returns {Promise<Array<{label: string, value: string}>>} - Structured data.
 */
export const extractDataWithAI = async (rawText) => {
    const API_URL = `${import.meta.env.VITE_API_URL}/ai/extract-bio-data`;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: rawText
        }),
    });

    if (!response.ok) {
        throw new Error(`Backend API Error: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    if (!result || !Array.isArray(result.items)) {
        console.error("Invalid AI response structure:", result);
        throw new Error("Failed to parse AI response as JSON.");
    }
    return result.items;
};