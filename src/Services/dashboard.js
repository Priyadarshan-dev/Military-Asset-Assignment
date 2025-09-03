// const BASE_URL = "https://servermms.onrender.com/api";

// export async function getDashboardData() {
//   try {
//     const response = await fetch(`${BASE_URL}/dashboard`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // 🔑 Use your token here
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODFmYTQxMzNmZTg0MmMxNjFiOTdmOGUiLCJpYXQiOjE3NTY4OTMyMTksImV4cCI6MTc1Njk3OTYxOX0.xGYA7R39wq69ip3R1UwRIJkkB_fZXAx8kjwwkD6fqus`
//       },
//     });

//     if (!response.ok) throw new Error("Failed to fetch data");
//     const data = await response.json();
//     return data; // return full data
//   } catch (error) {
//     console.error(`Error: ${error}`);
//     return null;
//   }
// }
