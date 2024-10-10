console.log("ok!");

var questions = document.getElementById("question");
var answers = document.getElementById("answer");

var apiUrl = "https://widipe.com/openai";

async function sendReq() {
  try {
    const url = `${apiUrl}?text=${questions.value}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    answers.innerHTML = data.result;
    console.log(data);
  } catch (error) {
    console.log(error.massage);
  }
}

// Fungsi untuk menampilkan respon API
// function displayApiContent(response) {
//   // Menambahkan nama creator
//   const creatorElement = document.createElement("p");
//   creatorElement.classList.add("text-sm", "text-gray-500", "mb-4");
//   creatorElement.textContent = `Creator: ${response.creator}`;
//   answers.appendChild(creatorElement);

//   // Menambahkan konten hasil
//   const resultElement = document.createElement("div");
//   resultElement.classList.add("prose", "prose-lg", "text-gray-800");

//   // Gunakan innerHTML untuk merender konten dengan format bold
//   resultElement.innerHTML = response.result.replace(/\n/g, "<br>"); // Mengganti newline (\n) dengan <br> untuk membuat line break
//   answers.appendChild(resultElement);
// }

// // Panggil fungsi untuk menampilkan konten API
// displayApiContent(apiResponse);
