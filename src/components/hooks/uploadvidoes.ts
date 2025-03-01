export const uploadToCloudinary = async (file: File, resourceType: "image" | "video") => {
    if (!file) {
        console.error("No file provided for upload.");
        return null;
    }

    const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default";
    const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!CLOUDINARY_CLOUD_NAME) {
        console.error("Cloudinary cloud name is not defined.");
        return null;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`,
            {
                method: "POST",
                body: formData,
                mode: "cors",
            }
        );

        // Store response text before parsing
        const responseClone = response.clone(); // Clone response for debugging
        const responseText = await responseClone.text();
        

        if (!response.ok) {
            throw new Error(`Cloudinary upload failed: ${response.status} ${response.statusText}`);
        }

        // Parse JSON only once
        const data = await response.json();
        return data.secure_url; // Return the uploaded file URL

    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        return null;
    }
};
