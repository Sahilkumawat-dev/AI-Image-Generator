const generateForm = document.querySelector(".generate-form");
const generateBtn = generateForm.querySelector(".generate-btn");
const imageGallery = document.querySelector(".image-gallery");

// const OPENAI_API_KEY = "your API heare"; 
// let isImageGenerating = false;

// Temporary Mock Data for API Response
const mockApiResponse = () => {
  return {
    data: Array.from({ length: 4 }, (_, index) => ({
      b64_json: btoa(`Mock image data ${index + 1}`),
    })),
  };
};
/* NotesSociety */

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imgObject, index) => {
    const imgCard = document.createElement("div");
    imgCard.classList.add("img-card");

    const imgElement = document.createElement("img");
    const downloadBtn = document.createElement("a");

    // mock img placeholder
    const aiGeneratedImage = `https://via.placeholder.com/512?text=Image+${index + 1}`;
    imgElement.src = aiGeneratedImage;

    downloadBtn.href = aiGeneratedImage;
    downloadBtn.download = `image-${index + 1}.jpg`;
    downloadBtn.textContent = "Download";
    downloadBtn.style.position = "absolute";
    downloadBtn.style.bottom = "10px";
    downloadBtn.style.right = "10px";
    downloadBtn.style.padding = "5px 10px";
    downloadBtn.style.background = "rgba(0, 0, 0, 0.7)";
    downloadBtn.style.color = "#fff";
    downloadBtn.style.borderRadius = "5px";
    downloadBtn.style.textDecoration = "none";

    imgCard.appendChild(imgElement);
    imgCard.appendChild(downloadBtn);
    imageGallery.appendChild(imgCard);
  });
};
/* NotesSociety */

const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    // simulate an API call with mock data
    const response = mockApiResponse();
    updateImageCard(response.data);
  } catch (error) {
    alert("An error occurred while generating images.");
  } finally {
    generateBtn.removeAttribute("disabled");
    generateBtn.textContent = "Generate";
  }
};
/* NotesSociety */

generateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userPrompt = e.target.querySelector(".prompt-input").value;
  const userImgQuantity = parseInt(e.target.querySelector(".img-quantity").value);

  generateBtn.setAttribute("disabled", true);
  generateBtn.textContent = "Generating...";
  imageGallery.innerHTML = ""; // clear img 

  generateAiImages(userPrompt, userImgQuantity);
});
